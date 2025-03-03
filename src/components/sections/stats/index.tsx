"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
  },
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}