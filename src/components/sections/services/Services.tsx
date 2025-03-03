"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { CheckCircle } from "lucide-react";

const services = [
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

export const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Comprehensive accounting and financial services tailored to your needs. We combine expertise with innovation to help you succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group"
            >
              <motion.div variants={fadeIn} className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Card className="relative h-full bg-white/5 backdrop-blur-xl border-blue-500/10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-teal-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-white/5 text-teal-400 hover:bg-blue-500/20 hover:text-teal-300 border border-blue-500/10 hover:border-teal-500/20 transition-colors"
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
