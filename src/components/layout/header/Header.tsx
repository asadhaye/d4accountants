'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { NavigationLink } from '@/components/layout/navigation-link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { ChatInterface } from '@/components/features/chat-bot/chat-interface';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const serviceItems = [
    { name: 'Tax Planning', href: '/services/tax-planning' },
    { name: 'Bookkeeping', href: '/services/bookkeeping' },
    { name: 'Financial Advisory', href: '/services/financial-advisory' },
  ];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleServices();
    }
  };

  return (
    <header 
      className="bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950 backdrop-blur-sm border-b border-blue-500/20 transition-all duration-200 sticky top-0 z-50"
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4 max-w-7xl" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2" aria-label="D4 Accountants Home">
            <Image 
              src="/images/logo.png" 
              alt="D4" 
              width={150} 
              height={40} 
              className="h-10 w-auto" 
              priority
            />
            <span className="text-xl font-bold hidden sm:inline text-white">Accountants</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <NavigationLink href="/">Home</NavigationLink>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button 
                className="flex items-center gap-1 nav-link"
                onClick={toggleServices}
                onKeyDown={handleKeyDown}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                id="services-menu"
                className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950 border border-blue-500/20 overflow-hidden transition-all duration-200 origin-top-right z-50 ${
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
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-900 hover:text-white focus:outline-none focus:bg-blue-900 focus:text-white"
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
                    className="block px-4 py-2 text-sm font-medium border-t border-blue-500/20 text-teal-400 hover:bg-blue-900 hover:text-teal-300 focus:outline-none focus:bg-blue-900 focus:text-teal-300"
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
            
            {/* Chat Interface */}
            <ChatInterface />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-blue-400 to-teal-500 hover:from-blue-400/90 hover:to-teal-500/90 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
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
        <div 
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden transition-all duration-200 ${isMenuOpen ? 'opacity-100 max-h-screen py-4' : 'opacity-0 max-h-0 overflow-hidden'}`}
        >
          <div className="flex flex-col space-y-4">
            <NavigationLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavigationLink>
            
            {/* Mobile Services Menu */}
            <div>
              <button
                className="w-full flex items-center justify-between nav-link"
                onClick={toggleServices}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`mt-2 space-y-2 pl-4 ${isServicesOpen ? 'block' : 'hidden'}`}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block py-2 text-sm font-medium text-teal-400 hover:text-teal-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
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
            
            {/* Mobile Chat Interface */}
            <div className="pt-2 border-t border-blue-500/20">
              <ChatInterface />
            </div>

            {/* Mobile CTA */}
            <Button 
              variant="default"
              className="w-full bg-gradient-to-r from-blue-400 to-teal-500 hover:from-blue-400/90 hover:to-teal-500/90 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
