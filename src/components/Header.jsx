import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="inner">
        <h1>Vy San</h1>
        <p className="subtitle">Computer Science Student — Seeking Internship</p>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
