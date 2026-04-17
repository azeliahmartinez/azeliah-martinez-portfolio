export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          AZELIAH
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}