import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import { GitHubIcon } from './icons'

type ProjectCardProps = {
  project: Project
}

const categoryLabel: Record<Project['category'], string> = {
  backend: 'Backend & SQL',
  frontend: 'Frontend',
  mobile: 'Mobile',
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c121c] transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_24px_60px_-32px_rgba(34,211,238,0.55)]">
      <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0c121c] via-transparent to-transparent opacity-70" />
        <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-cyan-100 uppercase backdrop-blur-sm">
          {categoryLabel[project.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-medium text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/4 px-2 py-1 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3.5 py-2 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              <GitHubIcon size={14} />
              GitHub Repo
            </a>
          ) : null}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 text-xs text-accent transition hover:bg-accent/20"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
