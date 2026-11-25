import {
  certifications,
  education,
  experiences,
  spokenLanguages,
  uiCopy,
} from '../data/portfolio'
import { useLocale } from '../lib/locale-context'

export function Experience() {
  const { t } = useLocale()

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-rule bg-sheet px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11.5px] tracking-[0.12em] text-accent uppercase">
            {t(uiCopy.experience.eyebrow)}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-[38px] sm:leading-[1.12]">
            {t(uiCopy.experience.title)}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-rule border-y border-rule">
          {experiences.map((entry) => (
            <article
              key={entry.id}
              className="grid gap-6 py-8 md:grid-cols-[0.38fr_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-xs font-medium text-ink">
                  {t(entry.period)}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {t(entry.duration)} · {t(entry.location)}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal text-ink">
                  {entry.organization}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{t(entry.role)}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {t(entry.summary)}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {entry.highlights.map((bullet) => (
                    <li
                      key={bullet.en}
                      className="flex gap-3 text-[13.5px] leading-[1.65] text-ink-soft"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-ink/60"
                        aria-hidden="true"
                      />
                      <span>{t(bullet)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {entry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="grid gap-6 py-8 md:grid-cols-[0.38fr_1fr] md:gap-10">
            <div>
              <p className="font-mono text-[11px] tracking-[0.09em] text-muted uppercase">
                {t(uiCopy.experience.educationLabel)}
              </p>
              <p className="mt-1.5 font-mono text-xs text-ink">{t(education.period)}</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-normal text-ink">
                {t(education.institution)}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-soft">{t(education.degree)}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                {t(education.summary)}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-rule bg-paper p-6">
            <h3 className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
              {t(uiCopy.experience.certificationsLabel)}
            </h3>
            <ul className="mt-4 divide-y divide-rule">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm first:pt-0 last:pb-0"
                >
                  <div>
                    <span className="font-medium text-ink">{cert.title}</span>
                    <span className="ml-2 text-xs text-muted">{cert.issuer}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-rule bg-paper p-6">
            <h3 className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
              {t(uiCopy.experience.languagesLabel)}
            </h3>
            <dl className="mt-4 divide-y divide-rule">
              {spokenLanguages.map((lang) => (
                <div
                  key={lang.name.en}
                  className="flex items-baseline justify-between gap-2 py-2.5 text-sm first:pt-0 last:pb-0"
                >
                  <dt className="font-medium text-ink">{t(lang.name)}</dt>
                  <dd className="font-mono text-xs text-muted">{t(lang.level)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
