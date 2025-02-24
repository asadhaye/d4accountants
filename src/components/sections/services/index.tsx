"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Tax Planning",
    description: "Strategic tax planning and optimization for businesses",
    href: "/services/tax-planning",
    icon: "📊"
  },
  {
    title: "Bookkeeping",
    description: "Comprehensive bookkeeping and financial record management",
    href: "/services/bookkeeping",
    icon: "📚"
  },
  {
    title: "Financial Advisory",
    description: "Expert financial guidance and advisory services",
    href: "/services/financial-advisory",
    icon: "💡"
  }
];

export function ServiceCards() {
  return (
    <motion.section 
      className="py-20 bg-background"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Our Services
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              custom={index}
            >
              <Link href={service.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeIn}
        >
          <Link href="/services">
            <Button size="lg">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
