import Terminal from "../ui/Terminal";
import { profile } from "../../data/content";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="path">
        ~/<b>readme.md</b>
      </p>

      <h1>
        {profile.firstName}
        <span className="last">{profile.lastName}</span>
      </h1>

      <p className="intro">{profile.intro}</p>
      <p className="sub">{profile.sub}</p>

      <div className="actions">
        <a className="btn primary" href="#projects">
          See my work
        </a>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
          Resume (PDF)
        </a>
        <a className="btn" href="#contact">
          Get in touch
        </a>
      </div>

      <Terminal />
    </section>
  );
}