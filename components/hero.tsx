
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react'
import { profile } from '@/lib/portfolio'

const skills = [
  'Biometric Attendance',
  'Access Control',
  'Attendance Software',
  'SQL Server',
  'Payroll Integration',
]

const terminalLines = [
  { label: 'Attendance systems', value: 'ONLINE' },
  { label: 'Access control', value: 'READY' },
  { label: 'SQL & databases', value: 'CONNECTED' },
  { label: 'Payroll integration', value: 'ACTIVE' },
]

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32"
    >
      <p className="hero-reveal hero-delay-1 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {profile.availability}
      </p>

      <p className="hero-reveal hero-delay-2 mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Portfolio / IT Engineering
      </p>

      <h1
        id="hero-title"
        className="hero-reveal hero-delay-3 mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl"
      >
        {profile.name}
        <span className="text-accent">.</span>
      </h1>

      <h2 className="hero-reveal hero-delay-4 mt-5 text-xl font-medium tracking-tight md:text-2xl">
        {profile.role}
        <span className="text-muted-foreground">
          {' '}— Biometric Systems, Attendance Software & Payroll Integration
        </span>
      </h2>

      <div className="hero-reveal hero-delay-5 mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-lg"
          >
            Explore my work
            <ArrowDownRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            Get in touch
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="hero-reveal hero-delay-6 mt-12 max-w-2xl">
        <div className="overflow-hidden rounded-2xl border bg-card/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <Terminal
                aria-hidden="true"
                className="size-4 text-accent"
              />
              <span className="font-mono text-xs text-muted-foreground">
                engineer@portfolio:~
              </span>
            </div>

            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              System overview
            </span>
          </div>

          <div
            className="space-y-3 p-5 font-mono text-xs sm:p-6 sm:text-sm"
            aria-label="Technical areas: attendance systems, access control, SQL databases, and payroll integration"
          >
            <p className="text-muted-foreground">
              <span className="text-accent">$</span>{' '}
              initializing technical expertise...
            </p>

            {terminalLines.map((line, index) => (
              <div
                key={line.label}
                className="terminal-line flex flex-wrap items-center justify-between gap-3"
                style={{ animationDelay: `${700 + index * 180}ms` }}
              >
                <span className="text-foreground/80">
                  <span className="mr-2 text-accent">&gt;</span>
                  {line.label}
                </span>
                <span className="text-accent">{line.value}</span>
              </div>
            ))}

            <p className="pt-1 text-muted-foreground">
              <span className="text-accent">$</span>{' '}
              building practical solutions
              <span className="terminal-cursor ml-1 inline-block h-3.5 w-1 translate-y-0.5 bg-accent" />
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Built with an engineer&apos;s mindset — focused on reliable, practical solutions.
        </p>
      </div>

      <ul
        aria-label="Areas of expertise"
        className="hero-reveal hero-delay-7 mt-10 flex flex-wrap gap-2"
      >
        {skills.map((skill, index) => (
          <li
            key={skill}
            className="skill-chip rounded-full border px-4 py-2 text-xs text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            style={{ animationDelay: `${900 + index * 100}ms` }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
