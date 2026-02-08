

import '../styles/Contact.css'

function Contact() {
 

  return (
    <section className="contact">
      <div className="bottom-bg-1" aria-hidden="true"></div>
      <div className="bottom-bg-2" aria-hidden="true"></div>
      <div className="container">
        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> matifandy@gmail.com
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Based in Uruguay
              </div>
            </div>
            
            <nav className="social-links" aria-label="Redes sociales">
              <a 
                href="https://www.linkedin.com/in/matiasfandino/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Matias Fandiño"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/matifandy8" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Matias Fandiño"
              >
                GitHub
              </a>
            </nav>
          </div>
          
          <form className="contact-form" aria-labelledby="contact-title">
            <fieldset>
              <legend className="visually-hidden">Formulario de contacto</legend>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  aria-describedby="name-help"
                />
                <span id="name-help" className="visually-hidden">Ingresa tu nombre completo</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-help"
                />
                <span id="email-help" className="visually-hidden">Ingresa tu correo electrónico</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  aria-describedby="subject-help"
                />
                <span id="subject-help" className="visually-hidden">Ingresa el asunto del mensaje</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  aria-describedby="message-help"
                ></textarea>
                <span id="message-help" className="visually-hidden">Escribe tu mensaje aquí</span>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
