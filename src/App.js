import React from "react";
import "./App.css";
import profile from './assets/profile_image.jpeg'

// ===== Data =====
const projects = [
  {
    title: "Cyberbullying Detection System",
    desc: "AI-powered NLP model using BERT to detect toxic comments in real-time.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Responsive React-based portfolio with animations and dark mode.",
    link: "#",
  },
  {
    title: "E-commerce Dashboard",
    desc: "Admin dashboard with charts, sales analytics and order management.",
    link: "#",
  },
];

function App() {
  return (
    <div>
      {/* ===== Header / Navbar ===== */}
      <header>
        <h1>Sami Ur Rehman</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero" id="about">
        {/* <img src="./" alt="Profile" /> */}
        <img src={profile} />
        <h2>Hi, I'm Sami Ur Rehman 👋</h2>
        <p>
          A passionate <strong>Frontend Developer</strong> who loves building
          modern, responsive, and user-friendly web apps.
        </p>
        <a href="#contact">
          <button>Hire Me</button>
        </a>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills">
        <h2 className="section-title">💡 Skills</h2>
        <div className="skills-grid">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5 & CSS3</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>
          <span>Tailwind CSS</span>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects">
        <h2 className="section-title">🚀 Projects</h2>
        <div className="project-grid">
          {projects.map((proj, i) => (
            <div className="card project-card" key={i}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact">
        <h2 className="section-title">📬 Contact</h2>
        <p>
          Interested in working together? Let’s connect! Reach me at:
        </p>
        <p>
          📧 <a href="mailto:maliksami8033@gmail.com">maliksami8033@gmail.com</a>
        </p>
        <p>📱 +92 3186060754</p>
        <div className="socials">
          <a href="https://github.com/Samiii754" target="_blank">GitHub</a>
        </div>
      </section>

      {/* ===== Footer ==== */}
      <footer>
        <p>© {new Date().getFullYear()} Sami Ur Rehman. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
