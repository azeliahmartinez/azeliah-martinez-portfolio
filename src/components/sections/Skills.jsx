export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript", "JSON"],
    },
    {
      title: "Programming",
      items: ["C", "Java", "Python"],
    },
    {
      title: "Database",
      items: ["SQL", "Database Design", "Database Management"],
    },
    {
      title: "UI/UX & Prototyping",
      items: ["Figma", "LucidChart", "Canva", "UI/UX Design"],
    },
    {
      title: "Testing & Documentation",
      items: ["Software Testing", "Debugging", "Documentation", "QA Testing"],
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "Agile", "Scrum", "Jupyter Notebook", "AWS Fundamentals"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <span className="section-kicker">Skills</span>
          <h2>Technical skills</h2>
          <p>
            A growing toolkit built through academic work, hands-on projects,
            UI/UX design, testing, and collaborative software development.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="glass-card skill-group-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills-wrap">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}