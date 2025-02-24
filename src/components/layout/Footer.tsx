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
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="D4 Accountants"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional accounting services for businesses and individuals in the UK.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <FooterLinkGroup title="Services" links={footerLinks.services} />
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <FooterLinkGroup title="Company" links={footerLinks.company} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} D4 Accountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
