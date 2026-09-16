import { ArrowDown, Download } from 'lucide-react'
import { site } from '../data/site'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pt-20 pb-16 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-12%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[10%] h-72 w-72 rounded-full bg-sky-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-5 font-mono text-xs tracking-[0.24em] text-accent uppercase">
          Portfolio
        </p>
        <h1 className="max-w-3xl text-[clamp(2.15rem,8vw,4.5rem)] leading-[1.05] font-semibold tracking-tight break-words text-white">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-cyan-100/80 sm:text-xl">{site.title}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {site.intro}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={site.cvPath}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-50"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            View projects
            <ArrowDown size={16} />
          </a>
        </div>

        <SocialLinks className="mt-10" />
      </div>
    </section>
  )
}
