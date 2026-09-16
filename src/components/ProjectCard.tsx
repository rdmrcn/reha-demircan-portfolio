import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import type { Project } from '../data/projects'
import { GitHubIcon } from './icons'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const cover = project.images[0]
  const current = project.images[index] ?? cover

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowRight') {
        setIndex((value) => (value + 1) % project.images.length)
      }
      if (event.key === 'ArrowLeft') {
        setIndex((value) => (value - 1 + project.images.length) % project.images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, project.images.length])

  return (
    <>
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c121c]">
        <button
          type="button"
          onClick={() => {
            setIndex(0)
            setOpen(true)
          }}
          className="relative h-24 w-full overflow-hidden bg-slate-900 sm:h-28"
          aria-label={`Open ${project.title} screenshot`}
        >
          <img
            src={cover}
            alt=""
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-1.5 bottom-1.5 flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded bg-black/70 px-1.5 py-0.5 font-mono text-[9px] text-cyan-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </button>

        <div className="flex flex-1 flex-col p-3">
          <h3 className="text-sm font-medium text-white">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-slate-200 hover:bg-white/5"
              >
                <GitHubIcon size={12} />
                GitHub
              </a>
            ) : null}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-2.5 py-1 text-[11px] text-accent"
              >
                <ExternalLink size={12} />
                Demo
              </a>
            ) : null}
          </div>
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 rounded-full border border-white/15 bg-black/50 p-2 text-white"
              aria-label="Close screenshot"
            >
              <X size={16} />
            </button>
            <img src={current} alt={project.title} className="max-h-[72vh] w-full object-contain bg-black" />
            {project.images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2 text-white"
                  onClick={() =>
                    setIndex((value) => (value - 1 + project.images.length) % project.images.length)
                  }
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2 text-white"
                  onClick={() => setIndex((value) => (value + 1) % project.images.length)}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            ) : null}
            <div className="flex flex-wrap items-center gap-2 border-t border-white/8 px-4 py-3">
              <p className="mr-2 text-sm text-white">{project.title}</p>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-2 py-0.5 font-mono text-[11px] text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
