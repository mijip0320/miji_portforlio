import { Approach } from './components/Approach'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MoreWork } from './components/MoreWork'
import { ProfileSnapshot } from './components/ProfileSnapshot'
import { ProjectChapter } from './components/ProjectChapter'
import { useContent, useLocale } from './i18n'
import { useInViewAnimation } from './hooks/useInViewAnimation'

export default function App() {
  const { featured } = useContent()
  const { locale } = useLocale()
  useInViewAnimation('.animate-on-scroll', locale)

  return (
    <main className="overflow-x-hidden bg-ink text-paper">
      <Header />
      <Hero />
      <ProfileSnapshot />
      {featured.map((project, index) => (
        <ProjectChapter
          key={`${locale}-${project.id}`}
          project={project}
          isFirst={index === 0}
        />
      ))}
      <MoreWork />
      <Approach />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  )
}
