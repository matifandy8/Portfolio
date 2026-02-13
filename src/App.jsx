import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)
import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroTextSection from './components/HeroTextSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const lenisRef = useRef()
  const [reducedMotion, setReducedMotion] = useState(() => 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e) => setReducedMotion(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  
    return () => {
      gsap.ticker.remove(update)
      mediaQuery.removeEventListener('change', handleChange)
      clearTimeout(timer)
    }
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

          <div id="hero-text-region" className="hero-text-container">
            <HeroTextSection />
          </div>
          
          <section id="experience" aria-labelledby="experience-title">
            <Experience />
          </section>

          <section id="projects" aria-labelledby="projects-title">
            <Projects animationsEnabled={!reducedMotion} />
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
