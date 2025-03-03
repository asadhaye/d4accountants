"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Resources", href: "/resources" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
  { title: "Client Portal", href: "/portal" }
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 }
};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50 text-amber-400 hover:text-amber-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 shadow-xl z-50 overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="border-b border-gray-700/50 last:border-0"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 text-lg font-medium text-gray-300 hover:text-amber-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                      <ChevronRight className="h-5 w-5 text-amber-400/50" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-violet-400 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}