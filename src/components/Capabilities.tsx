import { capabilityGroups, uiCopy } from '../data/portfolio'
import { useLocale } from '../lib/locale-context'

export function Capabilities() {
  const { t } = useLocale()

  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-b border-rule px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11.5px] tracking-[0.12em] text-accent uppercase">
            {t(uiCopy.capabilities.eyebrow)}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-[38px] sm:leading-[1.12]">
            {t(uiCopy.capabilities.title)}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            {t(uiCopy.capabilities.description)}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilityGroups.map((group) => (
            <article
              key={group.id}
              className="flex flex-col rounded-xl border border-rule bg-sheet p-6 sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-2xl font-normal text-ink">
                  {t(group.title)}
                </h3>
                <span className="font-mono text-xs text-muted">{group.index}</span>
              </div>

              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                {t(group.summary)}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-rule pt-4">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11.5px] text-ink"
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
