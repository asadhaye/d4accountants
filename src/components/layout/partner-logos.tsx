'use client';

import Image from 'next/image';

export function PartnerLogos() {
  const partners = [
    { name: 'Dext', logo: '/images/partners/dext.png', level: 'Partner' },
    { name: 'FreeAgent', logo: '/images/partners/freeagent.png', level: 'Platinum Partner' },
    { name: 'Xero', logo: '/images/partners/xero.png', level: 'Certified Advisor' },
    { name: 'QuickBooks', logo: '/images/partners/quickbooks.jpg', level: 'Platinum ProAdvisor' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30 animate-pulse"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="relative group w-full flex flex-col items-center justify-center gap-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative w-48 h-24 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  priority
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity relative z-10"
                />
              </div>
              <span className="text-sm text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}