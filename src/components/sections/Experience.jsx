import { experience } from "../../data/content";

export default function Experience() {
  return (
    <section id="experience">
      <p className="path">
        ~/<b>experience/</b>
      </p>
      <h2>Where I've worked and studied</h2>

      <div className="tl">
        {experience.map((item) => (
          <article className="tl-item" key={item.role}>
            <div className="when">
              <b>{item.when}</b>
              {item.note}
            </div>
            <div>
              <div className="role">{item.role}</div>
              <div className="org">{item.org}</div>
              <p className="body">{item.body}</p>
              {item.impact && (
                <ul className="impact">
                  {item.impact.map((i) => (
                    <li key={i.n}>
                      <span className="n">{i.n}</span>
                      <span>{i.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}