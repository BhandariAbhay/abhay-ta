import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs text-accent">03 — Contact</p>
        <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
          Have a project in mind? <em className="text-accent">Let&apos;s talk.</em>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-12 inline-flex items-center gap-3 border-b border-primary-foreground/30 pb-2 text-2xl transition-colors hover:border-accent hover:text-accent md:text-3xl"
        >
          {profile.email}
          <ArrowUpRight
            aria-hidden="true"
            className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <footer className="mt-24 flex flex-col gap-6 border-t border-primary-foreground/15 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} {profile.name}. {profile.location}.
          </p>
        </footer>
      </div>
    </section>
  )
}
