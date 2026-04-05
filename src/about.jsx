import React from 'react'
import Footer from './Footer'

const About = () => {

  return (
    <main>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              Aspiring Computer Science Engineer with strong problem-solving and technical skills in software and web
              development. Looking for an entry-level role to contribute to real-world projects while continuously learning and
              enhancing my professional abilities
            </p>

            <div className="about-skills">
              <h2>Skills & Technologies</h2>
              <div className="skills-grid">
                <span className="skill-tag">⚛️ React</span>
                <span className="skill-tag">🟨 JavaScript</span>
                <span className="skill-tag">🟢 Node.js</span>
                <span className="skill-tag">🌐 HTML/CSS</span>
                <span className="skill-tag">☕ JAVA</span>
                <span className="skill-tag">📚 Git</span>
                <span className="skill-tag">🐍 Python</span>
                <span className="skill-tag">⚡ C++</span>
                <span className="skill-tag">🍃 MongoDB</span>
                <span className="skill-tag">🚀 Express.js</span>
                <span className="skill-tag">🎯 SpringBoot</span>
                <span className="skill-tag">🗄️ MySQL</span>

              </div>
            </div>
            <div className="about-education">
              <h2>Education</h2>
              <div className="education-boxes">
                <div className="education-box">
                  <h3>Degree</h3>
                  <p>Bachelor of Computer Science engineering, Shivaji University kolhapur, 2022-2026, with 7.3 Pointer</p>
                </div>
                <div className="education-box">
                  <h3>Higher Secondary Certificate (12th)</h3>
                  <p>Maharashtra State Board, 2022, with 72.83%</p>

                </div>
                <div className="education-box">
                  <h3>Secondary School Certificate (10th)</h3>
                  <p>Maharashtra State Board, 2020, with 90%</p>

                </div>
              </div>
            </div>
            <div className='certificates'>
            </div>
            <div className="about-hobbies">
              <h2>Hobbies & Interests</h2>

              <div className="hobby-cards">
                <div className="hobby-card">
                  <span>💻</span>
                  <h3>Coding & Problem Solving</h3>
                  <p>
                    Enjoy solving logical problems and building real-world applications
                    to sharpen my programming skills.
                  </p>
                </div>

                <div className="hobby-card">
                  <span>📐</span>
                  <h3>Design & Visualization</h3>
                  <p>
                    Passionate about AutoCAD and engineering graphics with a focus
                    on precision and creativity.
                  </p>
                </div>

                <div className="hobby-card">
                  <span>🏋️</span>
                  <h3>Fitness & Discipline</h3>
                  <p>
                    Interested in maintaining a healthy lifestyle through fitness
                    tracking and daily workouts.
                  </p>
                </div>

                <div className="hobby-card">
                  <span>📚</span>
                  <h3>Continuous Learning</h3>
                  <p>
                    Regularly explore new tools, technologies, and industry trends
                    to stay up to date.
                  </p>
                </div>
              </div>
            </div>

            <div className="leadership-involvement">
              <h2>Leadership & Involvement</h2>

              <div className="leadership-cards">
                <div className="leadership-card">
                  <span>👥</span>
                  <h3>Team Collaboration</h3>
                  <p>
                    Worked effectively in teams, sharing responsibilities and ensuring
                    timely completion of projects.
                  </p>
                </div>

                <div className="leadership-card">
                  <span>👨‍💻</span>
                  <h3>Technical Initiative</h3>
                  <p>
                    Took initiative in debugging, understanding requirements,
                    and guiding peers during development.
                  </p>
                </div>

                <div className="leadership-card">
                  <span>🎯</span>
                  <h3>Academic Participation</h3>
                  <p>
                    Actively participated in seminars, workshops, and technical events
                    for skill enhancement.
                  </p>
                </div>

                <div className="leadership-card">
                  <span>🤵</span>
                  <h3>Public Relations Officer – CESA Committee</h3>
                  <p>
                    Handled internal and external communication for the CESA committee, ensuring smooth coordination between students, faculty, and event participants.
                  </p>
                </div>

                <div className="leadership-card">
                  <span>👨‍⚖️</span>
                  <h3>Active NSS Volunteer</h3>
                  <p>
                    Participated in social service activities such as cleanliness drives, awareness campaigns, and community development programs.
                  </p>
                </div>

                <div className="leadership-card">
                  <span>🗣</span>
                  <h3>Communication Skills</h3>
                  <p>
                    Improved communication and leadership through presentations
                    and group activities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default About