"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const features = [
  {
    title: "You Can Be Anywhere",
    description: "You don't require a nearby accountant since our sophisticated accounting cloud technology allows for remote delivery of services.",
    icon: "/icons/globe.svg"
  },
  {
    title: "Our Lowest Fixed Fee Plans",
    description: "We offer fixed-fee plans to help you budget for the service you select, ensuring there are no unexpected bills. We're delighted to provide you with quotes for any additional services based on your needs.",
    icon: "/icons/financial-advisory.svg"
  },
  {
    title: "Unlimited Support",
    description: "We are dedicated to alleviating your stress by managing your business finances, identifying new opportunities, empowering you to take control, and providing clear insights to facilitate your growth and success.",
    icon: "/icons/tax-planning.svg"
  },
  {
    title: "Qualified Accountants",
    description: "Our accountants are qualified Chartered Accountants or Chartered Certified Accountants. With extensive experience spanning various practices and industries, we bring a diverse range of expertise to our work.",
    icon: "/icons/bookkeeping.svg"
  },
  {
    title: "Slick Communication",
    description: "The key to our success is recognising the significance of effective communication with you. It goes beyond simply completing tasks with excellence; it entails promptly addressing your inquiries and earning your trust as a reliable advisor.",
    icon: "/icons/window.svg"
  },
  {
    title: "Our Smart Bookkeeping",
    description: "We utilise the cutting-edge cloud accounting platforms Xero, quickbooks, FreeAgent, Dext and AutoEntry. These platforms offer top-notch security, flexibility, scalability, affordability, and innovation, significantly streamlining our clients' workload like never before.",
    icon: "/icons/bookkeeping.svg"
  },
  {
    title: "Proven Track Record",
    description: "We pledge to provide you with peace of mind, minimised downtime, expedited problem resolution, data security, efficient communication, and ease in managing your accounting and taxes.",
    icon: "/icons/tax-planning.svg"
  },
  {
    title: "Changing your accountant",
    description: "Switching accountants doesn't have to be a daunting process. If you're dissatisfied with your current accountant's services or pricing, transitioning to our firm is a simple and hassle-free endeavor. All you need to do is appoint us as your new accountant.",
    icon: "/icons/financial-advisory.svg"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in accounting services with our comprehensive solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}