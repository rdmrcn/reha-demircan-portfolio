import { useMemo, useState } from 'react'
import { ArrowUpRight, Database, Layers, Server, ShieldCheck } from 'lucide-react'
import {
  archiveProjects,
  uiCopy,
  type ProjectFilter,
  type ProjectItem,
} from '../data/portfolio'
import { useLocale } from '../lib/locale-context'
import { GitHubIcon } from './icons'

type ProjectGridProps = {
  onOpenProject: (project: ProjectItem) => void
}

function FathomArchitecturePreview() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#161615] p-5 text-[#f6f4ef] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10.5px] tracking-[0.08em] text-white/55 uppercase">
        <span>MONOREPO TOPOLOGY</span>
        <span>SQL SERVER 2022 · EXPRESS 5</span>
      </div>

      <div className="my-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-white/12 bg-white/[0.04] p-3.5">
          <Layers size={15} className="text-[#e87958]" />
          <p className="mt-2.5 font-mono text-[11px] font-medium text-white">apps/web</p>
          <p className="mt-1 text-[11.5px] leading-snug text-white/65">
            React 19 · TanStack Query · dnd-kit Kanban · ⌘K
          </p>
        </div>

        <div className="rounded-lg border border-white/12 bg-white/[0.04] p-3.5">
          <Server size={15} className="text-[#e87958]" />
          <p className="mt-2.5 font-mono text-[11px] font-medium text-white">apps/api</p>
          <p className="mt-1 text-[11.5px] leading-snug text-white/65">
            Express 5 · Rotating JWT · RBAC · Tool-Using AI
          </p>
        </div>

        <div className="rounded-lg border border-white/12 bg-white/[0.04] p-3.5">
          <Database size={15} className="text-[#e87958]" />
          <p className="mt-2.5 font-mono text-[11px] font-medium text-white">SQL Server</p>
          <p className="mt-1 text-[11.5px] leading-snug text-white/65">
            T-SQL Views · OUTPUT Keys · reporting_reader
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 font-mono text-[10.5px] text-white/60">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck size={13} className="text-[#52c480]" />
          packages/shared Zod DTOs
        </span>
        <span>Vitest Unit + Live SQL Integration</span>
      </div>
    </div>
  )
}

function ProjectVisual({ project }: { project: ProjectItem }) {
  const { t } = useLocale()
  const cover = project.images[0]

  if (project.presentation === 'architecture' || !cover) {
    return <FathomArchitecturePreview />
  }

  if (project.presentation === 'mobile') {
    return (
      <div className="flex h-full w-full items-center justify-center bg-surface px-6 py-4">
        <div className="h-full max-h-[220px] overflow-hidden rounded-[18px] border-[3px] border-ink bg-ink shadow-[0_14px_28px_-14px_rgba(20,20,19,0.45)]">
          <img
            src={cover.src}
            alt={t(cover.alt)}
            loading="lazy"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#161615]">
      <img
        src={cover.src}
        alt={t(cover.alt)}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
    </div>
  )
}

export function ProjectGrid({ onOpenProject }: ProjectGridProps) {
  const { t } = useLocale()
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const visibleProjects = useMemo(
    () =>
      filter === 'all'
        ? archiveProjects
        : archiveProjects.filter((project) => project.category === filter),
    [filter],
  )

  const featuredSpotlight = visibleProjects.find(
    (project) => project.presentation === 'architecture',
  )
  const gridProjects = visibleProjects.filter(
    (project) => project.id !== featuredSpotlight?.id,
  )
  const gridColsClass =
    gridProjects.length <= 2
      ? 'grid gap-6 md:grid-cols-2'
      : 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'

  return (
    <section id="projects" className="scroll-mt-20 border-b border-rule px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11.5px] tracking-[0.12em] text-accent uppercase">
              {t(uiCopy.archive.eyebrow)}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-[38px] sm:leading-[1.12]">
              {t(uiCopy.archive.title)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {t(uiCopy.archive.description)}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by engineering track"
            className="inline-flex flex-wrap gap-1.5 rounded-lg border border-rule bg-sheet p-1"
          >
            {uiCopy.archive.filters.map((item) => {
              const active = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors ${
                    active
                      ? 'bg-ink text-paper'
                      : 'text-ink-soft hover:bg-surface hover:text-ink'
                  }`}
                >
                  {t(item.label)}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {featuredSpotlight ? (
            <article
              key={`${filter}-${featuredSpotlight.id}`}
              className="animate-reveal grid overflow-hidden rounded-xl border border-rule bg-sheet transition-colors hover:border-rule-strong lg:grid-cols-[1.08fr_0.92fr]"
            >
              <button
                type="button"
                onClick={() => onOpenProject(featuredSpotlight)}
                aria-label={`${featuredSpotlight.title} — ${t(uiCopy.archive.details)}`}
                className="border-b border-rule text-left lg:border-r lg:border-b-0"
              >
                <FathomArchitecturePreview />
              </button>

              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-[10.5px] tracking-[0.06em] text-muted uppercase">
                    <span>{t(uiCopy.archive.blueprintBadge)} · FULL-STACK & SQL</span>
                    <span>{featuredSpotlight.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-normal tracking-[-0.015em] text-ink sm:text-[28px]">
                    {featuredSpotlight.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-soft">
                    {t(featuredSpotlight.description)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {featuredSpotlight.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[10.5px] text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-rule/80 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenProject(featuredSpotlight)}
                    className="text-[13px] font-medium text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {t(uiCopy.archive.details)}
                  </button>
                  <a
                    href={featuredSpotlight.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-rule px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    <GitHubIcon size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ) : null}

          <div className={gridColsClass}>
            {gridProjects.map((project) => (
              <article
                key={`${filter}-${project.id}`}
                className="group animate-reveal flex flex-col overflow-hidden rounded-xl border border-rule bg-sheet transition-colors hover:border-rule-strong"
              >
                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  aria-label={`${project.title} — ${t(uiCopy.archive.details)}`}
                  className="relative aspect-[16/10] w-full overflow-hidden border-b border-rule text-left"
                >
                  <ProjectVisual project={project} />
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2 font-mono text-[10.5px] tracking-[0.06em] text-muted uppercase">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-[22px] font-normal tracking-[-0.015em] text-ink">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-[1.62] text-ink-soft">
                    {t(project.tagline)}
                  </p>

                  <div className="mt-4 mb-5 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-rule bg-paper px-2 py-0.5 font-mono text-[10.5px] text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-rule/80 pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenProject(project)}
                      className="text-[13px] font-medium text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {t(uiCopy.archive.details)}
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-rule px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-ink"
                        >
                          Live
                          <ArrowUpRight size={12} />
                        </a>
                      ) : null}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-rule px-2.5 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                      >
                        <GitHubIcon size={12} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
