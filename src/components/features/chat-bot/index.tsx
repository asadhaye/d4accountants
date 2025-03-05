"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { signIn } from "next-auth/react";

// Local imports
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

// UI Components (Ensure these exist in your project)
import { Button } from "./components/ui/button"; // ✅ Fixed Button Import
import { Card } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { ErrorBoundary } from "../shared/error-boundary/error-boundary";

// Hooks (Ensure these exist in your hooks directory)
import { useChatAuth } from "@/hooks/index";
import { useChat } from "./hooks/use-chat";

// Animations (Ensure animations exist in this path)
import { animations } from "@/lib/styles/design-system";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { canSendMessage, incrementMessageCount, isAuthenticated } = useChatAuth();
  
  const {
    messages,
    isLoading,
    sendMessage,
  } = useChat();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!canSendMessage) {
      return;
    }
    
    await sendMessage(content);
    incrementMessageCount();
  };

  return (
    <ErrorBoundary fallback={<p className="text-red-500">Something went wrong with the chat</p>}>
      <>
        {/* Chat toggle button */}
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full shadow-lg"
          size="icon"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        {/* Chat window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animations.fadeIn}
              className="fixed bottom-4 right-4 z-50 w-80 sm:w-96"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-border">
                {/* Chat header */}
                <div className="bg-primary p-3 text-primary-foreground flex justify-between items-center">
                  <h3 className="font-medium">Chat with D4 Accountants</h3>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary/80"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Chat messages */}
                <ScrollArea className="h-80 p-4">
                  <div ref={scrollRef}> {/* ✅ Fix: Moved ref inside ScrollArea */}
                    {messages.length === 0 ? (
                      <motion.p 
                        variants={animations.slideUp} 
                        className="text-muted-foreground text-center py-8"
                      >
                        How can we help you today?
                      </motion.p>
                    ) : (
                      messages.map((message, index) => (
                        <ChatMessage key={index} message={message} />
                      ))
                    )}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-secondary text-secondary-foreground max-w-[80%] rounded-xl px-4 py-2">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.2s]" />
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Chat input */}
                {!isAuthenticated ? (
                  <div className="p-3 border-t border-border">
                    <Button 
                      onClick={() => signIn()} 
                      className="w-full"
                    >
                      Sign in to chat
                    </Button>
                  </div>
                ) : (
                  <ChatInput 
                    onSendMessage={handleSendMessage}
                    isLoading={isLoading}
                    disabled={!canSendMessage}
                  />
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </ErrorBoundary>
  );
}

export { ChatBot as default, ChatInput, ChatMessage };
