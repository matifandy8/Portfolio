
import '../styles/Hero.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroTextSection from './HeroTextSection'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // Sticky scroll animation with pin effect
    // This pins the hero section and creates a dramatic reveal
    const heroAnimation = gsap.to(".hero-content", {
      opacity: 0,
      scale: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true, // Remove extra spacing
        markers: false
      }
    })

    // Hero text section fade in animation
    const textSectionAnimation = gsap.fromTo(".hero-text-section", {
      opacity: 0.2,       // Start with very low opacity
    }, {
      opacity: 1,         // Fade in to full opacity
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "10% top",    // Start immediately when hero animation ends
        end: "50% top",     // End quickly for faster transition
        pin: true,
        markers: false,
        pinSpacing: true, // Remove extra spacing
        scrub: 1.5        // Faster response to scroll
      }
    })

    // Hero text section fade out animation
    const textSectionFadeOut = gsap.to(".hero-text-section", {
      opacity: 0,         // Fade out completely
      ease: "power2.inOut", // Smoother easing
      scrollTrigger: {
        trigger: ".hero",
        start: "50% top",    // Start fading out after appearing
        end: "100% top",    // Complete fade out
        pin: true,
        markers: false,
        pinSpacing: true, // Remove extra spacing
        scrub: 1.5        // Smoother, more gradual response
      }
    })

 

    // Cleanup on component unmount
    return () => {
      heroAnimation.kill()
      textSectionAnimation.kill()
      textSectionFadeOut.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="hero">
      <div className="hero-content">
        <h1 
          ref={titleRef}
          id="hero-title" 
          className="hero-title"
        >
          Frontend Developer
          <span className="highlight"> React, TypeScript & Web Performance</span>
        </h1>
        
        <p className="hero-description">
          4 years of experience building responsive interfaces, optimizing user experiences, 
          and implementing cutting-edge web solutions.
        </p>
        
        <a href="#contact" className="cyber-button" aria-label="Contact Matias">
          Contact Me
        </a>
      </div>
    </main>
  )
}

export default Hero
