import { useState } from 'react'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FlagshipWork } from './components/FlagshipWork'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectGrid } from './components/ProjectGrid'
import { ProjectModal, type ModalTarget } from './components/ProjectModal'

export default function App() {
  const [modalTarget, setModalTarget] = useState<ModalTarget>(null)

  return (
    <div className="min-h-svh bg-paper text-ink">
      <Navbar />
      <main id="main">
        <Hero />
        <FlagshipWork
          onOpenCaseStudy={(study, initialIndex) =>
            setModalTarget({ kind: 'flagship', study, initialIndex })
          }
        />
        <ProjectGrid
          onOpenProject={(project) => setModalTarget({ kind: 'archive', project })}
        />
        <Experience />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <ProjectModal target={modalTarget} onClose={() => setModalTarget(null)} />
    </div>
  )
}
