import React, { useState, useEffect } from 'react'

const items = [
  {
    date: 'August 2023 - Present',
    role: 'Videography',
    org: 'Dawson College – Athletics Department',
    url: 'https://athletics.dawsoncollege.qc.ca/',
    videos: [
      'https://www.youtube.com/watch?v=VzdT_5kJjq0',
      'https://www.youtube.com/watch?v=dfVSyLrew4w',
      'https://www.youtube.com/watch?v=WuadOXDDXYw'
    ],
    points: [
      'Optimize streaming performance with bandwidth allocation, video formats and hardware configurations.',
      'Troubleshoot connectivity and video transmission issues.',
      'Configure camera systems and networking hardware for live streaming on YouTube',
      'Maintain a stable network infrastructure for more than 200 users.'
    ]
  },
  {
    date: 'March 2024 - October 2024',
    role: 'Customer Service',
    org: 'Stade Saputo – CF Montréal',
    url: 'https://en.cfmontreal.com/',
    points: [
      'Operated digital ticketing and payment systems',
      'Multi-tasked effectively in a fast-paced work environment.'
    ]
  },
  {
    date: 'August 2022 - March 2023',
    role: 'Math/English Tutor',
    org: 'Kumon Learning Centre',
    url: 'https://www.kumon.com/ca-en/',
    points: [
      'Applied problem-solving skills to help students strengthen their logical reasoning.',
      'Designed personalized learning strategies for over 5 students.',
      'Strong attention to detail and data management.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="timeline">
        {items.map((it, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-left">
              <div className="timeline-badge">📅</div>
            </div>

            <div className="timeline-content">
              <div className="timeline-date above">{it.date}</div>
              <h3 className="timeline-role">{it.role} <span className="timeline-org">- {it.org}</span></h3>
              <ul>
                {it.points.map((p, idx) => (<li key={idx}>{p}</li>))}
              </ul>

              {it.videos && (
                <div className="video-section">
                  <h4 className="video-title">YouTube links</h4>
                  <div className="video-thumbs">
                    {it.videos.map((v, vi) => (
                      <VideoThumb key={vi} url={v} />
                    ))}
                  </div>
                </div>
              )}
              {it.url && (
                <p><a className="btn" href={it.url} target="_blank" rel="noopener noreferrer">Company site →</a></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function VideoThumb({ url }) {
  const [title, setTitle] = useState(null)
  const [thumb, setThumb] = useState(null)

  useEffect(() => {
    const m = url.match(/v=([\w-]+)/) || url.match(/youtu\.be\/([\w-]+)/)
    const id = m ? m[1] : null
    if (id) setThumb(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)

    // fetch oEmbed to get title
    if (url) {
      const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
      fetch(oembed)
        .then((r) => r.ok ? r.json() : null)
        .then((data) => {
          if (data && data.title) setTitle(data.title)
        })
        .catch(() => {})
    }
  }, [url])

  return (
    <a className="video-link" href={url} target="_blank" rel="noopener noreferrer">
      {thumb ? <img src={thumb} alt={title || 'video'} /> : <span className="video-placeholder">Watch</span>}
      <div className="thumb-overlay">{title || 'Watch on YouTube'}</div>
    </a>
  )
}
