import { motion } from "motion/react";
import { FiArrowRight, FiLinkedin, FiMail, FiPhone, FiFileText } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="pill">Open to internship opportunities</span>

          <p className="hero-name">AZELIAH MARTINEZ</p>

          <p className="hero-role">
            Computer Science Student | UI/UX, QA, Web Development
          </p>

          <h1 className="hero-title">
            Building
            <span> clean digital experiences</span>
          </h1>

          <p className="hero-text">
            I’m a 4th year BS Computer Science student majoring in Software
            Technology, focused on creating polished, user-friendly, and
            professional digital experiences through development, design, and
            testing.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View My Work <FiArrowRight />
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="secondary-btn">
              View Resume <FiFileText />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/azeliah-martinez-307358319"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a href="mailto:azeliahm@gmail.com" aria-label="Email">
              <FiMail />
            </a>

            <a href="tel:09696207371" aria-label="Phone">
              <FiPhone />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card glass-card"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-card-top">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-card-content">
            <div className="mini-badge">UI/UX • QA • Web Development</div>
            <h3>Career Focus</h3>
            <p>
              Interested in software development, quality assurance testing,
              front-end development, back-end development, database management,
              and related technical roles.
            </p>

           <div className="mini-badge">UI/UX • QA • Web Development</div>
            <h3>What I bring</h3>
            <p>
              A strong foundation in development, design, and testing, with a focus
              on creating digital experiences that are polished, functional, and
              user-friendly.
            </p>

            <div className="mini-stats">
              <div>
                <strong>4</strong>
                <span>Featured Projects</span>
              </div>
              <div>
                <strong>DLSU</strong>
                <span>Software Technology</span>
              </div>
              <div>
                <strong>User-Focused</strong>
                <span>Work Style</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}