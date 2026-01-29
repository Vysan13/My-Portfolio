import React, { useRef } from 'react'
import Skills from './Skills'

const sampleProjects = [
  {
    title: 'Book Reader App',
    desc: 'Developed an Android app supporting downloads, full-text search, Text-to-Speech and adaptive UI.',
    tech: 'Kotlin, JUnit, MVVM, Google TTS, Jetpack Compose, SQL, Android Studio, GitLab',
    repo: 'https://gitlab.com/dawson-cst-cohort-2026/520/section3/teams/teamperavythomas/520-project-san-nicholls-koleboshyna'
  },
  {
    title: 'Space Discoveries Site',
    desc: 'Built a full-stack web app to search, filter with pagination and visualize large datasets of exoplanets and satellites.',
    tech: 'React, Express, Node.js, REST APIs, MongoDB, VS Code',
    repo: 'https://gitlab.com/dawson-cst-cohort-2026/511/section3/Vy-Desiree-Ritik/mobile-dev-project'
  }
  ,
  {
    title: 'Fireworks Display',
    desc: '2D fireworks simulation with interactive mouse and keyboard controls; includes a custom vector struct and physics-based particle system.',
    tech: 'MonoGame, C#, .NET, Visual Studio, Vector Math, Game Physics',
    repo: 'https://gitlab.com/dawson-cst-cohort-2026/510/section3/san/fireworks'
  }
  ,
  {
    title: 'Hair Salon Management Platform',
    desc: 'Full-stack appointment scheduling platform with user management, reporting, dynamic time slots and admin controls. Containerized for easy deployment.',
    tech: 'Flask, Python, REST APIs, PostgreSQL, Docker',
    repo: 'https://gitlab.com/Jam14t/prg-grp3-adeshina/-/tree/develop?ref_type=heads'
  },
  {
    title: 'Restaurant Calendar',
    desc: 'Restaurant reservation and staff management system with booking rules, fees, VIP handling, input validation and automated unit tests.',
    tech: 'C#, .NET, Unit Testing, Visual Studio',
    repo: 'https://gitlab.com/dawson-cst-cohort-2026/410/section3/vyjamiatdorian/resto_calendar/-/tree/develop/RestoCalendar?ref_type=heads'
  }
]

export default function Projects() {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    const el = sliderRef.current
    if (!el) return
    const amt = Math.round(el.clientWidth * 0.75)
    el.scrollBy({ left: dir === 'left' ? -amt : amt, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-slider-wrapper">
        <button className="slider-btn left" onClick={() => scroll('left')} aria-label="Scroll left">‹</button>

        <div className="projects-slider" ref={sliderRef}>
          {sampleProjects.map((p) => (
            <article key={p.title} className="card slide-item">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>{p.tech}</small>
              {p.repo && (
                <p className="project-repo"> 
                  <a className="repo-link" href={p.repo} target="_blank" rel="noopener noreferrer">Repository →</a>
                </p>
              )}
            </article>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll('right')} aria-label="Scroll right">›</button>
      </div>

      <div className="container">
        <Skills />
      </div>
    </section>
  )
}
