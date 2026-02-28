import React from 'react'
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Footer from './Footer'

function Contact() {
  return (
    <main>
    <section className="contact">

      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        Let's connect! Feel free to reach out for collaborations or opportunities 🚀
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>darshanpatil2896@email.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9359566067</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Location</h3>
              <p>Pune,Maharashtra, India</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Your Address" required />

          <input type="text" placeholder="Subject" required />

          <textarea placeholder="Your Message..." rows="5" required />

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
    <Footer />
    </main>
  );
}

export default Contact;
