import LazyVideo from "../ui/LazyVideo";
import { featured, automations, others, filters } from "../../data/content";

const matches = (item, filter) => filter === "all" || item.kinds.includes(filter);

function Stack({ items }) {
  return (
    <div className="stack">
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );
}

export default function Projects({ filter, setFilter }) {
  const feat = featured.filter((p) => matches(p, filter));
  const autos = automations.filter((p) => matches(p, filter));
  const rest = others.filter((p) => matches(p, filter));

  return (
    <section id="projects">
      <p className="path">
        ~/<b>projects/</b>
      </p>
      <h2>Things I've built</h2>

      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {feat.length > 0 && (
        <>
          <p className="group-title">// featured</p>
          <div>
            {feat.map((p) => (
              <article className="feat" id={p.id} key={p.id}>
                <LazyVideo src={p.video} label={p.title + " demo"} />
                <div>
                  <h3>{p.title}</h3>
                  <div className="meta">{p.meta}</div>
                  <p>{p.desc}</p>
                  <p className="mine">{p.mine}</p>
                  {p.tag && <span className="tag">{p.tag}</span>}
                  <Stack items={p.stack} />
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {autos.length > 0 && (
        <>
          <p className="group-title">// automation work at Henkel</p>
          <div className="autos">
            {autos.map((p, i) => (
              <article className="auto" id={p.id} key={p.id}>
                <h3>{p.title}</h3>
                <div className="pipe" aria-hidden="true">
                  {p.pipe.map((step) => (
                    <span key={step}>{step}</span>
                  ))}
                  <i style={{ animationDelay: `${-1.2 * i}s` }} />
                </div>
                <p>{p.desc}</p>
                <p className="res">{p.result}</p>
                <Stack items={p.stack} />
              </article>
            ))}
          </div>
        </>
      )}

      {rest.length > 0 && (
        <>
          <p className="group-title">// other work</p>
          <ul className="others">
            {rest.map((p) => (
              <li key={p.title}>
                <div>
                  <b>{p.title}</b> <span>{p.desc}</span>
                </div>
                <div className="kind">{p.label}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}