

import '../styles/Contact.css'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'



const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { reduceMotion } = context.conditions;

      if (!reduceMotion) {
        gsap.from(".section-title", {
          scrollTrigger: {
            trigger: ".contact",
            start: "top 90%",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })

        gsap.from(".contact-info", {
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 90%",
            once: true,
          },
          x: -40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })

        gsap.from(".contact-form", {
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 90%",
            once: true,
          },
          x: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })
      } else {
        // Simple reveal for reduced motion
        gsap.from(".contact-content", {
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        })
      }
    });

    return () => mm.revert()
  }, [])



  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    setResult("Sending message...");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("success");
          setResult("Message sent! I'll get back to you soon.");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus("error");
          setResult("Oops! Something went wrong. Please try again.");
      });
  };
  return (
    <section className="contact" ref={sectionRef}>
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
            
            <nav className="social-links" aria-label="Social media">
              <a 
                href="https://www.linkedin.com/in/matiasfandino/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Matias Fandiño's LinkedIn profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/matifandy8" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Matias Fandiño's GitHub profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </nav>
          </div>
          
          <form className="contact-form" ref={formRef} onSubmit={sendEmail} aria-labelledby="contact-title">
            <fieldset>
              <legend className="visually-hidden">Contact form</legend>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  aria-describedby="name-help"
                />
                <span id="name-help" className="visually-hidden">Enter your full name</span>
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
                <span id="email-help" className="visually-hidden">Enter your email address</span>
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
                <span id="subject-help" className="visually-hidden">Enter the message subject</span>
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
                <span id="message-help" className="visually-hidden">Write your message here</span>
              </div>
              
              <button 
                type="submit" 
                className="cyber-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <div className={`form-feedback ${status}`}>
                  {result}
                </div>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
