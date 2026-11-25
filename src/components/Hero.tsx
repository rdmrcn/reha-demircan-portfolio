import { useState } from 'react'
import { ArrowDownRight, Check, Copy, Download, MapPin } from 'lucide-react'
import { site, uiCopy } from '../data/portfolio'
import { useLocale } from '../lib/locale-context'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Hero() {
  const { t } = useLocale()
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <section id="top" className="border-b border-rule px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_0.85fr] lg:gap-14">
          <div className="animate-reveal">
            <div className="inline-flex items-start gap-2.5 border-b border-rule pb-3 font-mono text-[11.5px] leading-relaxed tracking-[0.04em] text-muted sm:items-center">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-status sm:mt-0" aria-hidden="true" />
              <span>{t(site.availability)}</span>
            </div>

            <h1 className="mt-7 font-serif text-[clamp(2.35rem,5.2vw,4.35rem)] leading-[1.06] font-normal tracking-[-0.025em] text-ink">
              {t(site.heroTitleStart)}{' '}
              <em className="italic text-accent">{t(site.heroTitleEmphasis)}</em>
              {t(site.heroTitleEnd) ? ` ${t(site.heroTitleEnd)}` : ''}
            </h1>

            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.72] text-ink-soft sm:text-[17px]">
              {t(site.heroSummary)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                {t(uiCopy.hero.ctaWork)}
                <ArrowDownRight size={16} strokeWidth={1.8} />
              </a>

              <a
                href={site.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-md border border-rule-strong bg-sheet px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <Download size={15} strokeWidth={1.8} />
                {t(uiCopy.hero.ctaCv)}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-3 font-mono text-xs text-muted transition-colors hover:border-rule hover:bg-sheet hover:text-ink"
              >
                {copied ? <Check size={14} className="text-status" /> : <Copy size={14} />}
                <span>{copied ? t(uiCopy.hero.copied) : site.email}</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 pt-2 text-[13px] font-medium text-ink-soft">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <GitHubIcon size={16} />
                <span>github.com/rdmrcn</span>
              </a>
              <span className="text-rule-strong" aria-hidden="true">/</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[330px] sm:max-w-[350px] lg:mx-0 lg:ml-auto">
            <div className="overflow-hidden rounded-xl border border-rule bg-sheet shadow-[0_14px_40px_-28px_rgba(20,20,19,0.35)]">
              <div className="relative aspect-[10/9] w-full overflow-hidden bg-ink">
                <img
                  src={site.portraitPath}
                  alt={t(uiCopy.hero.portraitAlt)}
                  width={460}
                  height={460}
                  fetchPriority="high"
                  className="h-full w-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-black/30 to-transparent"
                />
              </div>

              <div className="border-t border-rule px-4 py-3.5">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">{site.name}</p>
                  <span className="font-mono text-[11px] text-muted">EN · RU · TR · DE</span>
                </div>
                <p className="mt-0.5 text-xs text-ink-soft">{t(site.portraitCaption)}</p>
                <p className="mt-2.5 flex items-center gap-1.5 border-t border-rule/80 pt-2.5 font-mono text-[11px] text-muted">
                  <MapPin size={12} strokeWidth={1.8} className="shrink-0 text-accent" />
                  <span>{t(site.location)}</span>
                </p>
              </div>
            </div>
          </aside>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {site.proofAnchors.map((anchor) => (
            <div key={anchor.label.en} className="bg-sheet px-5 py-4">
              <dt className="font-mono text-[10.5px] tracking-[0.09em] text-muted uppercase">
                {t(anchor.label)}
              </dt>
              <dd className="mt-1.5 text-[13.5px] font-medium text-ink">
                {t(anchor.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
