import Image from 'next/image'
import { capabilities, facts, profile } from '@/lib/portfolio'
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
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                A little about me
              </h3>
              <p className="font-serif text-3xl leading-tight text-balance md:text-4xl">
                From installing the device to explaining the software, I make sure attendance turns
                into accurate payroll, <em className="text-accent">end to end.</em>
              </p>
            </div>

            <div className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
              <p>
                I&apos;m {profile.name}, an IT engineer based in Ahmedabad with a B.Tech in
                Information Technology from Arya College of Engineering &amp; IT, Jaipur. My work
                sits at the intersection of hardware and software: I work with eSSL and Smart Office
                software, and every type they offer, across desktop, web and cloud versions, on
                Windows with SQL databases. eSSL and Biomax are the major companies I work with in
                biometrics, but I also deal in other brands such as Timewatch, and supply biometric
                hardware from Mantra.
              </p>
              <p className="text-muted-foreground">
                Along with my team, I install biometric attendance devices, access control systems
                and boom barrier systems across multiple sites, from setup and wiring to configuring
                the software itself.
              </p>
              <p className="text-muted-foreground">
                Once the hardware is in place, I connect it to payroll: I integrate attendance data
                with HR and payroll platforms such as Keka, Weekmate, Zoho, greytHR, Darwinbox and
                Factohr, so it flows through accurately and on time, without manual reconciliation
                at the end of the month.
              </p>
              <p className="text-muted-foreground">
                Once everything is set up, I don&apos;t just walk away. I walk clients through the
                software myself, explain how to use it day to day, and stay on hand to sort out any
                issues or questions that come up afterward.
              </p>
            </div>

            <dl className="grid grid-cols-1 border-t sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 border-b py-5 sm:pr-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="text-lg font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>

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
