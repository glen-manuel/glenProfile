import React, { useEffect, useState } from "react";
import {
ArrowDown,
ArrowUp,
ArrowUpRight,
BookOpen,
BriefcaseBusiness,
Code2,
ExternalLink,
Facebook,
Github,
HeartHandshake,
Instagram,
Mail,
MapPin,
Menu,
Phone,
Send,
Shield,
Sparkles,
UserRound,
Users,
X,
} from "lucide-react";


const profile = {
  name: "Glen Manuel",
  fullName: "Glen Kei Driff B. Manuel",
  title: "BSIT Student / Web Developer",
  email: "nelgmanuel@gmail.com",
  phone: "09691848439",
  location: "Lantap, Bagabag, Nueva Vizcaya",
  facebook: "https://www.facebook.com/share/1FjDPgj4U8/",
  instagram: "https://www.instagram.com/manuel.issey?stkn=MXU3NmE1dmk4bmN1Zg==",
  projectLink:
    "https://drive.google.com/drive/folders/1Bu5rn7FQeeH_3939mN1WnNjjxjSZOIE2",
};

const skills = [
  {
    name: "HTML",
    level: "Intermediate",
    description: "Building clean, structured and responsive web pages.",
  },
  {
    name: "Java",
    level: "Intermediate",
    description: "Working with programming fundamentals and object-oriented concepts.",
  },
  {
    name: "JavaScript",
    level: "Learning",
    description: "Creating interactive web experiences and dynamic interfaces.",
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    description: "Building responsive layouts and reusable interface components.",
  },
];

const education = [
  {
    period: "Elementary",
    school: "Lantap Elementary School",
    icon: BookOpen,
  },
  {
    period: "Junior High School",
    school: "Bagabag National High School",
    icon: BookOpen,
  },
  {
    period: "Senior High School",
    school: "Bagabag National High School",
    icon: BookOpen,
  },
  {
    period: "College",
    school: "Nueva Vizcaya State University",
    detail: "Bachelor of Science in Information Technology",
    icon: Code2,
  },
];

const services = [
  "Free water distribution",
  "Free vaccination for dogs and cats",
  "Random feeding programs",
  "Free snacks during examinations",
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useReveal();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="background-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">GM</span>
            <span>Glen<span className="accent">.</span></span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["home", "about", "skills", "projects", "education", "contact"].map(
              (item) => (
                <a key={item} href={`#${item}`} onClick={closeMenu}>
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="status-dot" />
                Available for learning & opportunities
              </div>

              <p className="hero-kicker">HELLO, I'M</p>
              <h1>
                Glen <span>Manuel</span>
              </h1>
              <h2>{profile.title}</h2>

              <p className="hero-description">
                A hardworking and dedicated IT student who enjoys learning,
                building websites, and developing practical digital solutions.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View My Work <ArrowDown size={18} />
                </a>
                <a className="btn btn-outline" href="#contact">
                  Contact Me <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="quick-links">
                <a href={profile.facebook} target="_blank" rel="noreferrer">
                  <Facebook size={18} />
                </a>
                <a href={profile.instagram} target="_blank" rel="noreferrer">
                  <Instagram size={18} />
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="photo-frame">
                <div className="photo-glow" />
                <img src="/profile.jpg" alt="Glen Manuel" />
                <div className="photo-tag">
                  <Code2 size={16} />
                  <span>Web Developer</span>
                </div>
              </div>

              <div className="floating-card card-one">
                <Sparkles size={17} />
                <span>Always Learning</span>
              </div>

              <div className="floating-card card-two">
                <Shield size={17} />
                <span>Future Public Servant</span>
              </div>
            </div>
          </div>

          <a className="scroll-hint" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown size={16} />
          </a>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="01 / ABOUT ME"
              title="A student with a purpose."
              text="A little about who I am, what I value, and where I want to go."
            />

            <div className="about-grid">
              <div className="about-card reveal">
                <div className="icon-box">
                  <UserRound size={24} />
                </div>
                <h3>Who I Am</h3>
                <p>
                  I am a hardworking and dedicated BSIT student with a kind
                  heart and a strong willingness to learn. I enjoy exploring
                  technology, improving my skills, and creating useful
                  websites and systems.
                </p>
                <p>
                  Beyond technology, I dream of becoming a police officer one
                  day. I want to build a future where I can use my discipline,
                  responsibility, and desire to help others in meaningful ways.
                </p>
              </div>

              <div className="about-card highlight-card reveal">
                <div className="quote-mark">“</div>
                <p className="large-quote">
                  Learn with purpose. Serve with heart. Build with consistency.
                </p>
                <div className="quote-line" />
                <p className="small-note">
                  My goal is to keep growing while staying grounded in
                  kindness, discipline, and service.
                </p>
              </div>
            </div>

            <div className="stats-grid reveal">
              <Stat number="04" label="Core Skills" />
              <Stat number="04" label="Education Levels" />
              <Stat number="01" label="Featured Project" />
              <Stat number="∞" label="Room to Grow" />
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="02 / SKILLS"
              title="Tools I am building with."
              text="These are the technologies I currently use and continue to improve."
            />

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card reveal" key={skill.name}>
                  <div className="skill-number">0{index + 1}</div>
                  <div className="skill-icon">
                    <Code2 size={21} />
                  </div>
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="03 / PROJECTS"
              title="A project I have built."
              text="A simple academic project that represents my growing experience in web development."
            />

            <div className="project-card reveal">
              <div className="project-preview">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-site">
                  <div className="mock-sidebar">
                    <div className="mock-logo">CITE</div>
                    <div className="mock-line wide" />
                    <div className="mock-line" />
                    <div className="mock-line" />
                    <div className="mock-line" />
                  </div>
                  <div className="mock-content">
                    <div className="mock-heading" />
                    <div className="mock-cards">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="mock-table">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <span className="project-label">FEATURED PROJECT</span>
                <h3>CITE Website</h3>
                <p>
                  A simple website containing basic information about the
                  College of Information Technology Education. This academic
                  project focuses on presenting information through a clean and
                  accessible HTML-based website.
                </p>

                <div className="tech-tags">
                  <span>HTML</span>
                  <span>Web Design</span>
                  <span>Academic Project</span>
                </div>

                <a
                  className="btn btn-primary"
                  href={profile.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project Files <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="04 / EDUCATION"
              title="My learning journey."
              text="The schools that have been part of my academic journey."
            />

            <div className="timeline">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="timeline-item reveal" key={item.period}>
                    <div className="timeline-marker">
                      <Icon size={18} />
                    </div>
                    <div className="timeline-content">
                      <span>{item.period}</span>
                      <h3>{item.school}</h3>
                      {item.detail && <p>{item.detail}</p>}
                    </div>
                    <div className="timeline-index">0{index + 1}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section organization-section">
          <div className="container">
            <SectionHeading
              eyebrow="05 / ORGANIZATION"
              title="Technology with service."
              text="My involvement in Alpha Phi Omega has helped me value leadership, teamwork, and community service."
            />

            <div className="org-grid">
              <div className="org-main reveal">
                <div className="org-badge">
                  <HeartHandshake size={27} />
                </div>
                <span className="project-label">ALPHA PHI OMEGA</span>
                <h3>Leadership through service</h3>
                <p>
                  I serve as <strong>Prime Chancellor / Scribe</strong> in
                  Alpha Phi Omega. Through the organization, I take part in
                  activities that support students, communities, and animals.
                </p>
                <div className="org-meta">
                  <span>
                    <Users size={16} /> Service & Leadership
                  </span>
                  <span>
                    <MapPin size={16} /> Nueva Vizcaya
                  </span>
                </div>
              </div>

              <div className="service-list reveal">
                {services.map((service, index) => (
                  <div className="service-item" key={service}>
                    <span>0{index + 1}</span>
                    <p>{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-box reveal">
              <div className="contact-copy">
                <span className="eyebrow">06 / CONTACT</span>
                <h2>Let's connect.</h2>
                <p>
                  Whether you want to talk about a project, technology, or
                  simply connect, feel free to reach out.
                </p>

                <div className="contact-list">
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={19} />
                    <span>{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone}`}>
                    <Phone size={19} />
                    <span>{profile.phone}</span>
                  </a>
                  <div>
                    <MapPin size={19} />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              <div className="contact-action">
                <div className="contact-icon">
                  <Send size={27} />
                </div>
                <h3>Have something to say?</h3>
                <p>Send me an email and I will get back to you.</p>
                <a className="btn btn-primary full" href={`mailto:${profile.email}`}>
                  Send an Email <ArrowUpRight size={17} />
                </a>
                <div className="social-row">
                  <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                    <Facebook size={19} />
                  </a>
                  <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram size={19} />
                  </a>
                  <a href={`mailto:${profile.email}`} aria-label="Email">
                    <Mail size={19} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Glen Manuel. Built with React.</p>
          <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </footer>

      {showTop && (
        <a className="back-top" href="#home" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

export default App;