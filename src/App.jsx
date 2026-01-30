import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Header } from './components/Header'

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default App
