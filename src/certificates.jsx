import React, { useState, useEffect } from 'react'
import './certificates.css'
import Footer from './Footer'

const Certificates = () => {
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/certificates')
        if (!response.ok) {
          throw new Error('Failed to fetch certificates')
        }
        const data = await response.json()
        setCertificates(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCertificates()
  }, [])

  if (loading) {
    return (
      <>
        <main>
          <section id="certificates" className="certificates-section">
            <div className="certificates-container">
              <div className="certificates-content">
                <h2>My Certificates</h2>
                <p className="section-subtitle">Loading certificates...</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <main>
          <section id="certificates" className="certificates-section">
            <div className="certificates-container">
              <div className="certificates-content">
                <h2>My Certificates</h2>
                <p className="section-subtitle error">Error: {error}</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <main>
        <section id="certificates" className="certificates-section">
          <div className="certificates-container">
            <div className="certificates-content">
              <div className="section-header">
                <h2>My Certificates</h2>
                <p className="section-subtitle">Professional credentials and achievements</p>
              </div>
              <div className="certificates-grid">
                {certificates.length === 0 ? (
                  <div className="empty-state">
                    <p>No certificates available yet.</p>
                  </div>
                ) : (
                  certificates.map((certificate) => (
                    <div key={certificate._id} className="certificate-card">
                      <div className="certificate-image-wrapper">
                        <img src={certificate.image} alt={certificate.title} className="certificate-image" />
                      </div>
                      <div className="certificate-card-content">
                        <h3>{certificate.title}</h3>
                        <p>{certificate.description}</p>
                        <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                          View Certificate →
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Certificates
