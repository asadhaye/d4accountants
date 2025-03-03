"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations/animations";
import Link from "next/link";
import { AnimatedBackground } from "@/components/shared/animations/animated-background";

export function Hero() {
  return (
    <AnimatedBackground>
      <section className="min-h-[90vh] flex items-center justify-center">
        {/* Content */}
        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500"
            variants={fadeIn}
          >
            Expert Financial
            <br />
            Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto text-muted-foreground font-light"
            variants={fadeIn}
          >
            Transform your financial future with our comprehensive accounting and advisory services
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={slideUp}
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-600/90 hover:to-teal-600/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/5 text-white border-blue-500/20 hover:bg-white/10 hover:border-teal-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </AnimatedBackground>
  );
}
