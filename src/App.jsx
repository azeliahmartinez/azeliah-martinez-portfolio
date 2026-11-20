import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import CommandPalette from "./components/ui/CommandPalette";
import { profile } from "./data/content";

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  const notify = (text) => {
    setToast(text);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  // Ctrl+K / Cmd+K opens the jump-to palette from anywhere.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      notify("Email copied");
    } catch {
      const el = document.getElementById("mail-text");
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(range);
      }
      notify("Email selected. Press Ctrl+C to copy");
    }
  };

  return (
    <>
      <div className="shell">
        <Sidebar onOpenPalette={() => setPaletteOpen(true)} />

        <main>
          <Hero />
          <Experience />
          <Projects filter={filter} setFilter={setFilter} />
          <Skills />
          <Contact onCopyEmail={copyEmail} />
        </main>
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onCopyEmail={copyEmail}
        onShowAllProjects={() => setFilter("all")}
      />

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
}