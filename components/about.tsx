import Image from 'next/image'
import { capabilities, experience, profile } from '@/lib/portfolio'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="02" title="About" />

        <div className="mt-16 grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/portrait.png"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
              <p>
                For the past eight years I&apos;ve worked at the intersection of design and engineering —
                sketching flows in the morning and shipping them to production by evening.
              </p>
              <p className="text-muted-foreground">
                I believe the best interfaces get out of the way. My process is collaborative and
                iterative: understand the problem deeply, prototype early, and sweat the small details
                that make software feel trustworthy.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Experience
              </h3>
              <ol className="mt-4 divide-y border-y">
                {experience.map((item) => (
                  <li
                    key={item.company}
                    className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-x-6"
                  >
                    <p className="font-medium">
                      {item.role} <span className="text-muted-foreground">at {item.company}</span>
                    </p>
                    <p className="font-mono text-xs text-muted-foreground sm:row-span-2 sm:pt-1">
                      {item.period}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Capabilities
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {capabilities.map((item) => (
                  <li key={item} className="rounded-full bg-background px-4 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
