"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { fadeIn, formField, staggerContainer } from "@/lib/animations";
import { handleError } from "@/lib/error-handling";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { BaseInput, commonInputClasses } from "@/components/ui/base-input";
import { cn } from "@/lib/utils";

interface LeadCaptureFormProps {
  service: "tax-planning" | "bookkeeping" | "financial-advisory";
}

export function LeadCaptureForm({ service }: LeadCaptureFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phone, setPhone] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phone,
      serviceInterest: service,
      message: formData.get("message") as string,
    };

    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(data.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Thank you for your interest. We'll contact you soon!",
          duration: 5000,
        });
        event.currentTarget.reset();
        setPhone("");
      } else {
        const errorData = await response.json().catch(() => ({}));
        handleError(new Error(errorData.message || "API Error"), {
          category: "lead-capture",
          additionalData: { formData: data },
          userMessage:
            errorData.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error(String(error));
      handleError(err, {
        category: "lead-capture",
        additionalData: { formData: data },
        userMessage:
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      role="region"
      aria-label="Contact Form"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Get in Touch
        </h2>
        <motion.div className="max-w-2xl mx-auto" variants={staggerContainer}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
            aria-busy={isSubmitting}
          >
            <motion.div variants={formField}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <BaseInput
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
                error={!!errors.name}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </motion.div>

            <motion.div variants={formField}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <BaseInput
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                disabled={isSubmitting}
                error={!!errors.email}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </motion.div>

            <motion.div variants={formField}>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <PhoneInput
                id="phone"
                placeholder="Enter phone number"
                value={phone}
                onChange={(value) => setPhone(value || "")}
                disabled={isSubmitting}
                className={cn("flex", commonInputClasses)}
                inputClassName={cn(
                  commonInputClasses,
                  errors.phone && "border-red-500"
                )}
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </motion.div>

            <motion.div variants={formField}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                disabled={isSubmitting}
                className={`w-full ${errors.message ? "border-red-500" : ""}`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={formField}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}