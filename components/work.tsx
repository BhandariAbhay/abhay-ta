import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/portfolio'
import { SectionHeading } from '@/components/section-heading'

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="01" title="Selected work" />
        <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title} className={i % 2 === 1 ? 'md:mt-24' : undefined}>
              <ProjectCard project={project} priority={i < 2} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  return (
    <a href={project.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-3xl tracking-tight">
          {project.title}
          <ArrowUpRight
            aria-hidden="true"
            className="ml-1 inline size-5 -translate-y-0.5 text-accent opacity-0 transition-opacity group-hover:opacity-100"
          />
        </h3>
        <p className="shrink-0 font-mono text-xs text-muted-foreground">
          {project.client} · {project.year}
        </p>
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
            {tag}
          </li>
        ))}
      </ul>
    </a>
  )
}
