import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import {
  uiCopy,
  type FlagshipCaseStudy,
  type ProjectItem,
} from '../data/portfolio'
import { useLocale } from '../lib/locale-context'
import { GitHubIcon } from './icons'

export type ModalTarget =
  | { kind: 'flagship'; study: FlagshipCaseStudy; initialIndex?: number }
  | { kind: 'archive'; project: ProjectItem }
  | null

type ActiveTarget = Exclude<ModalTarget, null>

type ProjectModalProps = {
  target: ModalTarget
  onClose: () => void
}

function ProjectModalBody({
  target,
  onClose,
}: {
  target: ActiveTarget
  onClose: () => void
}) {
  const { t } = useLocale()
  const [imageIndex, setImageIndex] = useState(
    target.kind === 'flagship' ? (target.initialIndex ?? 0) : 0,
  )

  const images = target.kind === 'flagship' ? target.study.views : target.project.images

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (images.length > 1 && event.key === 'ArrowRight') {
        setImageIndex((prev) => (prev + 1) % images.length)
      }
      if (images.length > 1 && event.key === 'ArrowLeft') {
        setImageIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [images.length, onClose])

  const title = target.kind === 'flagship' ? target.study.title : target.project.title
  const stack = target.kind === 'flagship' ? target.study.stack : target.project.stack
  const github = target.kind === 'flagship' ? target.study.github : target.project.github
  const liveDemo = target.kind === 'flagship' ? target.study.liveDemo : target.project.liveDemo
  const isMobileMedia = target.kind === 'archive' && target.project.presentation === 'mobile'
  const currentImage = images[imageIndex] ?? images[0]

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/72 p-4 backdrop-blur-xs sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90svh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-rule bg-sheet shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-rule px-5 py-4 sm:px-7">
          <div>
            <p className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
              {target.kind === 'flagship'
                ? `${target.study.index} · ${t(target.study.domainLabel)}`
                : `${target.project.category} · ${target.project.year}`}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1 font-serif text-2xl font-normal text-ink sm:text-3xl"
            >
              {title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t(uiCopy.modal.close)}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-rule bg-paper text-ink transition-colors hover:border-ink"
          >
            <X size={16} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-7">
          {currentImage ? (
            <div className="relative overflow-hidden rounded-lg border border-rule bg-surface">
              <div
                className={`flex items-center justify-center ${
                  isMobileMedia ? 'py-6' : 'bg-[#141413]'
                }`}
              >
                <img
                  src={currentImage.src}
                  alt={t(currentImage.alt)}
                  className={
                    isMobileMedia
                      ? 'max-h-[54vh] w-auto rounded-2xl border-4 border-ink shadow-xl'
                      : 'max-h-[54vh] w-full object-contain'
                  }
                />
              </div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label={t(uiCopy.modal.prev)}
                    onClick={() =>
                      setImageIndex((prev) => (prev - 1 + images.length) % images.length)
                    }
                    className="absolute top-1/2 left-3 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-md border border-rule bg-sheet/95 text-ink shadow-sm transition-colors hover:bg-ink hover:text-paper"
                  >
                    <ChevronLeft size={17} />
                  </button>
                  <button
                    type="button"
                    aria-label={t(uiCopy.modal.next)}
                    onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}
                    className="absolute top-1/2 right-3 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-md border border-rule bg-sheet/95 text-ink shadow-sm transition-colors hover:bg-ink hover:text-paper"
                  >
                    <ChevronRight size={17} />
                  </button>
                </>
              ) : null}

              <div className="flex items-center justify-between border-t border-rule bg-paper px-4 py-2 font-mono text-[11px] text-muted">
                <span>{t(currentImage.label)}</span>
                {images.length > 1 ? (
                  <span>
                    {imageIndex + 1} / {images.length}
                  </span>
                ) : null}
              </div>
            </div>
          ) : null}

          {target.kind === 'flagship' ? (
            <div className="mt-7 space-y-6">
              <div>
                <h4 className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                  {t(uiCopy.modal.problem)}
                </h4>
                <p className="mt-2 text-sm leading-[1.7] text-ink-soft">
                  {t(target.study.caseStudy.problem)}
                </p>
              </div>

              <div className="grid gap-6 border-t border-rule pt-6 md:grid-cols-2">
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                    {t(uiCopy.modal.architecture)}
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-[13.5px] leading-[1.65] text-ink-soft">
                    {target.study.caseStudy.architecture.map((line) => (
                      <li key={line.en} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" />
                        <span>{t(line)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                    {t(uiCopy.modal.tradeoffs)}
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-[13.5px] leading-[1.65] text-ink-soft">
                    {target.study.caseStudy.tradeoffs.map((line) => (
                      <li key={line.en} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" />
                        <span>{t(line)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-rule bg-paper p-4">
                <h4 className="font-mono text-[11px] tracking-[0.1em] text-ink uppercase">
                  {t(uiCopy.modal.verification)}
                </h4>
                <ul className="mt-2.5 space-y-2 text-[13.5px] leading-[1.65] text-ink-soft">
                  {target.study.caseStudy.verification.map((line) => (
                    <li key={line.en} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-status" />
                      <span>{t(line)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <p className="text-[15px] leading-[1.7] text-ink-soft">
                {t(target.project.description)}
              </p>
              <div className="rounded-lg border border-rule bg-paper p-4">
                <p className="font-mono text-[11px] tracking-[0.09em] text-accent uppercase">
                  {t(uiCopy.modal.architecture)}
                </p>
                <p className="mt-2 text-sm leading-[1.65] text-ink-soft">
                  {t(target.project.architectureNote)}
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule bg-paper px-5 py-3.5 sm:px-7">
          <div className="flex flex-wrap items-center gap-2.5">
            {liveDemo ? (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                {t(uiCopy.flagship.liveDemo)}
                <ArrowUpRight size={13} />
              </a>
            ) : null}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-rule-strong bg-sheet px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-ink"
            >
              <GitHubIcon size={13} />
              {t(uiCopy.flagship.sourceCode)}
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-muted hover:text-ink"
          >
            ESC
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProjectModal({ target, onClose }: ProjectModalProps) {
  if (!target) return null
  const modalKey =
    target.kind === 'flagship'
      ? `flagship-${target.study.id}-${target.initialIndex ?? 0}`
      : `archive-${target.project.id}`

  return <ProjectModalBody key={modalKey} target={target} onClose={onClose} />
}
