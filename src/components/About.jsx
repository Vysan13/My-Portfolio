import React from 'react'
import Skills from './Skills'

export default function About() {
  return (
    <section id="about" className="section about-hero">
      <div className="container">
        <div className="about-left">
          <h1 className="about-name">Vy San</h1>
          <p className="about-subtitle">A Fullstack Developer</p>
          <p className="about-desc">
            Passionate about constantly creating and learning new things, Open Source enthusiast,
            and committed to contribute to the community with a minimalist mindset. I'm looking
            to apply my skills in full-stack web development, backend systems and containerized
            deployments.
          </p>
        </div>
      </div>

      <div className="container">
        <Skills />
      </div>
    </section>
  )
}
