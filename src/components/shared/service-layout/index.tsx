'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations/animations';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  imageSrc?: string;
  className?: string;
}

export function ServiceLayout({ 
  children, 
  title, 
  description, 
  imageSrc,
  className = ''
}: ServiceLayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${className}`}
    >
      <Container className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-300 mb-8">
              {description}
            </p>
          )}
        </div>

        {imageSrc ? (
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>{children}</div>
            <div className="relative h-[400px]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          children
        )}
      </Container>
    </motion.div>
  );
}
