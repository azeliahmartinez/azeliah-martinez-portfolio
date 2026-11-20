import { profile } from "../../data/content";

export default function Contact({ onCopyEmail }) {
  return (
    <section id="contact">
      <p className="path">
        ~/<b>contact.txt</b>
      </p>
      <h2>Let's talk</h2>
      <p className="lede">
        I'm looking for full-time software engineering, automation or AI roles. The fastest way to
        reach me is email.
      </p>

      <p className="mail" id="mail-text">
        {profile.email}
      </p>

      <div className="contact-row">
        <button className="btn primary" type="button" onClick={onCopyEmail}>
          Copy email
        </button>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span className="btn static">{profile.phone}</span>
      </div>

      <footer className="foot">
        <span>Built with React and Vite. Deployed on Vercel.</span>
        <span>© {new Date().getFullYear()} Azeliah Martinez</span>
      </footer>
    </section>
  );
}