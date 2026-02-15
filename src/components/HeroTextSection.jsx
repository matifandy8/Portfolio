import '../styles/HeroTextSection.css'
import heroBgText from '../assets/images/hero-bg-text.png'

function HeroTextSection() {

  return (
    <div className="hero-text-section" aria-hidden="true">
      <img 
        src={heroBgText} 
        alt="Hero Text Section"
        className="hero-text-image"
      />
    </div>
  )
}

export default HeroTextSection
