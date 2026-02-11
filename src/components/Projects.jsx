import '../styles/Projects.css'

function Projects({ animationsEnabled = true }) {

  const projects = [
    {
      title: 'Neobrutalismcss',
      description: 'Modern React-based shopping cart with real-time inventory management and payment integration.',
      tech: ['HTML', 'CSS'],
      link: '',
      image: null // No image for this project
    },
    {
      title: 'ZonaPartido',
      description: 'Website for join, create matches and play football and other sports',
      tech: ['Next.js', 'Tailwind CSS', 'Clerk auth', 'Supabase'],
      link: '#',
      image: '../assets/images/zonapartido-project.png'
    },
    {
      title: 'Mobile Web App',
      description: 'Progressive web application with offline capabilities and native-like performance.',
      tech: ['React', 'PWA', 'Service Workers', 'IndexedDB'],
      link: '#',
      image: null // No image for this project
    },
  ]

  return (
    <section className={`projects ${!animationsEnabled ? 'no-animations' : ''}`}>
      <div className="container">
        <h2 id="projects-title" className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
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
                
                <div className="project-tech" aria-label="Tecnologías utilizadas">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    className="project-link"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
