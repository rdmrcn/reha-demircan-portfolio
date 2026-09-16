import { ExternalLink, ImageIcon } from 'lucide-react'
import type { Project } from '../data/projects'
import { GitHubIcon } from './icons'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0d1420] transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_-30px_rgba(34,211,238,0.45)]">
      <div className="relative aspect-16/10 overflow-hidden border-b border-white/8 bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_40%)]" />
        <div className="absolute inset-6 rounded-xl border border-dashed border-white/15 bg-black/20" />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 text-slate-400">
          <ImageIcon size={28} strokeWidth={1.5} />
          <p className="font-mono text-[11px] tracking-wide uppercase">Screenshot placeholder</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
          {project.category === 'backend'
            ? 'Backend & SQL'
            : project.category === 'frontend'
              ? 'Frontend'
              : 'Mobile'}
        </p>
        <h3 className="mt-2 text-lg font-medium text-white">{project.title}</h3>
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
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3.5 py-2 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            <GitHubIcon size={14} />
            GitHub Repo
          </a>
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-3.5 py-2 text-xs text-accent transition hover:bg-accent/20"
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
