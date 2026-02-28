import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Main */}
        <div className="footer-col">
          <h3>Main</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        {/* Skills */}
        <div className="footer-col">
          <h3>Skills</h3>
          <a href="#">Frontend Development</a>
          <a href="#">Backend Development</a>
          <a href="#">AutoCAD & Engineering Graphics</a>
          <a href="#">Machine Learning</a>
        </div>

        {/* Projects */}
        <div className="footer-col">
          <h3>Projects</h3>
          <a href="#">Fitness Tracker</a>
          <a href="#">Hospital Management System</a>
          <a href="#">Financial Prediction (ML)</a>
          <a href="#">Portfolio Website</a>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Connect</h3>

          <a href="https://github.com/Darshan9899" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/darshan-patil-63230230a/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://www.instagram.com/darshan_patil_9899_/" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>

          <a href="https://wa.me/919359566067" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Darshan Patil • Built with React 🚀
      </p>

    </footer>
  );
}

export default Footer;
