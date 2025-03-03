"use client";

import Link from "next/link";
import Image from "next/image";
import { FooterLinkGroup } from "./footer-link-group";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Tax Planning", href: "/services/tax-planning" },
      { name: "Bookkeeping", href: "/services/bookkeeping" },
      { name: "Financial Advisory", href: "/services/financial-advisory" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Resources", href: "/resources" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo.png"
                alt="D4 Accountants"
                width={150}
                height={40}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Professional accounting services for businesses and individuals in the UK. Trusted expertise for your financial success.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">Altrincham</p>
              <a href="tel:07300300319" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Phone: 07300 300319</a>
              <a href="mailto:info@d4accountants.co.uk" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Email: info@d4accountants.co.uk</a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <FooterLinkGroup title="Services" links={footerLinks.services} />
          </div>

          {/* Company Links */}
          <div>
            <FooterLinkGroup title="Company" links={footerLinks.company} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground text-center hover:text-foreground transition-colors cursor-default">
            © {currentYear} D4 Accountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
