"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const partners = [
  {
    name: "FreeAgent Platinum Partner",
    image: "/images/partners/freeagent.png",
  },
  {
    name: "Xero Certified Advisor",
    image: "/images/partners/xero.png",
  },
  {
    name: "Dext Partner",
    image: "/images/partners/dext.png",
  },
  {
    name: "QuickBooks Platinum ProAdvisor",
    image: "/images/partners/quickbooks.jpg",
  },
];

export function Partners() {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
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
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30"
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeIn}
              className="w-full flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-12 opacity-80 hover:opacity-100 transition-opacity relative z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
