import React from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message?: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] p-3 rounded-lg ${
          message.sender === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        <p>{message.text}</p>
        <span className="text-xs opacity-75">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};