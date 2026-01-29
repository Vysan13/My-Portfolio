import React from 'react'

const schools = [
  {
    dates: '2023 - 2026',
    school: "Dawson College",
    degree: "Computer Science Technology — Dean’s List (every semester)"
  },
  {
    dates: '2018 - 2023',
    school: "College Reine Marie",
    degree: "Graduate with Honors in Math and Science — Awarded Soccer MVP"
  }
]

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <h2>Education</h2>
      <div className="education-list">
        {schools.map((s, i) => (
          <div className="education-item" key={i}>
            <div className="edu-date">{s.dates}</div>
            <div className="edu-body">
              <h3 className="edu-school">{s.school}</h3>
              <p className="edu-degree">{s.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
