"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tax Planning", href: "/services/tax-planning" },
    { name: "Bookkeeping", href: "/services/bookkeeping" },
    { name: "Financial Advisory", href: "/services/financial-advisory" },
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-lg border-b border-border/20 transition-custom sticky top-0 z-50" role="banner">
      <nav className="container mx-auto px-6 py-4 max-w-7xl" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center group hover:opacity-90 transition-opacity">
                <Image
                  src="/icons/logo.svg"
                  alt="D4 Accountants"
                  width={40}
                  height={40}
                  className="dark:invert"
                />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  D4 Accountants
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-muted-foreground hover:text-primary font-medium transition-custom hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${pathname === item.href ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'}`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-white font-semibold px-6 py-2"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 space-y-4" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block font-medium ${pathname === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
