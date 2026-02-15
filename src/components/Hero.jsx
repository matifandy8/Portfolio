
import '../styles/Hero.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: false
        }
      });

      mainTl.to(".hero-content", {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 1,
        ease: "power1.inOut"
      });

      mainTl.fromTo(".hero-text-section",
        { opacity: 0.1, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=0.5"
      );

      mainTl.to(".hero-text-section", {
        opacity: 0,
        scale: 1.4,
        duration: 1.5,
        ease: "power2.in"
      });

    });

    return () => {
      mm.revert();
    }
  }, [])




  return (
    <section className="hero">
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
        
        <div className="hero-actions">
          <a href="#contact" className="cyber-button" aria-label="Contact Matias">
            Contact Me
          </a>
          <a 
            href="/Matias-Fandiño-CV.pdf" 
            className="cyber-button-alt" 
            download="Matias-Fandiño-CV.pdf"
            aria-label="Download Matias's CV"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>

  )
}

export default Hero
