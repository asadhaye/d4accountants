"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "D4 Accountants transformed our financial management. Their expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    position: "CEO, Tech Solutions Ltd"
  },
  {
    quote: "Professional, responsive, and innovative. They've helped us save significantly on taxes while ensuring compliance.",
    author: "Michael Chen",
    position: "Director, Growth Ventures"
  },
  {
    quote: "Their AI-powered insights have given us a competitive edge. Highly recommended!",
    author: "Emma Thompson",
    position: "Founder, Digital First"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}