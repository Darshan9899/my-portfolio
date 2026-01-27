import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './about'
import Certificates from './certificates'
import './App.css'
import Projects from './projects'
import myPhoto from './assets/my photo.jpg'

const Home = () => (
  <main>
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Hey, I'm Darshan Patil</h1>
          <p className="home-subtitle">
            <span>Full Stack Developer</span>
            <span>UI / UX Designer</span>
            <span>Web Developer</span>
          </p>

          <p className="home-description">
            Welcome to my portfolio! I specialize in building modern, responsive web applications
            using the latest technologies. Let's create something amazing together.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="home-image">
          {<img src={myPhoto} alt="Darshan Patil" className="avatar" />}
        </div>
      </div>
    </section>
  </main>
)

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App