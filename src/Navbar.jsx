import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming we'll create a CSS file for styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-link">My Portfolio</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#certificates" className="navbar-link">Certificates</a>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin/login" className="navbar-link navbar-admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;