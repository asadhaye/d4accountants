"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Message } from "ai";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: originalHandleSubmit,
  } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat error:", error);
      setError("Failed to send message. Please try again.");
      setIsLoading(false);
    },
  });
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Added for better focus management

  // Focus management when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // Focus input instead of card for better UX
    }
  }, [isOpen]);

  // Enhanced submit handler with error handling and loading state
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!input.trim()) {
      setError("Please enter a message");
      return;
    }

    try {
      setIsLoading(true);
      await originalHandleSubmit(e);
    } catch (err) {
      console.error("Failed to send message:", err);
      setError("An error occurred while sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      role="region"
      aria-label="Chat Interface"
    >
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Open chat"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </Button>
      ) : (
        <Card
          ref={chatRef}
          tabIndex={0}
          role="dialog"
          aria-label="Chat window"
          className="w-[350px] h-[500px] flex flex-col bg-card text-card-foreground focus:outline-none"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl">Chat with Us</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-4 flex flex-col">
            <ScrollArea
              className="flex-1 pr-4"
              role="log"
              aria-label="Chat messages"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="space-y-4">
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg"
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                {messages.map((message: Message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%] flex items-center space-x-2">
                      <div
                        className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex items-center space-x-2"
            >
              <Input
                ref={inputRef} // Added ref for focus
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Chat message input"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "chat-error" : undefined}
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                aria-label="Send message"
                disabled={isLoading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}