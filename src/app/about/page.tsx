"use client";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Managing Director",
      description: "With over 20 years of experience in accounting and tax advisory, John leads our team with expertise and vision."
    },
    {
      name: "Sarah Johnson",
      role: "Senior Tax Consultant",
      description: "Sarah specializes in corporate tax planning and has helped numerous businesses optimize their tax strategies."
    },
    {
      name: "Michael Chen",
      role: "Financial Advisory Lead",
      description: "Michael brings extensive experience in financial planning and investment advisory to help clients achieve their goals."
    }
  ];

  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
        About D4 Accountants
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-muted-foreground mb-6">
          Founded in 2010, D4 Accountants has grown from a small local practice to a trusted financial partner for businesses and individuals across the region. Our commitment to excellence and personalized service has helped us build long-lasting relationships with our clients.
        </p>
        <p className="text-muted-foreground mb-6">
          We combine traditional accounting expertise with modern technology to provide efficient, accurate, and forward-thinking financial solutions. Our team stays up-to-date with the latest tax regulations and accounting standards to ensure our clients receive the best possible advice.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Integrity</h3>
            <p className="text-muted-foreground">We maintain the highest standards of professional ethics and transparency in all our dealings.</p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Excellence</h3>
            <p className="text-muted-foreground">We strive for excellence in every service we provide, ensuring accuracy and attention to detail.</p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Innovation</h3>
            <p className="text-muted-foreground">We embrace new technologies and methods to provide more efficient and effective solutions.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-medium mb-2">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Want to learn more about how we can help you?
        </p>
        <Button
          variant="default"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-white font-semibold px-6 py-2"
        >
          Contact Us
        </Button>
      </div>
    </main>
  );
}