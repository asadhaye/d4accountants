"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  const [floatingElements, setFloatingElements] = useState<Array<{ x: number, y: number, scale: number }>>([]);

  useEffect(() => {
    setFloatingElements(
      [...Array(20)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-violet-900 opacity-90" />
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
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 blur-3xl rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.2, 0.8, 1.2],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-violet-500/30 to-fuchsia-500/30 blur-3xl rounded-full"
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

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600"
          variants={fadeIn}
        >
          Expert Financial
          <br />
          Solutions
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto text-gray-300 font-light"
          variants={fadeIn}
        >
          Transform your financial future with our comprehensive accounting and advisory services
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={slideUp}
        >
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
