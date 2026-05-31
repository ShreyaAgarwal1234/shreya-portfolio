import { useState, useEffect, useRef } from "react";

const data = {
  name: "Shreya Agarwal",
  role: "AI Engineer & Developer",
  tagline: "Building intelligent systems with LLMs, RAG & Multi-Agent AI",
  available: "Open to Internships & Full-Time Roles",
  email: "shreya84048@gmail.com",
  phone: "+91-9871182633",
  linkedin: "https://linkedin.com/in/shreya-agarwal5",
  github: "https://github.com/ShreyaAgarwal1234",

  stats: [
    { num: "600+", label: "DSA Problems" },
    { num: "8.1", label: "CGPA / 10" },
    { num: "18+", label: "GitHub Repos" },
    { num: "4", label: "Certifications" },
  ],

  skills: [
    {
      category: "Programming Languages",
      icon: "⌨️",
      items: ["Python", "SQL", "Java", "Data Structures & Algorithms"],
    },
    {
      category: "AI & Generative AI",
      icon: "🤖",
      items: ["LLMs", "RAG", "LangChain", "LangGraph", "CrewAI", "Multi-Agent Systems", "Prompt Engineering"],
    },
    {
      category: "NLP & Machine Learning",
      icon: "🧠",
      items: ["BERT", "Hugging Face", "FAISS", "Semantic Search", "scikit-learn", "TextBlob"],
    },
    {
      category: "Computer Vision",
      icon: "👁️",
      items: ["YOLOv11", "OpenCV", "Roboflow", "Object Detection"],
    },
    {
      category: "Data Analysis & Visualization",
      icon: "📊",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "MS Excel"],
    },
    {
      category: "Web & APIs",
      icon: "⚡",
      items: ["FastAPI", "Streamlit", "REST APIs", "Postman"],
    },
    {
      category: "Database Management",
      icon: "🗄️",
      items: ["MySQL", "SQLite", "FAISS", "MongoDB"],
    },
    {
      category: "Tools & Cloud",
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Figma", "AWS", "Google Colab"],
    },
  ],

  projects: [
    {
      num: "01",
      badge: "Multi-Agent AI",
      title: "Job Hunt AI Agent",
      desc: "A multi-agent system using CrewAI that automatically searches and filters live job listings. Each agent has a dedicated role — fetching, analysing, and summarising — with a Streamlit dashboard for zero-code interaction.",
      stack: ["Python", "CrewAI", "LangChain", "Streamlit", "USAJOBS API"],
      link: "https://github.com/ShreyaAgarwal1234/Job-Hunt-Agent-",
      color: "#6366f1",
    },
    {
      num: "02",
      badge: "RAG System",
      title: "Smart AI Research Assistant",
      desc: "Upload documents, get AI summaries, Q&A, and comprehension quizzes — all in one place. FAISS handles semantic search for precise retrieval, backed by a FastAPI with three dedicated endpoints.",
      stack: ["Python", "FastAPI", "FAISS", "Hugging Face", "LangChain", "Streamlit"],
      link: "https://github.com/ShreyaAgarwal1234/smart-ai-research-assistant",
      color: "#06b6d4",
    },
    {
      num: "03",
      badge: "Deep Learning",
      title: "HCViT Brain Tumor Classification",
      desc: "Hybrid CNN-Vision Transformer model for Brain Tumor MRI Classification. Combines the local feature extraction of CNNs with the global attention of Vision Transformers for high-accuracy medical imaging.",
      stack: ["Python", "PyTorch", "CNN", "Vision Transformer", "OpenCV"],
      link: "https://github.com/ShreyaAgarwal1234/HCViT-Brain-Tumor-Classification",
      color: "#f43f5e",
    },
    {
      num: "04",
      badge: "Computer Vision",
      title: "Human Settlement Detection",
      desc: "Object detection model trained on satellite imagery to identify human settlements. Benchmarked multiple architectures with YOLOv11 delivering best results. Useful for urban planning, disaster response, and environmental monitoring.",
      stack: ["Python", "YOLOv11", "OpenCV", "Roboflow", "Flutter"],
      link: "https://github.com/ShreyaAgarwal1234",
      color: "#10b981",
    },
    {
      num: "05",
      badge: "NLP",
      title: "BERT Sentiment Analysis",
      desc: "Fine-tuned BERT model for sentiment classification on real-world text data. Leverages transformer-based contextual embeddings to achieve high accuracy across multiple sentiment categories.",
      stack: ["Python", "BERT", "Hugging Face", "Jupyter Notebook", "scikit-learn"],
      link: "https://github.com/ShreyaAgarwal1234/Bert_Sentiment_Analysis",
      color: "#f59e0b",
    },
    {
      num: "06",
      badge: "Computer Vision",
      title: "Multi-Object Tracking (Sports)",
      desc: "Real-time multi-object tracking system for sports analytics. Tracks players and ball across video frames, enabling automated performance analysis and insights.",
      stack: ["Python", "OpenCV", "Object Tracking", "Computer Vision"],
      link: "https://github.com/ShreyaAgarwal1234/multi-object-tracking-sports",
      color: "#8b5cf6",
    },
  ],

  experience: [
    {
      role: "Technology Intern",
      company: "The Fin Lit Project",
      type: "Remote",
      period: "Jun – Sept 2025",
      points: [
        "Led backend migration from WordPress to Node.js and MongoDB, significantly improving website performance.",
        "Cleaned and organised data across multiple financial datasets ensuring error-free pipeline operation.",
        "Reviewed and validated ML training data from diverse sources to maintain model quality.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech — Computer Science (AI Specialization)",
      inst: "KIET Group of Institutions, AKTU, Ghaziabad",
      period: "2022 – 2026",
      grade: "8.1 / 10 CGPA",
    },
    {
      degree: "Class XII & X — CBSE",
      inst: "Ch. Chhabli Dass Public School, Ghaziabad",
      period: "2019 – 2022",
      grade: "",
    },
  ],

  achievements: [
    {
      icon: "🏆",
      title: "HackFinance Hackathon",
      desc: "Secured Top 10 ranking among all participating teams",
    },
    {
      icon: "🥉",
      title: "Python to Tableau Boot Camp",
      desc: "Ranked Top 3 among all participants — KIET Group of Institutions",
    },
  ],

  certifications: [
    { icon: "🏛️", title: "Generative AI Workshop", org: "KIET Group of Institutions", date: "Jun 2025" },
    { icon: "🎓", title: "Machine Learning", org: "LinkedIn Learning", date: "Nov 2024" },
    { icon: "☁️", title: "AWS Cloud Foundations", org: "AWS Academy", date: "Sept 2024" },
    { icon: "📊", title: "AI and Data Skills", org: "YBI Foundation", date: "Oct 2023" },
  ],
};

const NAV_ITEMS = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

function useScrollSpy() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    const handler = () => {
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(item);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function Tag({ children, color = "#6366f1" }) {
  return (
    <span style={{
      fontSize: "0.68rem", fontFamily: "monospace",
      padding: "0.2rem 0.6rem", borderRadius: 4,
      background: color + "18", color: color,
      border: `1px solid ${color}33`,
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function Badge({ children, color = "#06b6d4" }) {
  return (
    <span style={{
      fontSize: "0.7rem", fontFamily: "monospace",
      padding: "0.25rem 0.75rem", borderRadius: 999,
      background: color + "15", color,
      border: `1px solid ${color}30`,
    }}>{children}</span>
  );
}

function Card({ children, style = {}, hover = true }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(18,18,30,0.85)",
        border: `1px solid ${hov ? "rgba(99,102,241,0.45)" : "rgba(99,102,241,0.15)"}`,
        borderRadius: 16,
        transition: "all 0.25s ease",
        transform: hov ? "translateY(-3px)" : "none",
        ...style,
      }}
    >{children}</div>
  );
}

export default function Portfolio() {
  const active = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#090910", color: "#e8e6ff", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* BACKGROUND DOTS */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(99,102,241,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2.5rem",
        height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(9,9,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.12)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", background: "linear-gradient(135deg, #a5b4fc, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SA
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => scrollTo(item)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em",
                color: active === item ? "#a5b4fc" : "#7c7aaa",
                transition: "color 0.2s",
                fontFamily: "inherit",
              }}>{item}</button>
          ))}
          <a href={`mailto:${data.email}`} style={{
            padding: "0.45rem 1.2rem", background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "white", borderRadius: 8, fontSize: "0.8rem", fontWeight: 600,
            textDecoration: "none", transition: "opacity 0.2s",
          }}>Hire Me</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7rem 2.5rem 5rem", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        
        {/* glow */}
        <div style={{ position: "absolute", top: "10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* AVAILABLE BADGE */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem", padding: "0.4rem 1rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 999, width: "fit-content" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
          <span style={{ fontSize: "0.78rem", color: "#10b981", fontWeight: 600, fontFamily: "monospace" }}>{data.available}</span>
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          <span style={{ background: "linear-gradient(135deg, #fff 20%, #a5b4fc 60%, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Shreya<br />Agarwal
          </span>
        </h1>

        <p style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", color: "#7c7aaa", fontWeight: 300, margin: "1rem 0 0.75rem", lineHeight: 1.6 }}>
          <span style={{ color: "#a5b4fc", fontWeight: 500 }}>AI Engineer</span> · Python Developer · Data Analyst<br />
          B.Tech CS (AI) · KIET Ghaziabad · 2026
        </p>

        {/* CONTACT INFO LINE */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", margin: "0.5rem 0 0.25rem" }}>
          <a href={`tel:${data.phone}`} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#9896c8", textDecoration: "none", fontFamily: "monospace" }}>
            <span style={{ fontSize: "0.95rem" }}>📞</span> {data.phone}
          </a>
          <span style={{ color: "rgba(99,102,241,0.3)", fontSize: "0.8rem" }}>·</span>
          <a href={`mailto:${data.email}`} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#9896c8", textDecoration: "none", fontFamily: "monospace" }}>
            <span style={{ fontSize: "0.95rem" }}>✉️</span> {data.email}
          </a>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", margin: "1.25rem 0 2rem" }}>
          {["LangChain", "CrewAI", "RAG", "LangGraph", "BERT", "YOLOv11", "FastAPI", "Tableau"].map(t => (
            <Tag key={t} color="#6366f1">{t}</Tag>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="#projects" onClick={e => { e.preventDefault(); scrollTo("Projects"); }} style={{ padding: "0.85rem 2rem", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>View Projects</a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ padding: "0.85rem 2rem", background: "transparent", color: "#e8e6ff", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 10, fontWeight: 500, textDecoration: "none", fontSize: "0.9rem" }}>GitHub Profile →</a>
          <a href={`mailto:${data.email}`} style={{ padding: "0.85rem 2rem", background: "transparent", color: "#e8e6ff", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 10, fontWeight: 500, textDecoration: "none", fontSize: "0.9rem" }}>Contact Me</a>
        </div>

        {/* STATS */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
          {data.stats.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
              <div style={{ fontSize: "0.75rem", color: "#7c7aaa", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "5rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Technical Skills</SectionLabel>
        <h2 style={sectionTitle}>What I work with</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {data.skills.map(s => (
            <Card key={s.category} style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#a5b4fc", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{s.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {s.items.map(item => (
                  <span key={item} style={{ fontSize: "0.72rem", fontFamily: "monospace", padding: "0.2rem 0.55rem", borderRadius: 4, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#9896c8" }}>{item}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "5rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Projects</SectionLabel>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{ ...sectionTitle, margin: 0 }}>Things I've built</h2>
          <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: "#6366f1", textDecoration: "none", border: "1px solid rgba(99,102,241,0.3)", padding: "0.5rem 1.2rem", borderRadius: 8, fontWeight: 600 }}>
            All Repos on GitHub →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {data.projects.map(p => (
            <Card key={p.num} style={{ padding: "2rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "'Syne', sans-serif", fontSize: "3.5rem", fontWeight: 800, color: p.color + "14", lineHeight: 1 }}>{p.num}</div>
              <div style={{ marginBottom: "1rem" }}>
                <Badge color={p.color}>{p.badge}</Badge>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#e8e6ff", letterSpacing: "-0.01em" }}>{p.title}</h3>
              <p style={{ fontSize: "0.845rem", color: "#7c7aaa", lineHeight: 1.75, marginBottom: "1.25rem", flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                {p.stack.map(t => <Tag key={t} color={p.color}>{t}</Tag>)}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: p.color, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                View on GitHub →
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section id="experience" style={{ padding: "5rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Experience</SectionLabel>
        <h2 style={sectionTitle}>Where I've worked</h2>
        {data.experience.map(e => (
          <Card key={e.role} style={{ padding: "2rem", marginBottom: "1.5rem", borderLeft: "3px solid #6366f1", borderRadius: "0 16px 16px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#e8e6ff" }}>{e.role}</div>
                <div style={{ fontSize: "0.85rem", color: "#6366f1", fontWeight: 500 }}>{e.company} · {e.type}</div>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#7c7aaa", background: "rgba(99,102,241,0.1)", padding: "0.3rem 0.8rem", borderRadius: 6, height: "fit-content" }}>{e.period}</div>
            </div>
            <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
              {e.points.map((pt, i) => <li key={i} style={{ fontSize: "0.875rem", color: "#9896c8", lineHeight: 1.75, marginBottom: "0.35rem" }}>{pt}</li>)}
            </ul>
          </Card>
        ))}

        <div style={{ marginTop: "4rem" }}>
          <SectionLabel>Education</SectionLabel>
          <h2 style={sectionTitle}>Academic Background</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {data.education.map(e => (
              <Card key={e.degree} style={{ padding: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#e8e6ff", marginBottom: "0.25rem" }}>{e.degree}</div>
                  <div style={{ fontSize: "0.85rem", color: "#7c7aaa" }}>{e.inst} · {e.period}</div>
                </div>
                {e.grade && <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, background: "linear-gradient(135deg, #06b6d4, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{e.grade}</div>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS + CERTS */}
      <section id="achievements" style={{ padding: "5rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Achievements</SectionLabel>
        <h2 style={sectionTitle}>Hackathons & Awards</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {data.achievements.map(a => (
            <Card key={a.title} style={{ padding: "1.75rem", borderTop: "2px solid #f59e0b" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{a.icon}</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#e8e6ff", marginBottom: "0.4rem" }}>{a.title}</div>
              <div style={{ fontSize: "0.85rem", color: "#9896c8", lineHeight: 1.6 }}>{a.desc}</div>
            </Card>
          ))}
        </div>

        <SectionLabel>Certifications</SectionLabel>
        <h2 style={sectionTitle}>Credentials</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {data.certifications.map(c => (
            <Card key={c.title} style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{c.icon}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#e8e6ff", marginBottom: "0.2rem" }}>{c.title}</div>
              <div style={{ fontSize: "0.78rem", color: "#7c7aaa" }}>{c.org}</div>
              <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#6366f1", marginTop: "0.4rem" }}>{c.date}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <Card style={{ padding: "3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.1), transparent)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem", padding: "0.4rem 1rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 999 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
              <span style={{ fontSize: "0.78rem", color: "#10b981", fontWeight: 600, fontFamily: "monospace" }}>{data.available}</span>
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.75rem", color: "#e8e6ff" }}>Let's build something together</h2>
            <p style={{ color: "#7c7aaa", marginBottom: "2.5rem", fontSize: "0.95rem" }}>Open to AI/ML internships, full-time roles, and exciting collaborations.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { label: "📧 Email", href: `mailto:${data.email}` },
                { label: "📱 Phone", href: `tel:${data.phone}` },
                { label: "💼 LinkedIn", href: data.linkedin },
                { label: "🐙 GitHub", href: data.github },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 10, color: "#e8e6ff", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, background: "rgba(255,255,255,0.03)", transition: "all 0.2s" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <footer style={{ textAlign: "center", padding: "2rem", borderTop: "1px solid rgba(99,102,241,0.12)", fontFamily: "monospace", fontSize: "0.75rem", color: "#7c7aaa" }}>
        &lt;/&gt; Shreya Agarwal · 2026 · Built with React
      </footer>

    </div>
  );
}

const SectionLabel = ({ children }) => (
  <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#6366f1", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: 6 }}>
    <span style={{ color: "#8b5cf6" }}>//</span> {children}
  </div>
);

const sectionTitle = {
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  marginBottom: "2.5rem",
  color: "#e8e6ff",
};
