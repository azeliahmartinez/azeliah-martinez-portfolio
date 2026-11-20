import { useEffect, useState } from "react";
import { sections, profile } from "../../data/content";

export default function Sidebar({ onOpenPalette }) {
  const [active, setActive] = useState("home");
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform || "");

  // Highlight the section currently in the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Sections">
      <div className="who">
        azeliah<span>/</span>portfolio
      </div>

      <ul className="tree">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={"#" + s.id} className={active === s.id ? "on" : ""}>
              <span className="ic">{s.icon}</span>
              {s.file}
            </a>
          </li>
        ))}
      </ul>

      <button className="kbd" type="button" onClick={onOpenPalette}>
        <kbd>{isMac ? "⌘" : "Ctrl"}</kbd>
        <kbd>K</kbd> jump to…
      </button>

      <div className="status">
        <i />
        {profile.status[0]}
        <br />
        {profile.status[1]}
      </div>
    </nav>
  );
}