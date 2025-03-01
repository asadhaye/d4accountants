"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function PartnerLogos() {
  const partners = [
    {
      name: "FreeAgent Platinum Partner",
      src: "/images/partners/freeagent.png",
      width: 150,
      height: 60
    },
    {
      name: "Xero Certified Advisor",
      src: "/images/partners/xero.png",
      width: 150,
      height: 60
    },
    {
      name: "Dext Partner",
      src: "/images/partners/dext.png",
      width: 150,
      height: 60
    },
    {
      name: "QuickBooks Platinum ProAdvisor",
      src: "/images/partners/quickbooks.jpg",
      width: 150,
      height: 60
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-background py-12 border-t border-border/20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeIn}
              className="w-full flex justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-auto w-auto max-h-12 opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
