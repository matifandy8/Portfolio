import './App.css'
import { gsap } from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroTextSection from './components/HeroTextSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
 const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <div className="app" >
      <div className="global-background" aria-hidden="true"></div>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Header />
        
        <main id="main-content">
          <section id="home" aria-labelledby="hero-title">
            <Hero />
          </section>

          <section id="hero-text-section" aria-labelledby="hero-text-section-title">
            <HeroTextSection />
          </section>
          
          <section id="experience" aria-labelledby="experience-title">
            <Experience />
          </section>

          <section id="projects" aria-labelledby="projects-title">
            <Projects />
          </section>
          
          <section id="contact" aria-labelledby="contact-title">
            <Contact />
          </section>
        </main>
      </ReactLenis>
    </div>
  )
}

export default App
