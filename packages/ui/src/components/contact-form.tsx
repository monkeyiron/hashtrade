"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormInput, FormTextarea } from "./form-input";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid format"),
  company: z.string().optional(),
  subject: z.string().min(5, "Required"),
  message: z.string().min(10, "Required (min 10 chars)"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate network delay for backend proxy
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("[FORM_SUBMITTED]", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="relative border border-border/40 bg-card p-8 md:p-12 shadow-sm">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-medium tracking-tight mb-2">Message Sent</h3>
            <p className="font-sans text-muted-foreground">We have received your details and will get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Full Name"
                placeholder="Jane Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <FormInput
                label="Email Address"
                placeholder="jane@example.com"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Organization"
                placeholder="Optional"
                error={errors.company?.message}
                {...register("company")}
              />
              <FormInput
                label="Subject"
                placeholder="How can we help?"
                error={errors.subject?.message}
                {...register("subject")}
              />
            </div>
            <FormTextarea
              label="Message"
              placeholder="Tell us more about your inquiry..."
              error={errors.message?.message}
              {...register("message")}
            />
            
            <Button 
              type="submit" 
              className="mt-4 w-full md:w-auto self-end px-8 py-6 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
