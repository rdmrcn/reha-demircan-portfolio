import { SectionHeading } from './SectionHeading'

const points = [
  {
    title: 'Education',
    body: 'Final-year university student with a focus on software engineering, databases, and delivering complete applications rather than isolated coursework exercises.',
  },
  {
    title: 'Internships',
    body: 'Two internships completed — IT operations and software development. Experience with real tickets, teamwork, and delivering work to a standard that others can use.',
  },
  {
    title: 'Selected delivery',
    body: 'Shipped a Financial CRM on .NET and SQL Server, a React internship CRUD app, Flutter catalog work, and SQL reporting models. Comfortable moving between backend, frontend, and mobile.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-white/6 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Junior developer with internships and shipped software"
          description="I am looking for a junior role where I can contribute to a real product team. I already work across C#, .NET, SQL, React, and Flutter, and I am used to finishing features — not only starting them."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {points.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 transition duration-300 hover:border-accent/25 hover:bg-white/5"
            >
              <h3 className="text-lg font-medium text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
