
'use client';
import { Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TeamMemberCard } from '@/components/about/team-member-card';
import { teamMembers } from '@/data/team';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';


// Client-side animated wrapper

function AnimatedContent() {
  return (
    <motion.main
      className="container mx-auto px-6 py-12 max-w-4xl"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={fadeIn}
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent"
      >
        About D4 Accountants
      </motion.h1>

      <motion.section variants={slideUp} className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Established in 2010 in the heart of Manchester, D4 Accountants has grown from a small local practice to a trusted financial partner for businesses across the North West. Our commitment to excellence and personalized service has helped us build long-lasting relationships with our clients.
            </p>
          </div>
          <div className="relative h-[300px] bg-accent/10 rounded-lg" role="img" aria-label="Company office"></div>
        </div>
      </motion.section>

      <motion.section variants={slideUp} className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-muted-foreground mb-8">
          We are online accountants dedicated to supporting start-up and small businesses with our competitively priced fixed fee plans. Recognising the significance of costs for small businesses, we maintain exceptionally low overheads through the use of cutting-edge technology. By minimising our operational expenses, we pass these savings directly to our clients.
        </p>
      </motion.section>

      <motion.section variants={slideUp} className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Advantages of Selecting Us as Your Accountants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Price Match Guarantee", icon: "💰" },
            { title: "Lowest Fixed Fee Plans", icon: "📊" },
            { title: "No VAT on our prices", icon: "✨" },
            { title: "No Long-Term Contracts", icon: "📝" },
            { title: "No Local Accountant Needed", icon: "🌐" },
            { title: "Unlimited virtual Meetings", icon: "💻" },
            { title: "Top Cloud Solutions", icon: "☁️", description: "Xero, QuickBooks, FreeAgent" },
            { title: "Easy Switching", icon: "🔄", description: "from your existing accountants" }
          ].map((advantage) => (
            <div key={advantage.title} className="p-4 rounded-lg bg-accent/5 border border-border">
              <div className="text-2xl mb-2">{advantage.icon}</div>
              <h3 className="font-semibold mb-1">{advantage.title}</h3>
              {advantage.description && (
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={slideUp} className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </motion.section>

      <motion.section variants={slideUp} className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Let us help you achieve your financial goals with our expert guidance and personalized solutions.
        </p>
        <Link href="/contact" aria-label="Schedule a consultation">
          <Button
            variant="default"
            className="cta-button"
          >
            Schedule a Consultation
          </Button>
        </Link>
      </motion.section>
    </motion.main>
  );
}

// Server component
export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatedContent />
    </Suspense>
  );
}
