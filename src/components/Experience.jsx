
import '../styles/Experience.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

  const sectionRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({
      // Desktop
      isDesktop: "(min-width: 769px)",
      // Mobile
      isMobile: "(max-width: 768px)",
      // Reduced motion
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isMobile, reduceMotion } = context.conditions;

      if (reduceMotion) return;

      // Animate the roadmap line drawing
      gsap.to(".roadmap-line-progress", {
        scrollTrigger: {
          trigger: ".roadmap-timeline",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        scaleY: 1,
        ease: "none"
      });

      // Animate roadmap points and content
      const items = gsap.utils.toArray(".roadmap-item");
      items.forEach((item) => {
        const point = item.querySelector(".roadmap-point");
        const content = item.querySelector(".roadmap-content");

        gsap.from(point, {
          scrollTrigger: {
            trigger: item,
            start: "top center",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          opacity: 0,
          duration: 0.5
        });

        gsap.from(content, {
          scrollTrigger: {
            trigger: item,
            start: isMobile ? "top 85%" : "top center+=50",
            toggleActions: "play none none reverse",
          },
          x: isMobile ? 20 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => mm.revert();
  }, [])

  return (
    <section className="experience" ref={sectionRef}>
      <div className="roadmap-container">
        
        {/* Left Side: Sticky Title */}
        <div className="roadmap-sticky-side">
          <div className="sticky-content">
            <h2 id="experience-title" className="roadmap-main-title">
              Professional <br /> 
              <span className="highlight">Experience</span>
            </h2>
            <p className="roadmap-intro">
               A journey through my career as a developer, highlighting key milestones and technical growth.
            </p>
          </div>
        </div>

        {/* Right Side: Scrollable Timeline */}
        <div className="roadmap-timeline">
          <div className="roadmap-line-bg"></div>
          <div className="roadmap-line-progress"></div>

          {experiences.map((exp, index) => (
            <div className="roadmap-item" key={index}>
              <div className="roadmap-point"></div>
              <div className="roadmap-content">
                <header className="roadmap-header">
                  <span className="roadmap-date">{exp.period}</span>
                  <h3 className="roadmap-title">{exp.title}</h3>
                </header>
                
                <h4 className="roadmap-company">{exp.company}</h4>
                <p className="roadmap-desc">{exp.description}</p>
                
                {exp.achievements.length > 0 && (
                  <ul className="roadmap-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
