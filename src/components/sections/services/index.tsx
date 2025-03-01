"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
  benefits: string[];
}

const services: Service[] = [
  {
    title: "Tax Planning",
    description: "Strategic tax planning and optimization for businesses",
    href: "/services/tax-planning",
    icon: "✨",
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
    icon: "📈",
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
    icon: "💎",
    benefits: [
      "Business growth strategies",
      "Investment planning",
      "Financial risk management"
    ]
  }
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <motion.div variants={fadeIn} custom={index}>
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="text-3xl text-primary mb-4">{service.icon}</div>
        <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {service.benefits.map((benefit: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={service.href} className="w-full">
          <Button 
            className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  </motion.div>
);

export const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions to help your business thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
