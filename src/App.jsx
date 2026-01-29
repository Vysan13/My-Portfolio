import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
