const projects = [
  {
    title: "Up2Face – Student Engagement Detection System",
    stack: "HTML • CSS • JavaScript • Node.js • Python • MediaPipe • Random Forest",
    description:
      "Developed a web-based engagement detection system that analyzes recorded learning sessions using facial expressions and upper-body gestures to generate interpretable engagement insights.",
    role: "Contributed to the development of the application workflow, interface, and analysis presentation, helping translate machine learning outputs into a user-friendly system with dashboards, visualizations, key frames, and downloadable results.",
    gradient: "tech-gradient",
    video: "/up2face-video.mp4",
    hasVideo: true,
    mediaType: "desktop",
  },
  {
    title: "Cofeed Web Platform",
    stack: "HTML • CSS • JavaScript",
    description:
      "Developed a responsive web platform for discovering and reviewing study spaces, with user profiles, search functionality, authentication, authorization, and audit trails.",
    role: "Worked on the web platform’s interface and core features while considering usability, security, accountability, and overall user experience.",
    gradient: "dark-gradient",
    video: "/cofeed-video.mp4",
    hasVideo: true,
    mediaType: "desktop",
  },
  {
    title: "APOAMF Profiling Database",
    stack: "HTML • CSS • JavaScript • Java Spring Boot",
    description:
      "Collaborated in a team to develop a web-based profiling system for managing household and resident data in Pasig Manggahan Floodway.",
    role: "Contributed to front-end development, quality assurance testing, CRUD implementation, and validation of usability and data accuracy.",
    gradient: "tech-gradient",
    video: "/apoamf-video.mp4",
    hasVideo: true,
    mediaType: "desktop",
  },
  {
    title: "Paws & Passion",
    stack: "Mobile App Testing • Bug Fixing • Documentation • Usability Review",
    description:
      "Contributed to the improvement of the Paws & Passion mobile application by testing features, identifying bugs, fixing issues, and documenting usability and functionality concerns.",
    role: "Reviewed and improved key user flows such as booking, pet selection, and form behavior, then collaborated on debugging, issue resolution, and continuous functionality improvement.",
    gradient: "pink-gradient",
    video: "/paws-and-passion-video.mp4",
    hasVideo: true,
    mediaType: "mobile",
  },
  {
    title: "Thynk Unlimited – UI/UX Prototype",
    stack: "Figma • UI/UX Design • Research-Informed Design",
    description:
      "Created a student-focused UI/UX prototype designed to reduce stress by helping users discover nearby relaxing locations and activities.",
    role: "Designed the prototype using user-centered design principles and incorporated data-driven insights such as noise, traffic, and air quality considerations.",
    gradient: "pink-gradient",
    video: "/thynk-unlimited-video.mp4",
    hasVideo: true,
    mediaType: "mobile",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <span className="section-kicker">Projects</span>
          <h2>Selected work</h2>
          <p>
            These projects reflect my experience in web development, UI/UX,
            testing, documentation, and collaborative project work.
          </p>
        </div>

        <div className="projects-grid projects-grid-two">
          {projects.map((project) => (
            <article className="glass-card project-card" key={project.title}>
              {project.hasVideo ? (
                project.mediaType === "mobile" ? (
                  <div className="project-mobile-wrap">
                    <div className="phone-frame">
                      <div className="phone-notch" />
                      <video
                        className="project-video-mobile"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ) : (
                  <video
                    className="project-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <div className={`project-image fake-preview ${project.gradient}`} />
              )}

              <div className="project-meta">
                <span className="project-stack">{project.stack}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p className="project-role">
                <strong>My role:</strong> {project.role}
              </p>

              <div className="project-actions">

                {project.hasVideo ? (
                  <a
                    className="secondary-btn"
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Video
                  </a>
                ) : (
                  <button className="secondary-btn" type="button">
                    Video Soon
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}