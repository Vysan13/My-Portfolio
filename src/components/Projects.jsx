import React, { useRef } from 'react'

const sampleProjects = [
  {
    title: 'Book Reader App',
    desc: 'Developed an Android app supporting downloads, full-text search, Text-to-Speech and adaptive UI.',
    tech: 'Kotlin, JUnit, MVVM, Google TTS, Jetpack Compose, SQL, Android Studio, GitLab'
  },
  {
    title: 'Space Discoveries Site',
    desc: 'Built a full-stack web app to search, filter with pagination and visualize large datasets of exoplanets and satellites.',
    tech: 'React, Express, Node.js, REST APIs, MongoDB, VS Code'
  }
  ,
  {
    title: 'Fireworks Display',
    desc: '2D fireworks simulation with interactive mouse and keyboard controls; includes a custom vector struct and physics-based particle system.',
    tech: 'MonoGame, C#, .NET, Visual Studio, Vector Math, Game Physics'
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
            </article>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll('right')} aria-label="Scroll right">›</button>
      </div>
    </section>
  )
}
