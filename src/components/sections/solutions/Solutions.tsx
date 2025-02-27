"use client";

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from "react";

const solutions = [
  {
    title: 'Accountancy Services',
    description: 'Comprehensive accountancy services for your business.',
    price: '£62.50',
    period: 'Per Month',
    icon: '/icons/tax-planning.svg',
    options: true,
    href: '/services/accountancy',
  },
  {
    title: 'Self-Assessment Only',
    description: 'Complete your self-assessment tax return with expert guidance.',
    price: '£150.00',
    period: 'Per Year',
    icon: '/icons/tax-planning.svg',
    options: false,
    href: '/services/self-assessment',
  },
  {
    title: 'Dormant Company Accounts',
    description: 'Maintain compliance for your dormant company.',
    price: '£150.00',
    period: 'Per Year',
    icon: '/icons/bookkeeping.svg',
    options: false,
    href: '/services/dormant-accounts',
  },
  {
    title: 'Payroll Service',
    description: 'Efficient payroll management for your employees.',
    price: '£5.00',
    period: 'Starting From',
    icon: '/icons/financial-advisory.svg',
    options: true,
    href: '/services/payroll',
  },
  {
    title: 'Bookkeeping Only',
    description: 'Professional bookkeeping services to keep your records accurate.',
    price: '£65.00',
    period: 'Starting From',
    icon: '/icons/bookkeeping.svg',
    options: false,
    href: '/services/bookkeeping',
  },
  {
    title: 'Limited Company Formation',
    description: 'Start your limited company with our expert assistance.',
    price: '£50.00',
    period: 'One-time',
    icon: '/icons/financial-advisory.svg',
    options: false,
    href: '/services/company-formation',
  },
];

export function Solutions() {
  const [floatingElements, setFloatingElements] = useState<Array<{ x: number, y: number, scale: number }>>([]);

  useEffect(() => {
    setFloatingElements(
      [...Array(10)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      }))
    );
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
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
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl rounded-full opacity-30"
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

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">Our Solutions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional accounting services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={fadeIn}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/10 hover:border-violet-500/30">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 shadow-inner">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-center mb-8">
                  {solution.description}
                </p>
                <div className="mt-auto text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600 mb-2">
                    {solution.price}
                  </div>
                  <div className="text-violet-400/80 mb-8 font-medium">{solution.period}</div>
                  <div className="space-y-3">
                    {solution.options ? (
                      <>
                        <Link href={`${solution.href}/options`} className="block">
                          <Button variant="outline" className="w-full bg-white/5 hover:bg-white/10 border-violet-500/30 hover:border-fuchsia-500/50 text-violet-400 hover:text-fuchsia-400">
                            View options
                          </Button>
                        </Link>
                        <Link href={solution.href} className="block">
                          <Button variant="default" className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            Learn more
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <Link href={solution.href} className="block">
                        <Button variant="default" className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          Learn more
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}