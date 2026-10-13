
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
              <ProjectCard project={project} priority={i < 2} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
