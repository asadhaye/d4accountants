import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface ChatAuthState {
  canSendMessage: boolean;
  messageCount: number;
  isAuthenticated: boolean;
}

export function useChatAuth() {
  const { data: session } = useSession();
  const [state, setState] = useState<ChatAuthState>({
    canSendMessage: true,
    messageCount: 0,
    isAuthenticated: false
  });

  useEffect(() => {
    setState(prev => ({
      ...prev,
      isAuthenticated: !!session
    }));
  }, [session]);

  const incrementMessageCount = () => {
    setState(prev => {
      const newCount = prev.messageCount + 1;
      return {
        ...prev,
        messageCount: newCount,
        canSendMessage: session ? true : newCount < 3
      };
    });
  };

  return {
    ...state,
    incrementMessageCount
  };
}