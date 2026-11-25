import { type FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { site, uiCopy } from '../data/portfolio'
import { useLocale } from '../lib/locale-context'
import { GitHubIcon, LinkedInIcon } from './icons'

type FeedbackState = 'idle' | 'draft-opened' | 'copied'

export function Contact() {
  const { t } = useLocale()
  const [topic, setTopic] = useState<string>(uiCopy.contact.topics[0].id)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailCopied, setEmailCopied] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackState>('idle')

  const activeTopicLabel =
    uiCopy.contact.topics.find((item) => item.id === topic)?.label ??
    uiCopy.contact.topics[0].label

  function buildSubjectAndBody() {
    const cleanName = name.trim() || 'Hiring Team'
    const cleanEmail = email.trim()
    const cleanMessage = message.trim()
    const subject = `[${t(activeTopicLabel)}] ${cleanName} → Reha Demircan`
    const body = `${cleanMessage}\n\n---\nFrom: ${cleanName}${cleanEmail ? ` <${cleanEmail}>` : ''}`
    return { subject, body }
  }

  function handleOpenMail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { subject, body } = buildSubjectAndBody()
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFeedback('draft-opened')
  }

  async function handleCopyDraft() {
    const { subject, body } = buildSubjectAndBody()
    const payload = `To: ${site.email}\nSubject: ${subject}\n\n${body}`
    try {
      await navigator.clipboard.writeText(payload)
      setFeedback('copied')
    } catch {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setFeedback('draft-opened')
    }
  }

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(site.email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-sheet px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11.5px] tracking-[0.12em] text-accent uppercase">
            {t(uiCopy.contact.eyebrow)}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[1.12]">
            {t(uiCopy.contact.title)}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {t(uiCopy.contact.description)}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="flex flex-col justify-between rounded-xl border border-rule bg-paper p-6 sm:p-7">
            <div>
              <p className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
                {t(uiCopy.contact.directTitle)}
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-4">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 font-mono text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    <Mail size={15} />
                    <span>{site.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-sheet px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {emailCopied ? <Check size={12} className="text-status" /> : <Copy size={12} />}
                    <span>{emailCopied ? t(uiCopy.hero.copied) : t(uiCopy.hero.copyEmail)}</span>
                  </button>
                </div>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-rule pb-4 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <LinkedInIcon size={16} />
                    LinkedIn · Reha Demircan
                  </span>
                  <ArrowUpRight size={15} className="text-muted" />
                </a>

                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-rule pb-4 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <GitHubIcon size={16} />
                    GitHub · @rdmrcn
                  </span>
                  <ArrowUpRight size={15} className="text-muted" />
                </a>

                <a
                  href={site.cvPath}
                  download
                  className="flex items-center justify-between text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Download size={16} />
                    {t(uiCopy.hero.ctaCv)}
                  </span>
                  <ArrowUpRight size={15} className="text-muted" />
                </a>
              </div>
            </div>

            <p className="mt-8 border-t border-rule pt-4 font-mono text-[11px] text-muted">
              {t(site.location)}
            </p>
          </aside>

          <form
            onSubmit={handleOpenMail}
            className="rounded-xl border border-rule bg-paper p-6 sm:p-7"
          >
            <fieldset>
              <legend className="font-mono text-[11px] tracking-[0.09em] text-muted uppercase">
                {t(uiCopy.contact.topicLabel)}
              </legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {uiCopy.contact.topics.map((item) => {
                  const selected = topic === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setTopic(item.id)}
                      className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                        selected
                          ? 'border-ink bg-ink text-paper'
                          : 'border-rule bg-sheet text-ink-soft hover:border-rule-strong hover:text-ink'
                      }`}
                    >
                      {t(item.label)}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-ink-soft">
                {t(uiCopy.contact.nameLabel)}
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t(uiCopy.contact.namePlaceholder)}
                  className="mt-1.5 w-full rounded-md border border-rule bg-sheet px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none"
                />
              </label>

              <label className="block text-xs font-medium text-ink-soft">
                {t(uiCopy.contact.emailLabel)}
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t(uiCopy.contact.emailPlaceholder)}
                  className="mt-1.5 w-full rounded-md border border-rule bg-sheet px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-4 block text-xs font-medium text-ink-soft">
              {t(uiCopy.contact.messageLabel)}
              <textarea
                required
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t(uiCopy.contact.messagePlaceholder)}
                className="mt-1.5 w-full resize-y rounded-md border border-rule bg-sheet px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                <Mail size={15} />
                {t(uiCopy.contact.openMailClient)}
              </button>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-2 rounded-md border border-rule-strong bg-sheet px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <Copy size={14} />
                {t(uiCopy.contact.copyMessage)}
              </button>
            </div>

            {feedback === 'draft-opened' ? (
              <p role="status" className="mt-3 text-xs text-ink-soft">
                {t(uiCopy.contact.draftOpened)}
              </p>
            ) : null}
            {feedback === 'copied' ? (
              <p role="status" className="mt-3 text-xs font-medium text-status">
                {t(uiCopy.contact.copiedDraft)}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
