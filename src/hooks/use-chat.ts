import { useState, useCallback } from 'react';
import type { ChatMessage } from "@/app/api/chat/types";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Add user message to the chat
      const userMessage: ChatMessage = {
        role: 'user',
        content,
        createdAt: new Date(),
        sessionId: crypto.randomUUID()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Send to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const data = await response.json();
      
      // Add assistant response to chat
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.response,
        createdAt: new Date(),
        sessionId: userMessage.sessionId
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      return assistantMessage;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Chat error:', err);
      
      // Add error message
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
        createdAt: new Date(),
        sessionId: crypto.randomUUID()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      return errorMessage;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
  };
}