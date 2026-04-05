import React, { useState, useEffect } from 'react'
import './project.css'
import Footer from './Footer'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <>
        <main>
          <section id="projects" className="projects-section">
            <div className="projects-container">
              <div className="projects-content">
                <h2>My Projects</h2>
                <p className="section-subtitle">Loading projects...</p>
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
          <section id="projects" className="projects-section">
            <div className="projects-container">
              <div className="projects-content">
                <h2>My Projects</h2>
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
        <section id="projects" className="projects-section">
          <div className="projects-container">
            <div className="projects-content">
              <div className="section-header">
                <h2>My Projects</h2>
                <p className="section-subtitle">Explore my latest work and innovations</p>
              </div>
              <div className="projects-grid">
                {projects.length === 0 ? (
                  <div className="empty-state">
                    <p>No projects available yet.</p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div key={project._id} className="project-card">
                      <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} className="project-image" />
                      </div>
                      <div className="project-card-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          View Project →
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

export default Projects

