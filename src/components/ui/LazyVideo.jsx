import { useEffect, useRef, useState } from "react";

// Loads and plays a muted, looping video only while it is on screen,
// so the page stays fast even with several videos.
export default function LazyVideo({ src, label }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          if (!reduce) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="media">
      {!failed && (
        <video
          ref={ref}
          src={active ? src : undefined}
          muted
          loop
          playsInline
          preload="none"
          controls={false}
          onError={() => active && setFailed(true)}
          aria-label={label}
        />
      )}
      <div className="media-bar">
        <span>{src.replace("/", "")}</span>
        <a href={src} target="_blank" rel="noreferrer" className="play" aria-label={"Open " + label + " in a new tab"}>
          ▶
        </a>
      </div>
    </div>
  );
}