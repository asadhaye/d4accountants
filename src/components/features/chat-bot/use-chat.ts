'use client';

import { useState, useCallback } from 'react';
import type { ChatMessage } from '@/app/api/chat/types';
import { useToast } from '@/hooks/use-toast';

interface UseChatProps {
  initialMessages?: ChatMessage[];
  onError?: (error: Error) => void;
}

export function useChat({ initialMessages = [], onError }: UseChatProps = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [input, setInput] = useState('');

  const sendMessage = useCallback(async (content: string, useOpenAI = false) => {
    try {
      setIsLoading(true);
      setError(null);

      // Add user message immediately
      const userMessage: ChatMessage = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      // Send to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: content,
          sessionId,
          useOpenAI,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      // Store session ID from first response
      if (!sessionId && data.sessionId) {
        setSessionId(data.sessionId);
      }

      // Add AI response
      const aiMessage: ChatMessage = {
        role: 'assistant',
        content: data.message,
        source: data.modelSource,
      };
      setMessages(prev => [...prev, aiMessage]);

      // Show model source in toast
      toast({
        title: `Using ${data.modelSource === 'local' ? 'Local' : 'Enhanced'} Model`,
        description: data.modelSource === 'local' 
          ? 'Response generated using on-device model'
          : 'Response generated using enhanced cloud model',
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      onError?.(err as Error);
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, onError, toast]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
    setSessionId(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput('');
  }, [input, sendMessage]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    input,
    setInput,
    handleSubmit,
  };
}
