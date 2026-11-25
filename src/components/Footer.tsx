import { ArrowUp } from 'lucide-react'
import { site, uiCopy } from '../data/portfolio'
import { useLocale } from '../lib/locale-context'

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-rule bg-paper px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs text-muted sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-medium text-ink">
            © {new Date().getFullYear()} {site.name}
          </span>
          <span aria-hidden="true">·</span>
          <span>{t(uiCopy.footer.builtWith)}</span>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-soft transition-colors hover:text-ink"
        >
          <span>{t(uiCopy.footer.backToTop)}</span>
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  )
}
