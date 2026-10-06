import Image from 'next/image'
import { capabilities, services, profile } from '@/lib/portfolio'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="02" title="About" />

        <div className="mt-16 grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/workbench.png"
              alt={`${profile.name}'s field kit: a biometric device, RFID cards and installation tools`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
              <p>
                I&apos;m an IT engineer in Ahmedabad. I handle the whole lifecycle of workplace
                attendance and access systems, from mounting the device on the wall to making sure
                salaries come out right at the end of the month.
              </p>
              <p className="text-muted-foreground">
                Clients rely on me to get hardware, software and payroll talking to each other, and to
                be there when something needs fixing. I focus on clean installations, clear
                configuration and fast, friendly support.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                What I do
              </h3>
              <ol className="mt-4 divide-y border-y">
                {services.map((item, i) => (
                  <li key={item.title} className="grid gap-1 py-5 sm:grid-cols-[auto_1fr] sm:gap-x-6">
                    <p className="font-mono text-xs text-accent sm:row-span-2 sm:pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Tools & platforms
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
