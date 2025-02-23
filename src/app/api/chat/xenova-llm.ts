import { Pipeline } from "@xenova/transformers";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { BaseMessage, ChatResult, Generation } from "@langchain/core/messages";
import { ChatGenerationChunk, GenerationChunk } from "@langchain/core/outputs";

export class XenovaLLMWrapper extends BaseChatModel {
  lc_namespace = ["xenova", "chat_model"];

  constructor(
    private pipeline: Pipeline,
    private options = { 
      maxTokens: 500,
      temperature: 0.7,
      topP: 0.95,
      repetitionPenalty: 1.1
    }
  ) {
    super({});
  }

  async _generate(
    messages: BaseMessage[],
    options: this["ParsedCallOptions"] = {}
  ): Promise<ChatResult> {
    try {
      const prompt = messages.map((m) => `${m.type}: ${m.content}`).join("\n");
      
      const result = await this.pipeline(prompt, {
        max_new_tokens: options.maxTokens ?? this.options.maxTokens,
        temperature: options.temperature ?? this.options.temperature,
        top_p: this.options.topP,
        repetition_penalty: this.options.repetitionPenalty,
        do_sample: true,
      });

      let text: string;
      if (Array.isArray(result)) {
        text = result[0].generated_text;
      } else if (typeof result === 'object' && 'generated_text' in result) {
        text = result.generated_text;
      } else {
        throw new Error("Invalid pipeline response format");
      }

      const generation: Generation = {
        text,
        generationInfo: { ...options },
      };

      return {
        generations: [generation],
      };
    } catch (error) {
      console.error("Generation error:", error);
      throw error;
    }
  }

  async *_streamResponseChunks(
    messages: BaseMessage[],
    options: this["ParsedCallOptions"],
    runManager?: CallbackManagerForLLMRun
  ): AsyncGenerator<ChatGenerationChunk> {
    const response = await this._generate(messages, options);
    for (const generation of response.generations) {
      yield new ChatGenerationChunk({
        text: generation.text,
        generationInfo: generation.generationInfo,
      });
    }
  }

  _llmType(): string {
    return "xenova-chat";
  }
}