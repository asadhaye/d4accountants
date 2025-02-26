'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NavigationLink } from './navigation-link';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className="bg-background/95 backdrop-blur-sm shadow-lg border-b border-border/20 transition-all duration-200"
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4 max-w-7xl" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image 
              src="/images/logo.png" 
              alt="D4" 
              width={150} 
              height={40} 
              className="h-10 w-auto" 
            />
            <span className="text-xl font-bold hidden sm:inline">Accountants</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/services">Services</NavigationLink>
            <NavigationLink href="/about">About</NavigationLink>
            <NavigationLink href="/contact">Contact</NavigationLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
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
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavigationLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavigationLink>
              <NavigationLink href="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </NavigationLink>
              <NavigationLink href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavigationLink>
              <NavigationLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavigationLink>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
