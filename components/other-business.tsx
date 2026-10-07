import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function OtherBusiness() {
  return (
    <section id="business" aria-labelledby="business-name" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="03" title="My other business" />
        <div className="mt-16 flex flex-col gap-10 rounded-lg border bg-card p-8 md:flex-row md:items-end md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-accent">Business</p>
            <h3 id="business-name" className="mt-4 font-serif text-5xl tracking-tight text-balance md:text-6xl">
              Bhagya Shree Saree
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
              {"Bhagya Shree Saree is a family-run store in Bhilwara offering sarees, lehengas, bridal wear and more. For enquiries, get in touch and I'll connect you directly."}
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:self-auto"
          >
            Enquire now
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
