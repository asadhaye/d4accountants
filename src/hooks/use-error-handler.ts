import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ErrorOptions {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function useErrorHandler() {
  const { toast } = useToast();

  const handleError = useCallback((error: Error | unknown, options?: ErrorOptions) => {
    console.error('Error caught:', error);

    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    
    toast({
      variant: 'destructive',
      title: options?.title || 'Error',
      description: options?.description || errorMessage,
      action: options?.action,
    });
  }, [toast]);

  return { handleError };
}
