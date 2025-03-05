'use client';

import { useChat } from './use-chat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { ChatMessageSkeleton } from '@/components/ui/skeletons/chat-skeleton';
import { useErrorHandler } from '@/hooks/use-error-handler';
import { animations } from '@/lib/styles/design-system';

export function ChatInterface() {
  const { messages, input, setInput, handleSubmit, isLoading } = useChat();
  const { handleError } = useErrorHandler();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSubmit();
    } catch (error) {
      handleError(error, {
        title: 'Chat Error',
        description: 'Failed to send message. Please try again.',
        action: {
          label: 'Retry',
          onClick: () => handleSubmit(),
        },
      });
    }
  };

  return (
    <ErrorBoundary>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-800'
                    }`}
                    style={{
                      animation: `${animations.durations.normal} ${animations.timings['ease-out']} slideIn`,
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && <ChatMessageSkeleton />}
            </div>
          </ScrollArea>

          <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="transition-all duration-200"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </ErrorBoundary>
  );
}
