import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  return (
    <section className="py-16 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional accounting services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={fadeIn}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center justify-center mb-6">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {solution.description}
              </p>
              <div className="mt-auto text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {solution.price}
                </div>
                <div className="text-gray-500 mb-6">{solution.period}</div>
                <div className="space-y-3">
                  {solution.options ? (
                    <>
                      <Link href={`${solution.href}/options`}>
                        <Button variant="outline" className="w-full">View options</Button>
                      </Link>
                      <Link href={solution.href}>
                        <Button variant="default" className="w-full">Learn more</Button>
                      </Link>
                    </>
                  ) : (
                    <Link href={solution.href}>
                      <Button variant="default" className="w-full">Learn more</Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}