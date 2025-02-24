"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-accounting.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-1" />
      
      <motion.div 
        className="relative z-2 container mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={fadeIn}
        >
          Professional Accounting Services
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Expert financial guidance for businesses and individuals. 
          Let us handle your numbers while you focus on growth.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center"
          variants={slideUp}
        >
          <Link href="/contact">
            <Button size="lg" variant="premium">
              Get Started
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white">
              Our Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
