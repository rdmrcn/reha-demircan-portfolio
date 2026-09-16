import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Junior Software Developer · Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  )
}
