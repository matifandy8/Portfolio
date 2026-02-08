import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">MATIAS DEV</span>
      </div>
      
      <nav className="nav" aria-label="Navegación principal">
        <ul className="nav-list">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
