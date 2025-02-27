"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Ltd",
    content: "The team's expertise in tax planning has saved us thousands. Their proactive approach and attention to detail are outstanding.",
    image: "/images/testimonials/sarah.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthBox",
    content: "Switching to their bookkeeping services was the best decision we made. The cloud-based solutions have streamlined our operations significantly.",
    image: "/images/testimonials/michael.jpg",
    rating: 5
  },
  {
    name: "Emma Thompson",
    position: "Director, Creative Solutions",
    content: "Their financial advisory services have been instrumental in our company's growth. The insights provided are invaluable.",
    image: "/images/testimonials/emma.jpg",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by businesses across industries
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeIn}
              custom={index}
              className="flex"
            >
              <Card className="h-full flex flex-col transition-all hover:shadow-lg border-2 hover:border-amber-400/20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-bl-[100%] transition-transform duration-300 group-hover:scale-110" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-400">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-amber-400/20 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-300 relative z-10 pl-4">
                    {testimonial.content}
                  </p>
                  <div className="flex gap-1 mt-4 pl-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}