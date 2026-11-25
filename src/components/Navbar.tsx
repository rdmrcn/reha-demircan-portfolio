import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site, uiCopy } from '../data/portfolio'
import { useLocale } from '../lib/locale-context'

export function Navbar() {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: '#work', label: t(uiCopy.nav.work) },
    { href: '#projects', label: t(uiCopy.nav.projects) },
    { href: '#experience', label: t(uiCopy.nav.experience) },
    { href: '#capabilities', label: t(uiCopy.nav.stack) },
    { href: '#contact', label: t(uiCopy.nav.contact) },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        {t(uiCopy.skipToContent)}
      </a>

      <header
        className={`sticky top-0 z-50 transition-colors duration-200 ${
          scrolled || open
            ? 'border-b border-rule bg-paper/92 backdrop-blur-md'
            : 'border-b border-transparent bg-paper/80 backdrop-blur-sm'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <a
            href="#top"
            className="flex items-baseline gap-2.5 text-ink transition-opacity hover:opacity-80"
          >
            <span className="font-serif text-xl font-medium tracking-[-0.02em]">
              {site.name}
            </span>
            <span className="hidden font-mono text-[11px] tracking-[0.08em] text-muted uppercase lg:inline">
              / SWE
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <div
              role="group"
              aria-label="Language"
              className="inline-flex items-center rounded-md border border-rule bg-sheet p-0.5 font-mono text-[11px]"
            >
              {(['en', 'tr'] as const).map((code) => {
                const active = locale === code
                return (
                  <button
                    key={code}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setLocale(code)}
                    className={`rounded-[4px] px-2 py-1 font-medium uppercase transition-colors ${
                      active
                        ? 'bg-ink text-paper'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {code}
                  </button>
                )
              })}
            </div>

            <a
              href={site.cvPath}
              target="_blank"
              rel="noreferrer"
              className="hidden min-w-[96px] items-center justify-center gap-1 rounded-md border border-rule bg-sheet px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-ink sm:inline-flex"
            >
              {t(uiCopy.nav.cv)}
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </a>

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md border border-rule bg-sheet text-ink transition-colors hover:border-ink md:hidden"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="border-t border-rule bg-paper md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-rule/70 py-3.5 text-base font-medium text-ink last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.cvPath}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper"
              >
                {t(uiCopy.hero.ctaCv)}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
