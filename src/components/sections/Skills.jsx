import { skills } from "../../data/content";

// Renders the skills object as a syntax-colored skills.json file.
export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills">
      <p className="path">
        ~/<b>skills.json</b>
      </p>
      <h2>What I work with</h2>

      <div className="code">
        <div className="code-bar">skills.json</div>
        <pre>
          <span className="row">{"{"}</span>
          {entries.map(([key, list], i) => (
            <span className="row" key={key}>
              {"  "}
              <span className="k">"{key}"</span>: [
              {list.map((item, j) => (
                <span key={item}>
                  <span className="s">"{item}"</span>
                  {j < list.length - 1 ? ", " : ""}
                </span>
              ))}
              ]{i < entries.length - 1 ? "," : ""}
            </span>
          ))}
          <span className="row">{"}"}</span>
        </pre>
      </div>
    </section>
  );
}