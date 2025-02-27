'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { NavigationLink } from './navigation-link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const serviceItems = [
    { name: 'Tax Planning', href: '/services/tax-planning' },
    { name: 'Bookkeeping', href: '/services/bookkeeping' },
    { name: 'Financial Advisory', href: '/services/financial-advisory' },
  ];

  return (
    <header 
      className="bg-background/95 backdrop-blur-sm shadow-lg border-b border-border/20 transition-all duration-200 sticky top-0 z-50"
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
          <div className="hidden md:flex space-x-4 items-center">
            <NavigationLink href="/">Home</NavigationLink>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button 
                className="flex items-center gap-1 px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={toggleServices}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-gradient-to-br from-indigo-900 to-purple-900 border border-violet-500/20 overflow-hidden transition-all duration-200 origin-top-right z-50 ${
                  isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-medium border-t border-border/20 text-primary hover:bg-primary/10"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            
            <NavigationLink href="/about">About</NavigationLink>
            <NavigationLink href="/resources">Resources</NavigationLink>
            <NavigationLink href="/faq">FAQ</NavigationLink>
            <NavigationLink href="/contact">Contact</NavigationLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground/80 hover:text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-foreground/80 hover:text-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block py-2 text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
              
              <NavigationLink href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavigationLink>
              <NavigationLink href="/resources" onClick={() => setIsMenuOpen(false)}>
                Resources
              </NavigationLink>
              <NavigationLink href="/faq" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </NavigationLink>
              <NavigationLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavigationLink>
              <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
