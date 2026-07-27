import { useEffect } from 'react'
import profileImage from './images/SalmanImage.jpeg'
import './App.css'

const skills = [
  { name: 'HTML', icon: '🌐', text: 'Semantic and responsive structure for modern web pages.' },
  { name: 'CSS', icon: '🎨', text: 'Clean styling, layouts, and polished UI design.' },
  { name: 'JavaScript', icon: '⚡', text: 'Dynamic logic and interactive front-end behavior.' },
  { name: 'Python', icon: '🐍', text: 'Powerful scripting and problem-solving capabilities.' },
  { name: 'DSA', icon: '🧠', text: 'Strong foundation in algorithms and data structures.' },
  { name: 'Java', icon: '☕', text: 'Object-oriented programming with solid backend concepts.' },
  { name: 'React JS', icon: '⚛️', text: 'Modern component-based user interfaces.' },
  { name: 'Express JS', icon: '🚀', text: 'Fast backend development for APIs and services.' },
]

function App() {
  useEffect(() => {
    document.body.classList.remove('dark')
  }, [])

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-content">
          <img src={profileImage} alt="Kutubuddin Khan" className="profile-image" />
          <div>

            <h1>Kutubuddin Khan</h1>
            <h2>Full Stack Developer & Problem Solver</h2>
            <p className="intro">
              I am passionate about web development, programming, and problem solving. I enjoy building
              modern, responsive, and scalable applications that deliver real value.
            </p>
            <div className="hero-actions">
              <a href="#skills" className="btn primary">Explore Skills</a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="section-heading">
          <p className="section-label">About Me</p>
          <h3>Building thoughtful digital experiences with clean code and strong fundamentals.</h3>
        </div>
        <div className="about-grid">
          <p>
            I am a passionate developer with a strong foundation in web technologies, problem solving,
            and modern application development. My work focuses on creating responsive, user-friendly,
            and high-performance solutions that are both functional and visually polished.
          </p>
          <p>
            I enjoy turning ideas into practical products using HTML, CSS, JavaScript, Python, DSA,
            Java, React JS, and Express JS. I’m driven by continuous learning, attention to detail,
            and the desire to build impactful experiences that make a difference.
          </p>
        </div>
      </section>

      <section className="objective-section">
        <div className="section-heading">
          <p className="section-label">Career Objective</p>
          <h3>Seeking opportunities to grow as a developer while contributing to meaningful, scalable products.</h3>
        </div>
        <p>
          My goal is to continue developing my technical expertise, contribute to innovative projects,
          and work alongside teams that value creativity, problem-solving, and quality. I aim to build
          solutions that are not only efficient and reliable, but also create lasting value for users.
        </p>
      </section>

      <section id="skills" className="skills-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                {skill.icon}
              </div>
              <h4>{skill.name}</h4>
              <p>{skill.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h3>Let’s Connect</h3>
        <p>I’m open to collaboration, freelance work, internships, and exciting opportunities.</p>
        <div className="contact-grid">
          <a href="mailto:kutubuddinkhan07860787@gmail.com" className="contact-card">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>kutubuddinkhan07860787@gmail.com</p>
            </div>
          </a>
          <a href="tel:+917081173829" className="contact-card">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 70811 73829</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kutubuddin-khan-b12084364/" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-icon">💼</span>
            <div>
              <strong>LinkedIn</strong>
              <p>View profile</p>
            </div>
          </a>
          <a href="https://github.com/Kutubkhan0705" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-icon">🐙</span>
            <div>
              <strong>GitHub</strong>
              <p>Open projects</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
