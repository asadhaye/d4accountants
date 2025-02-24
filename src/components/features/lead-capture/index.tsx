"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { fadeIn, slideUp } from "@/lib/animations";
import { leadValidationSchema, type LeadFormData } from "@/lib/db/schema";


interface LeadCaptureFormProps {
  service?: LeadFormData['serviceInterest'];
}

type FormData = LeadFormData;

export function LeadCaptureForm({ service }: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(leadValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceInterest: service || 'tax-planning', // Provide a default value when service is undefined
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: "Success!",
        description: "We'll be in touch with you shortly.",
      });
      reset();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit form. Please try again.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto p-6"
    >
      <div className="space-y-8">
        <motion.div variants={slideUp} className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("name")}
                placeholder="Your Name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("phone")}
                type="tel"
                placeholder="Phone Number (Optional)"
              />
            </div>

            <Input
              {...register("serviceInterest")}
              type="hidden"
              value={service}
            />

            <div>
              <Textarea
                {...register("message")}
                placeholder="How can we help you?"
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
