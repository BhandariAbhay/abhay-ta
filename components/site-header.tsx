import Link from 'next/link'
import { profile } from '@/lib/portfolio'
import { ProductsMenu } from '@/components/products-menu'

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${profile.name} — Home`}
          className="shrink-0 font-serif text-2xl leading-none tracking-tight"
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm sm:gap-6">
            <li>
              <ProductsMenu />
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
