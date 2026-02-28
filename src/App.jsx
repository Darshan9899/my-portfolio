import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './about'
import Certificates from './Certificates'
import './App.css'
import Projects from './Projects'
import myPhoto from './assets/my photo.jpg'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from './Footer'
import Contact from "./Contact";




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


          <div className="social-icons">
            <a
              href="https://www.instagram.com/darshan_patil_9899_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919359566067"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-patil-63230230a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Darshan9899"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
      <Footer />
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}



export default App