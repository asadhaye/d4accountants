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

export function ServiceCards() {
  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-violet-500/20 to-fuchsia-500/20 blur-3xl rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">Our Core Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial expertise to support every aspect of your business
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              custom={index}
              className="flex group"
            >
              <Card className="h-full flex flex-col relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="pb-4 relative">
                  <div className="text-5xl mb-4 p-4 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 shadow-inner w-fit mx-auto group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow relative">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 group/item">
                        <CheckCircle className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5 group-hover/item:text-fuchsia-400 transition-colors duration-300" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="relative">
                  <Link href={service.href} className="w-full">
                    <Button variant="outline" className="w-full group/button bg-white/5 hover:bg-white/10 border-violet-500/30 hover:border-fuchsia-500/50 text-violet-400 hover:text-fuchsia-400">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
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
          <p className="text-gray-300 mb-6">
            Looking for specific service packages? Check out our tailored solutions.
          </p>
          <Link href="/services">
            <Button size="lg" className="px-8 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
