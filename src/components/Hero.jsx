
import '../styles/Hero.css'

function Hero() {

  return (
    <main className="hero">
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          Expert in Modern Frontend Development
          <span className="highlight"> React, TypeScript & Web Performance</span>
        </h1>
        
        <p className="hero-description">
          4 years of experience building responsive interfaces, optimizing user experiences, 
          and implementing cutting-edge web solutions.
        </p>
        
        <a href="#contact" className="cta-button" aria-label="Contactar con Matias">
          Contact Me
        </a>
      </div>
      
      <div className="hero-background" aria-hidden="true"></div>
      <div className="code-pattern" aria-hidden="true"></div>
    </main>
  )
}

export default Hero
