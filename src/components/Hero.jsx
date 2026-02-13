
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
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { reduceMotion } = context.conditions;

      if (!reduceMotion) {
        // High-motion animations for the reveal
        gsap.to(".hero-content", {
          opacity: 0,
          scale: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true
          }
        });

        gsap.fromTo(".hero-text-section", 
          { opacity: 0.2 }, 
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "10% top",
              end: "50% top",
              pin: true,
              scrub: 1.5
            }
          }
        );

        gsap.to(".hero-text-section", {
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".hero",
            start: "50% top",
            end: "100% top",
            pin: true,
            scrub: 1.5
          }
        });
      } else {
        // Simplified entry for reduced motion
        gsap.from(".hero-content", {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        });
      }
    });

    return () => mm.revert();
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
