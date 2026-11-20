import { useEffect, useMemo, useRef, useState } from "react";
import { sections, featured, automations } from "../../data/content";

const ITEMS = [
  ...sections.map((s) => ({ label: s.file, kind: "section", target: s.id })),
  ...featured.map((p) => ({ label: p.title, kind: "project", target: p.id })),
  ...automations.map((p) => ({ label: p.title, kind: "project", target: p.id })),
  { label: "Copy email", kind: "action", target: "copy" },
];

export default function CommandPalette({ open, onClose, onCopyEmail, onShowAllProjects }) {
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);

  const shown = useMemo(
    () => ITEMS.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  if (!open) return null;

  function go(item) {
    onClose();
    if (!item) return;
    if (item.target === "copy") {
      onCopyEmail();
      return;
    }
    if (item.kind === "project") onShowAllProjects();
    // Wait a tick so a reset filter has rendered the card before scrolling.
    setTimeout(
      () => document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" }),
      30
    );
  }

  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, shown.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      go(shown[sel]);
    } else if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <div className="pal-back" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pal" role="dialog" aria-modal="true" aria-label="Jump to">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSel(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Jump to a section or project…"
          autoComplete="off"
          aria-label="Search"
        />
        <ul role="listbox">
          {shown.length === 0 && <li>No matches. Try "projects" or "contact".</li>}
          {shown.map((item, i) => (
            <li
              key={item.label}
              role="option"
              aria-selected={i === sel}
              onMouseEnter={() => setSel(i)}
              onClick={() => go(item)}
            >
              {item.label}
              <small>{item.kind}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}