import '../styles/Experience.css'

function Experience() {

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Hogarth.',
      period: 'January 2022 - April 2025',
      description: 'Developed responsive web applications for various clients, focusing on user experience and performance optimization. Worked with React, Next.js and Vuejs.',
      achievements: [
        'Built 50+ emails templates',
        'Built or maintained 10+ websites',
      ]
    },
    {
      title: 'Frontend Developer with Wordpress',
      company: 'Freelance Project',
      period: 'January 2021 - September 2021',
      description: 'Updated and maintained existing web application on wordpress. Improved user experience, SEO and performance. Worked with Wordpress.',
      achievements: [
        'Updated website',
        'Increased lighthouse score to 95%',
      ]
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <h2 id="experience-title" className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <article className="timeline-item" key={index}>
              <div className="timeline-content">
                <header className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <time className="timeline-period">{exp.period}</time>
                </header>
                
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                
                {exp.achievements.length > 0 && (
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
