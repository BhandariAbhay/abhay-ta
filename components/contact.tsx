import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio'

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs text-accent">04 — Contact</p>
        <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
          Need a system installed or fixed? <em className="text-accent">Let&apos;s talk.</em>
        </h2>
        <ul className="mt-12 flex flex-col items-start gap-6">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-3 border-b border-primary-foreground/30 pb-2 text-xl break-all transition-colors hover:border-accent hover:text-accent sm:text-2xl md:text-3xl"
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-24 border-t border-primary-foreground/15 pt-8 text-sm">
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} {profile.name}. {profile.location}.
          </p>
        </footer>
      </div>
    </section>
  )
}
