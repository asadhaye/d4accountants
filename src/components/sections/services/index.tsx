"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Tax Planning",
    description: "Strategic tax planning and optimization for businesses",
    href: "/services/tax-planning",
    icon: "📊",
    benefits: [
      "Minimize tax liability",
      "Stay compliant with regulations",
      "Strategic financial planning"
    ]
  },
  {
    title: "Bookkeeping",
    description: "Comprehensive bookkeeping and financial record management",
    href: "/services/bookkeeping",
    icon: "📚",
    benefits: [
      "Accurate financial records",
      "Regular financial reporting",
      "Cloud-based solutions"
    ]
  },
  {
    title: "Financial Advisory",
    description: "Expert financial guidance and advisory services",
    href: "/services/financial-advisory",
    icon: "💡",
    benefits: [
      "Business growth strategies",
      "Investment planning",
      "Financial risk management"
    ]
  }
];

export function ServiceCards() {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-background to-background/50"
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
          <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial expertise to support every aspect of your business
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              custom={index}
              className="flex"
            >
              <Card className="h-full flex flex-col transition-all hover:shadow-lg border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={service.href} className="w-full">
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          variants={fadeIn}
        >
          <p className="text-muted-foreground mb-6">
            Looking for specific service packages? Check out our tailored solutions.
          </p>
          <Link href="/services">
            <Button size="lg" className="px-8">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
