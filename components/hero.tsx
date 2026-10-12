
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32"
    >
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {profile.availability}
      </p>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Portfolio / IT Engineering
      </p>

      <h1
        id="hero-title"
        className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl"
      >
        {profile.name}
        <span className="text-accent">.</span>
      </h1>

      <h2 className="mt-5 text-xl font-medium tracking-tight md:text-2xl">
        {profile.role}
        <span className="text-muted-foreground">
          {' '}— Biometric Systems, IT Support & Payroll Integration
        </span>
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            Explore my work
            <ArrowDownRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>

      <ul
        aria-label="Areas of expertise"
        className="mt-12 flex flex-wrap gap-2"
      >
        {[
          'Biometric Attendance',
          'Access Control',
          'SQL Server',
          'Networking',
          'Payroll Integration',
        ].map((skill) => (
          <li
            key={skill}
            className="rounded-full border px-4 py-2 text-xs text-muted-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
