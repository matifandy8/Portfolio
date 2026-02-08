

import '../styles/Projects.css'

function Projects() {

  const projects = [
    {
      title: 'Neobrutalismcss',
      description: 'Modern React-based shopping cart with real-time inventory management and payment integration.',
      tech: ['HTML', 'CSS'],
      link: '',
    },
    {
      title: 'ZonaPartido',
      description: 'Website for join, create matches and play football and other sports',
      tech: ['Next.js', 'Tailwind CSS', 'Clerk auth', 'Supabase'],
      link: '#',
    },
    {
      title: 'Mobile Web App',
      description: 'Progressive web application with offline capabilities and native-like performance.',
      tech: ['React', 'PWA', 'Service Workers', 'IndexedDB'],
      link: '#',
    },
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2 id="projects-title" className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
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
