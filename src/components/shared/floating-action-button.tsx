"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X, Plus } from "lucide-react";

const actions = [
  {
    title: "Chat",
    href: "/contact#chat",
    icon: <MessageCircle className="h-5 w-5" />,
    color: "bg-emerald-500 hover:bg-emerald-600"
  },
  {
    title: "Call",
    href: "tel:+441234567890",
    icon: <Phone className="h-5 w-5" />,
    color: "bg-blue-500 hover:bg-blue-600"
  }
];

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {actions.map((action) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex items-center gap-3"
              >
                <span className="bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
                  {action.title}
                </span>
                <Link href={action.href}>
                  <Button
                    size="icon"
                    className={`rounded-full shadow-lg ${action.color} text-white`}
                  >
                    {action.icon}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-violet-400 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-700 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  );
}