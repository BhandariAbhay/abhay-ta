import { ArrowDownRight } from 'lucide-react'
import { profile } from '@/lib/portfolio'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {profile.availability}
      </p>

      <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl">
        Attendance, access and payroll systems that <em className="text-accent">just work</em>.
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {"I'm "}
          <span className="text-foreground">{profile.name}</span>
          {`, an ${profile.role} based in ${profile.location}. `}
          {profile.summary}
        </p>
        <a
          href="#work"
          className="group inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent md:self-end"
        >
          See what I do
          <ArrowDownRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  )
}
