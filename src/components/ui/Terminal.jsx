import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/content";

// A line is a list of pieces: plain text, or [className, text] for color.
// Classes: p = pink prompt, k = command/key, s = green, m = muted, f = faint
const PROMPT = "visitor@azeliah:~$";

const COMMANDS = {
  help: () => [
    [["m", "available commands"]],
    ["  ", ["k", "about"], "        who I am"],
    ["  ", ["k", "experience"], "   where I've worked"],
    ["  ", ["k", "projects"], "     what I've built"],
    ["  ", ["k", "skills"], "       languages and tools"],
    ["  ", ["k", "contact"], "      how to reach me"],
    ["  ", ["k", "resume"], "       open my resume"],
    ["  ", ["k", "clear"], "        clear the screen"],
    [["f", "tip: Tab completes, ↑ and ↓ go through history"]],
  ],
  about: () => [
    ["Azeliah Martinez. Computer Science, Software Technology at DLSU."],
    ["I like taking a slow, repetitive process and making it run on its own."],
    ["Most recently: six months on Henkel's automation team, building Python"],
    ["automations and a Power Apps app now in global UAT."],
  ],
  whoami: () => [["visitor. but you can be a recruiter if you run ", ["k", "contact"], " :)"]],
  experience: () => [
    [["s", "Henkel Asia Pacific Services Centre"], "  ", ["f", "2026.05 – 2026.11"]],
    ["  Automation Intern, Source-to-Pay"],
    ["  ~70% less time per invoice, 0.09 FTE saved, app in UAT across 5 regions"],
    [["s", "De La Salle University"], "  ", ["f", "2022 – 2026"]],
    ["  BS Computer Science, Software Technology"],
    [["f", "→ scrolling to experience/"]],
  ],
  projects: () => [
    [["k", "up2face"], "         thesis, computer vision engagement detection"],
    [["k", "down-payments"], "   Power Apps approval app, in global UAT"],
    [["k", "outlook-to-pdf"], "  touchless email to PDF"],
    [["k", "invoice-sorter"], "  10 → 3 minutes per invoice"],
    [["k", "cofeed"], "          study space reviews, auth and audit trails"],
    [["f", "→ scrolling to projects/"]],
  ],
  ls: () => [["readme.md  experience/  projects/  skills.json  contact.txt"]],
  skills: () => [
    [["k", "languages"], "   Python, Java, C, JavaScript, SQL"],
    [["k", "automation"], "  Python scripting, Power Apps, SharePoint"],
    [["k", "web"], "         HTML, CSS, React, Node.js"],
    [["k", "ml"], "          MediaPipe, Random Forest, computer vision"],
    [["f", "→ scrolling to skills.json"]],
  ],
  contact: () => [
    ["email     ", ["s", profile.email]],
    ["phone     " + profile.phone],
    ["linkedin  " + profile.linkedinLabel],
    [["f", "→ scrolling to contact.txt"]],
  ],
  resume: () => {
    window.open(profile.resume, "_blank", "noopener");
    return [["opening resume.pdf…"]];
  },
  "sudo hire-me": () => [[["s", "permission granted."], " send the offer to " + profile.email]],
  sudo: () => [["usage: sudo hire-me"]],
};

const JUMP = { experience: "experience", projects: "projects", skills: "skills", contact: "contact" };
const NAMES = [...Object.keys(COMMANDS), "clear"];
const CHIPS = ["help", "about", "experience", "projects", "skills", "contact"];

const BOOT = [
  [["f", "last login: today on ttys001"]],
  ["hi, I'm ", ["s", "Azeliah"], ". I build automations and apps."],
  ["type ", ["k", "help"], " to look around, or tap a command below."],
];

function Line({ parts, className }) {
  return (
    <div className={"ln" + (className ? " " + className : "")}>
      {parts.map((p, i) =>
        Array.isArray(p) ? (
          <span key={i} className={p[0]}>
            {p[1]}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </div>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [value, setValue] = useState("");
  const history = useRef([]);
  const histIndex = useRef(0);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const nextId = useRef(0);

  const print = (newLines, className) =>
    setLines((prev) => [
      ...prev,
      ...newLines.map((parts) => ({ id: nextId.current++, parts, className })),
    ]);

  // Boot sequence: the one animated moment on load.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      print(BOOT);
      return;
    }
    const timers = BOOT.map((line, i) => setTimeout(() => print([line]), 250 + i * 420));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Keep the newest line in view.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    print([[["p", PROMPT], " " + raw]]);
    if (!cmd) return;
    history.current.push(raw);
    histIndex.current = history.current.length;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const fn = COMMANDS[cmd];
    if (!fn) {
      print([["command not found: " + cmd + ". try ", ["k", "help"]]], "m");
      return;
    }
    print(fn());
    if (JUMP[cmd]) {
      setTimeout(
        () => document.getElementById(JUMP[cmd])?.scrollIntoView({ behavior: "smooth" }),
        700
      );
    }
  }

  function onKeyDown(e) {
    const h = history.current;
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIndex.current > 0) {
        histIndex.current -= 1;
        setValue(h[histIndex.current]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex.current < h.length - 1) {
        histIndex.current += 1;
        setValue(h[histIndex.current]);
      } else {
        histIndex.current = h.length;
        setValue("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = NAMES.filter((n) => n.startsWith(value.toLowerCase()));
      if (matches.length === 1) setValue(matches[0]);
      else if (matches.length > 1) print([[matches.join("  ")]], "m");
    }
  }

  const focusInput = () => inputRef.current?.focus({ preventScroll: true });

  return (
    <div className="term" aria-label="Interactive terminal">
      <div className="term-bar">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <span>visitor@azeliah: ~</span>
        <span>zsh</span>
      </div>

      <div className="term-body" ref={bodyRef} onClick={focusInput}>
        {lines.map((l) => (
          <Line key={l.id} parts={l.parts} className={l.className} />
        ))}
        <label className="term-input" htmlFor="term-in">
          <span className="p">{PROMPT}</span>
          <input
            id="term-in"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck="false"
            aria-label="Type a command"
          />
        </label>
      </div>

      <div className="chips">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              run(c);
              focusInput();
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}