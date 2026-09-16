import { type FormEvent, useState } from 'react'
import { site } from '../data/site'
import { SectionHeading } from './SectionHeading'
import { SocialLinks } from './SocialLinks'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const usingPlaceholder = site.formspreeEndpoint.includes('YOUR_FORM_ID')

    if (usingPlaceholder) {
      const name = String(data.get('name') ?? '')
      const email = String(data.get('email') ?? '')
      const message = String(data.get('message') ?? '')
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/6 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s work together"
          description="Send a short message about internships, junior roles, or project collaboration."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <aside className="rounded-2xl border border-white/8 bg-white/3 p-6">
            <p className="text-sm leading-relaxed text-muted">
              Prefer email or socials? Reach me directly and I will get back as soon as I can.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-accent hover:underline"
            >
              {site.email}
            </a>
            <SocialLinks className="mt-6" />
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/8 bg-[#0d1420] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-white outline-none transition focus:border-accent/50"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-white outline-none transition focus:border-accent/50"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-white outline-none transition focus:border-accent/50"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-5 inline-flex rounded-full border border-cyan-400/35 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/18 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' ? (
              <p className="mt-3 text-sm text-accent">Thanks — your message is ready to send.</p>
            ) : null}
            {status === 'error' ? (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong. Please email me directly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
