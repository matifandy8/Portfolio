import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Projects.css'

gsap.registerPlugin(ScrollTrigger)

function Projects({ animationsEnabled = true }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.context(() => {
        gsap.from(".section-title", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            once: true,
            markers: false
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })

        gsap.from(".project-card", {
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 60%",
            once: true,
            markers: false
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        })
        gsap.to(".project-card", {
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 60%",
            once: true,
            markers: false
          },
          y: 50,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        })
      }, sectionRef)
    });

    return () => {
      mm.revert();
    }
  }, [animationsEnabled])





  const projects = [
    {
      title: 'ZonaPartido',
      description: 'A modern web platform for organizing and managing sports matches, connecting individual players and teams looking to complete their lineups.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk auth', 'Supabase'],
      link: 'https://zona-partido.vercel.app/',
      image: '../src/assets/images/zonapartido-project.png'
    },
    {
      title: 'NeoBrutalismCSS',
      description: 'CSS library that provides a variety of utility classes to help you style your website. Library inspired by the Neo-Brutalist design trend.',
      tech: ['HTML', 'CSS', 'Sass'],
      github: 'https://github.com/matifandy8/NeoBrutalismCSS',
      link: 'https://matifandy8.github.io/NeoBrutalismCSS/',
      image: '../src/assets/images/neobrutalismcss-project.png'
    },
    {
      title: 'Destino Uruguay',
      description: 'A web platform to discover cultural events, festivals, and travel destinations across Uruguay.',
      tech: ['Next.js', 'TypeScript', 'Cheerio', 'Nodemailer'],
      github: 'https://github.com/matifandy8/destinouruguay',
      link: 'https://destinouruguay.vercel.app/',
      image: '../src/assets/images/destinouruguay-project.webp'
    },
  ]

  return (
    <section className={`projects ${!animationsEnabled ? 'no-animations' : ''}`} ref={sectionRef}>

      <div className="container">
        <h2 id="projects-title" className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card cyber-clip" key={index}>
              {project.image && (
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                  <div className="project-image-overlay"></div>
                </div>
              )}
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech" role="group" aria-label="Technologies used">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="cyber-button-alt"
                      aria-label={`Visit ${project.title} live website`}
                      target="_blank"
                    >
                      View Project →
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="cyber-button-alt"
                      aria-label={`View GitHub repository for ${project.title}`}
                      target="_blank"
                    >
                      View GitHub →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
