import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import Image from 'next/image';

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceLayout({ 
  children, 
  title, 
  description, 
  imageSrc 
}: ServiceLayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-muted-foreground text-lg mb-6">
              {description}
            </p>
            {children}
          </div>
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
      </div>
    </motion.div>
  );
}
