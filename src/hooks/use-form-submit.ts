import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

type SubmitHandler<T> = (data: T) => Promise<Response>;

interface UseFormSubmitOptions {
  successMessage?: string;
  errorMessage?: string;
  onSuccess?: () => void;
}

export function useFormSubmit<T>() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (
    submitHandler: SubmitHandler<T>,
    data: T,
    options: UseFormSubmitOptions = {}
  ) => {
    const {
      successMessage = "We'll be in touch with you shortly.",
      errorMessage = "Failed to submit form. Please try again.",
      onSuccess
    } = options;

    setIsSubmitting(true);
    try {
      const response = await submitHandler(data);

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: "Success!",
        description: successMessage,
      });

      onSuccess?.();
    } catch (err) {
      const message = err instanceof Error ? err.message : errorMessage;
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit,
  };
}