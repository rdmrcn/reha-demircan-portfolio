import { SectionHeading } from './SectionHeading'

const experience = [
  {
    company: 'TNC Group',
    role: 'Information Systems Intern',
    period: '2 months',
    body: 'Worked on information systems with a backend focus: C#, .NET, SQL Server, Entity Framework, and API-based services supporting internal workflows.',
  },
  {
    company: 'Software Persona',
    role: 'Software Developer Intern',
    period: '3 months',
    body: 'Contributed as a software developer on frontend work with React, TypeScript, HTML, and CSS, while also using backend MVC and API layers to connect the UI to real data.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-white/6 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Education and work experience"
          description="Istinye University Software Engineering, senior year, with internship experience in backend systems and full-stack product work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
          <article className="rounded-2xl border border-white/8 bg-white/3 p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Education</p>
            <h3 className="mt-3 text-xl font-medium text-white">Istinye University</h3>
            <p className="mt-1 text-sm text-slate-300">B.Sc. Software Engineering</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Senior year (final year). Coursework and projects in software development, databases, APIs, and complete application delivery.
            </p>
          </article>

          <div className="rounded-2xl border border-white/8 bg-white/3 p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Work experience</p>
            <div className="mt-5 flex flex-col gap-6">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className="border-b border-white/8 pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium text-white">{job.company}</h3>
                    <p className="font-mono text-xs text-slate-400">{job.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-cyan-100/80">{job.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
