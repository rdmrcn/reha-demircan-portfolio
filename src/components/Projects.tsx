import { useMemo, useState } from 'react'
import {
  projects,
  projectFilters,
  type ProjectFilter,
} from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const visibleProjects = useMemo(
    () =>
      filter === 'all' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Backend, frontend, and mobile work. Filter the list or open a GitHub repo for details."
        />

        <div
          role="tablist"
          aria-label="Project categories"
          className="mx-auto mb-10 flex max-w-xl flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-[#0c121c] p-1.5"
        >
          {projectFilters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                  active
                    ? 'bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-400/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <div
              key={`${filter}-${project.id}`}
              className="animate-[fadeUp_420ms_ease]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
