'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { MouseEventHandler } from 'react';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function NavigationLink({ href, children, className, onClick }: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Create props object and only add onClick if it's defined
  const linkProps: {
    href: string;
    className: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  } = {
    href,
    className: cn(
      'nav-link',
      isActive ? 'text-primary' : '',
      className
    )
  };

  // Only add onClick if it's defined
  if (onClick) {
    linkProps.onClick = onClick;
  }

  return (
    <Link {...linkProps}>
      {children}
    </Link>
  );
}


