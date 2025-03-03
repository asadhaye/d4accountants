"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";
import { useFloatingElements } from "@/hooks/use-floating-elements";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
}

const features: Feature[] = [
  {
    title: "Expert Guidance",
    description: "Our team of certified accountants provides expert advice tailored to your business needs.",
    icon: <CheckCircle className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Time Efficiency",
    description: "We help you save valuable time by handling complex financial matters efficiently.",
    icon: <Clock className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Financial Security",
    description: "Ensure compliance and minimize risks with our comprehensive financial services.",
    icon: <Shield className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Growth Strategy",
    description: "Strategic financial planning to help your business achieve sustainable growth.",
    icon: <TrendingUp className="h-10 w-10 text-teal-400" />,
  },
];

export const WhyChooseUs = () => {
  const floatingElements = useFloatingElements(10);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full opacity-30"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            initial={{
              x: element.x,
              y: element.y,
              scale: element.scale,
            }}
            animate={{
              y: [
                Math.random() * element.y,
                Math.random() * element.y,
              ],
              x: [
                Math.random() * element.x,
                Math.random() * element.x,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          />
        ))}      
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500"
            variants={fadeIn}
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            We combine professional expertise with personalized service to deliver exceptional value to our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeIn}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Card className="relative h-full bg-white/5 backdrop-blur-xl border-blue-500/10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 shadow-inner w-fit">
                    {React.cloneElement(feature.icon, { className: 'h-10 w-10 text-teal-400' })}
                  </div>
                  <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
