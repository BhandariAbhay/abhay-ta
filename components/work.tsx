import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} work`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-6">
        <p className="font-mono text-xs text-accent">{project.category}</p>
        <h3 className="mt-2 font-serif text-2xl tracking-tight">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="01" title="Selected Work & Expertise" />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Practical IT solutions across biometric attendance,
          access control, attendance software and payroll integration.
          Explore the systems I work with and the problems I help solve.
        </p>

        <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className={i % 2 === 1 ? 'md:mt-24' : undefined}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
