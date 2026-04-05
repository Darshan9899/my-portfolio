import { useState } from "react";
import "./contact.css";
import Footer from './Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Check if all fields are filled
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.subject ||
        !formData.message
      ) {
        setErrorMessage("Please fill in all fields");
        setLoading(false);
        return;
      }

      // Send to backend
      const response = await fetch(
        "http://localhost:5000/api/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Message sent successfully! ✨");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage(data.error || "Failed to send message");
      }
    } catch (error) {
      setErrorMessage("Error sending message: " + error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have a question or want to work together? Drop me a message!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>For professional inquiries</p>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>Quick response on WhatsApp</p>
            </div>

            <div className="info-item">
              <div className="info-icon">💬</div>
              <h3>Message</h3>
              <p>Fill the form to send a message</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9359566067"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
<Footer />