
import '../styles/Contact.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".section-title", {
          scrollTrigger: {
            trigger: ".contact",
            start: "top 90%",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })

        gsap.from(".contact-content", {
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 90%",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })
      }, sectionRef)
      return () => ctx.revert()
    });

    return () => mm.revert()
  }, [])

  return (
    <section className="contact" ref={sectionRef}>
      <div className="bottom-bg-1" aria-hidden="true"></div>
      <div className="bottom-bg-2" aria-hidden="true"></div>
      <div className="container">
        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info-centered">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:matifandy@gmail.com" className="contact-link email-link">
                  matifandy@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Based in Uruguay</span>
              </div>
            </div>
            
            <nav className="social-links-centered" aria-label="Social media">
              <a 
                href="https://www.linkedin.com/in/matiasfandino/" 
                className="cyber-button-alt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Matias Fandiño's LinkedIn profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/matifandy8" 
                className="cyber-button-alt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Matias Fandiño's GitHub profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </nav>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
