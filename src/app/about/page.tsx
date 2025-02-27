'use client';

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600"
            >
              About D4Accountants
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Your trusted partner in financial success. We combine expertise with innovation to deliver exceptional accounting services.
            </motion.p>
          </motion.div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">Our Mission</h2>
              <p className="text-gray-300 text-lg">
                To empower businesses with accurate financial insights and innovative solutions, enabling them to make informed decisions and achieve sustainable growth.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">Our Values</h2>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600"></span>
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600"></span>
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600"></span>
                  <span>Innovation in solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600"></span>
                  <span>Client-centric approach</span>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* Why Choose Us */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600"
            >
              Why Choose Us
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise",
                  description: "Our team brings years of experience in accounting, tax planning, and financial advisory."
                },
                {
                  title: "Technology-Driven",
                  description: "We leverage cutting-edge technology to provide efficient and accurate services."
                },
                {
                  title: "Personalized Service",
                  description: "Tailored solutions that meet your specific business needs and goals."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl border border-gray-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600"
            >
              Our Team
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Managing Director",
                  bio: "15+ years of experience in accounting and financial advisory."
                },
                {
                  name: "Sarah Johnson",
                  role: "Tax Specialist",
                  bio: "Expert in corporate tax planning and compliance."
                },
                {
                  name: "Michael Chen",
                  role: "Financial Advisor",
                  bio: "Specialized in business growth strategies and financial planning."
                }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 backdrop-blur-xl border border-gray-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-amber-400/20 ring-4 ring-amber-400/30 shadow-lg"></div>
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">{member.name}</h3>
                  <p className="text-amber-400/80 mb-4 font-medium">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
