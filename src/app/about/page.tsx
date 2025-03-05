'use client';

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { useFloatingElements } from "@/hooks/use-floating-elements";

export default function AboutPage() {
  const floatingElements = useFloatingElements(10);

  return (
    <main className="flex-1">
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950 overflow-hidden">
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
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full opacity-30"
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

        <Container className="relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <ScrollAnimation>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                About D4Accountants
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation index={1}>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Your trusted partner in financial success. We combine expertise with innovation to deliver exceptional accounting services.
              </p>
            </ScrollAnimation>
          </motion.div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation animation="scale">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                    Our Mission
                  </h2>
                  <p className="text-gray-300 text-lg">
                    To empower businesses with accurate financial insights and innovative solutions, enabling them to make informed decisions and achieve sustainable growth.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                    Our Values
                  </h2>
                  <ul className="space-y-4 text-gray-300 text-lg">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-500"></span>
                      <span>Excellence in service delivery</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-500"></span>
                      <span>Integrity and transparency</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-500"></span>
                      <span>Innovation in solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-500"></span>
                      <span>Client-centric approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
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
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500"
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
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
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
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500"
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
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400/20 via-teal-400/20 to-blue-400/20 ring-4 ring-blue-400/30 shadow-lg"></div>
                    <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">{member.name}</h3>
                    <p className="text-blue-400/80 mb-4 font-medium">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
