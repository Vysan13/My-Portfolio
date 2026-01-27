import React from 'react'

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
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {sampleProjects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small>{p.tech}</small>
          </article>
        ))}
      </div>
    </section>
  )
}
