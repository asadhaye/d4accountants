import Link from "next/link";

interface FooterLinkGroupProps {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
