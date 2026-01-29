import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="top-nav">
          <a href="#home" data-label="Home">Home</a>
          <a href="#experience" data-label="Experience">Experience</a>
          <a href="#projects" data-label="Projects">Projects</a>
          <a href="#contact" data-label="Contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
