import { SectionHeading } from './SectionHeading'

const points = [
  {
    title: 'Education',
    body: 'Final-year university student focused on software development, databases, and building complete applications from idea to working product.',
  },
  {
    title: 'Internships',
    body: 'Two internships completed: one in IT operations and one in software development, covering real workflows, teamwork, and delivery under guidance.',
  },
  {
    title: 'Self-driven work',
    body: 'Outside class and internships I keep building — desktop CRM, SQL models, React apps, and Flutter experiments — to turn coursework into a portfolio I can show.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-white/6 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A junior developer who learns by shipping"
          description="I combine university coursework with internships and personal projects to grow as a full-stack-minded software developer."
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
