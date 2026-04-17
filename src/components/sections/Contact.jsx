import { FiLinkedin, FiMail, FiPhone, FiFileText, FiDownload } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="glass-card contact-card">
          <span className="section-kicker">Contact</span>
          <h2>Let’s connect</h2>
          <p>
            I’m open to internship opportunities and roles where I can grow,
            contribute, and continue building strong technical and creative
            skills.
          </p>

          <div className="contact-info-grid">
            <a className="contact-info-item" href="mailto:azeliahm@gmail.com">
              <FiMail />
              <span>azeliahm@gmail.com</span>
            </a>

            <a className="contact-info-item" href="tel:09696207371">
              <FiPhone />
              <span>0969 620 7371</span>
            </a>

            <a
              className="contact-info-item"
              href="https://www.linkedin.com/in/azeliah-martinez-307358319"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
              <span>LinkedIn Profile</span>
            </a>

            <a
              className="contact-info-item"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FiFileText />
              <span>View Resume</span>
            </a>
          </div>

          <div className="contact-actions">
            <a className="primary-btn" href="mailto:azeliahm@gmail.com">
              Email Me
            </a>

            <a
              className="secondary-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            <a className="secondary-btn" href="/resume.pdf" download>
              Download Resume <FiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}