"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { NavigationLink } from "@/components/layout/navigation-link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Finances?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-muted-foreground mb-8"
          >
            Get expert accounting support and AI-powered insights to help your business thrive.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <NavigationLink href="/contact">
              <Button size="lg">Get Started</Button>
            </NavigationLink>
            <NavigationLink href="/services">
              <Button size="lg" variant="outline">Learn More</Button>
            </NavigationLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}