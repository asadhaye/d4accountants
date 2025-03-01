"use client";

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

export const Solutions = () => {
  return (
    <section className="py-20 bg-background">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive financial services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={fadeIn}
              custom={index}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-border">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={48}
                      height={48}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{solution.description}</p>
                  <div className="mt-auto">
                    <div className="text-2xl font-bold text-primary mb-2">{solution.price}</div>
                    <p className="text-sm text-muted-foreground mb-4">{solution.period}</p>
                    <Link href={solution.href}>
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
