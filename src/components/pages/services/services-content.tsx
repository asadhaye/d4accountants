'use client';

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function ServicesContent() {
  const services = [
    {
      title: "Tax Planning",
      description: "Strategic tax planning and compliance services to minimize liabilities and maximize savings.",
      icon: "/icons/tax-planning.svg",
      href: "/services/tax-planning"
    },
    {
      title: "Bookkeeping",
      description: "Comprehensive bookkeeping services to maintain accurate financial records and insights.",
      icon: "/icons/bookkeeping.svg",
      href: "/services/bookkeeping"
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to help you make informed decisions and achieve your goals.",
      icon: "/icons/financial-advisory.svg",
      href: "/services/financial-advisory"
    }
  ];

  return (
    <main className="flex-1">
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-violet-950 via-fuchsia-950 to-violet-950">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Comprehensive accounting and financial services tailored to your needs. We combine expertise with innovation to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/30 shadow-lg hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">{service.title}</h2>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
