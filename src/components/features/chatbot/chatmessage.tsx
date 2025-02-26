import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ChatMessage as MessageType } from "@/app/api/chat/types";
import DOMPurify from "isomorphic-dompurify";

interface ChatMessageProps {
  message: MessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-xl px-4 py-2",
          isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}
      >
        <div 
          dangerouslySetInnerHTML={{ 
            __html: DOMPurify.sanitize(message.content) 
          }} 
        />
      </div>
    </motion.div>
  );
}