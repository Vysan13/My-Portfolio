import React from 'react'

export default function Contact() {
  const base = import.meta.env.BASE_URL || '/'
  const resumeFile = 'CV_VSN.pdf'
  const resumeUrl = `${base}${resumeFile}`

  async function handleForceDownload() {
    try {
      const res = await fetch(resumeUrl)
      if (!res.ok) throw new Error('Network response was not ok')
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = resumeFile
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      window.open(resumeUrl, '_blank', 'noopener')
    }
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-line"><strong>Email</strong>: <a href="mailto:youremail@example.com">Vysn1413@gmail.com</a></p>
          <p className="contact-line"><strong>Phone</strong>: (514) 979-0848</p>
          <p className="contact-line"><strong>Location</strong>: Montreal, QC</p>
        </div>

        <div className="contact-actions">
          <p className="contact-cta">View or download my CV:</p>
          <div className="contact-buttons">
            <a className="contact-btn primary" href={resumeUrl} target="_blank" rel="noopener noreferrer">View CV</a>
            <button className="contact-btn" type="button" onClick={handleForceDownload}>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  )
}
