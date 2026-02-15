import '../styles/Header.css'

function Header({ visible }) {
  return (
    <header className={`header ${visible ? 'visible' : ''}`}>
      <div className="logo">
        <span className="logo-text">MATIAS DEV</span>
      </div>
      
      <nav className="nav" aria-label="Main navigation">
        <ul className="nav-list">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="/Matias-Fandiño-CV.pdf" className="nav-link highlight" download="Matias-Fandiño-CV.pdf">Resume</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
