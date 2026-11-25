import { useState } from 'react'
import { ArrowUpRight, BookOpen, Maximize2 } from 'lucide-react'
import { flagshipCaseStudies, uiCopy, type FlagshipCaseStudy } from '../data/portfolio'
import { useLocale } from '../lib/locale-context'
import { GitHubIcon } from './icons'

type FlagshipWorkProps = {
  onOpenCaseStudy: (study: FlagshipCaseStudy, initialImageIndex?: number) => void
}

function FlagshipCard({
  study,
  onOpenCaseStudy,
}: {
  study: FlagshipCaseStudy
  onOpenCaseStudy: (study: FlagshipCaseStudy, initialImageIndex?: number) => void
}) {
  const { t } = useLocale()
  const [activeView, setActiveView] = useState(0)
  const currentView = study.views[activeView] ?? study.views[0]

  return (
    <article className="overflow-hidden rounded-xl border border-rule bg-sheet">
      <div className="grid lg:grid-cols-[1.18fr_0.92fr]">
        <div className="flex flex-col border-b border-rule bg-surface/65 p-4 sm:p-6 lg:border-r lg:border-b-0">
          <div className="overflow-hidden rounded-lg border border-rule bg-ink shadow-[0_12px_32px_-20px_rgba(20,20,19,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#1d1c1a] px-3.5 py-2">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-white/25" />
                <span className="size-2 rounded-full bg-white/25" />
                <span className="size-2 rounded-full bg-white/25" />
              </div>
              <a
                href={study.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="truncate font-mono text-[11px] text-white/70 transition-colors hover:text-white"
              >
                {study.liveDemo.replace('https://', '')}
              </a>
              <button
                type="button"
                onClick={() => onOpenCaseStudy(study, activeView)}
                aria-label={`${study.title} — ${t(uiCopy.flagship.inspectScreen)}`}
                className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
              >
                <Maximize2 size={13} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onOpenCaseStudy(study, activeView)}
              className="group relative block aspect-[16/10] w-full overflow-hidden bg-[#141413] text-left"
              aria-label={`${study.title} — ${t(currentView.label)}`}
            >
              <img
                src={currentView.src}
                alt={t(currentView.alt)}
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              />
            </button>
          </div>

          <div
            role="tablist"
            aria-label={`${study.title} screens`}
            className="mt-3.5 flex flex-wrap items-center gap-1.5"
          >
            {study.views.map((view, idx) => {
              const selected = idx === activeView
              return (
                <button
                  key={view.src}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveView(idx)}
                  className={`rounded-md border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                    selected
                      ? 'border-ink bg-ink text-paper'
                      : 'border-rule bg-sheet text-ink-soft hover:border-rule-strong hover:text-ink'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')} · {t(view.label)}
                </button>
              )
            })}
          </div>

          <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-rule pt-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.value}>
                <dt className="font-mono text-sm font-medium text-ink">{metric.value}</dt>
                <dd className="mt-0.5 text-[11.5px] leading-snug text-muted">
                  {t(metric.label)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
              <span>
                {study.index} / {t(study.domainLabel)}
              </span>
              <span>{study.year}</span>
            </div>

            <h3 className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-[34px]">
              {study.title}
            </h3>

            <p className="mt-2.5 text-[15px] leading-relaxed font-medium text-ink-soft">
              {t(study.subtitle)}
            </p>

            <ul className="mt-6 space-y-3 border-t border-rule pt-5">
              {study.highlights.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 text-[13.5px] leading-[1.65] text-ink-soft"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 border-t border-rule pt-5">
            <a
              href={study.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              {t(uiCopy.flagship.liveDemo)}
              <ArrowUpRight size={14} />
            </a>

            <a
              href={study.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-rule-strong bg-sheet px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-ink"
            >
              <GitHubIcon size={14} />
              {t(uiCopy.flagship.sourceCode)}
            </a>

            <button
              type="button"
              onClick={() => onOpenCaseStudy(study, activeView)}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[13px] font-medium text-accent transition-colors hover:bg-accent-soft"
            >
              <BookOpen size={14} />
              {t(uiCopy.flagship.architectureNotes)}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export function FlagshipWork({ onOpenCaseStudy }: FlagshipWorkProps) {
  const { t } = useLocale()

  return (
    <section id="work" className="scroll-mt-20 border-b border-rule px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11.5px] tracking-[0.12em] text-accent uppercase">
            {t(uiCopy.flagship.eyebrow)}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[1.12]">
            {t(uiCopy.flagship.title)}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {t(uiCopy.flagship.description)}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {flagshipCaseStudies.map((study) => (
            <FlagshipCard
              key={study.id}
              study={study}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
