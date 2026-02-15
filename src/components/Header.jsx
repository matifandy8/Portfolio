import { useState, useEffect } from 'react'
import '../styles/Header.css'

function Header({ visible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when navigating or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`header ${visible ? 'visible' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">MATIAS<span className="logo-dot">.</span>DEV</span>
        </div>
        
        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="/Matias-Fandiño-CV.pdf" className="nav-link highlight" download="Matias-Fandiño-CV.pdf">Resume</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay Background when menu is open */}
      <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </header>
  )
}

export default Header
