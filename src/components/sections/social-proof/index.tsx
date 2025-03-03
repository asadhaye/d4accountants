"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, Tech Innovations Ltd",
    content: "Bonusbank has transformed our financial management. Their expertise and personalized service are unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, Growth Ventures",
    content: "Outstanding service! They've helped us optimize our tax strategy and improve our financial planning.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Director, Creative Solutions",
    content: "Professional, responsive, and incredibly knowledgeable. Highly recommend their services!",
    rating: 5
  }
];

const stats = [
  { value: "95%", label: "Client Satisfaction" },
  { value: "500+", label: "Businesses Served" },
  { value: "£10M+", label: "Tax Savings" },
  { value: "15+", label: "Years Experience" }
];

export function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-950 via-fuchsia-950 to-violet-950">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">
            Trusted by Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our clients say about our services and the impact we've made
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              custom={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Card className="relative h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">
                    {stat.value}
                  </p>
                  <p className="text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeIn}
              custom={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Card className="relative h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-violet-400/20 mb-4" />
                  <p className="text-gray-300 mb-6">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-violet-400">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-violet-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}