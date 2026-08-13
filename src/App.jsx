import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
