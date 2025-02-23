import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl">
                <span className="block">Expert Accounting</span>
                <span className="block text-blue-600">for Your Business</span>
              </h1>
              <p className="mt-3 text-base text-blue-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professional accounting services tailored to help your business thrive. We handle the numbers so you can focus on growth.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg"
                  >
                    Our Services
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          src="/images/hero-accounting.jpg"
          alt="Professional accounting services"
          width={1920}
          height={1080}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;