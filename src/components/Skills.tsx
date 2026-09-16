import { skillGroups } from '../data/skills'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="A broader stack across APIs, web UI, and mobile — grouped by how I actually use them."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/8 bg-linear-to-b from-white/5 to-transparent p-6"
            >
              <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
