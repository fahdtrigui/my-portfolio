import React from "react";

const services = [
  {
    title: "Websites & Apps",
    desc: "Design of showcase sites, e-commerce and high-performance web apps.",
    bullets: [
      "WordPress / WooCommerce or Django depending on needs",
      "Modern design, responsive, basic SEO",
      "Deployment + contact forms + basic security",
    ],
  },
  {
    title: "Dashboards & Data",
    desc: "KPIs, automatic reporting and data pipelines.",
    bullets: [
      "Power BI / SQL / ETL (SSIS)",
      "Data warehouse (star schema)",
      "Report automation",
    ],
  },
  {
    title: "Cybersecurity (Starter)",
    desc: "Website security and basic awareness training.",
    bullets: [
      "WordPress hardening (HTTPS/SSL, backups)",
      "Surface scan + recommendations",
      "Anti-phishing advice for teams",
    ],
  },
  {
    title: "Applied AI",
    desc: "Classification/prediction models for simple use cases.",
    bullets: [
      "XGBoost / Random Forest / LSTM",
      "Preprocessing & feature engineering",
      "Value-oriented rapid PoCs",
    ],
  },
];

const projects = [
  {
    title: "Sofrecom Tunisia - IIoT Cyberattack Detection",
    period: "02/2025 - 08/2025",
    location: "Sfax, Tunisia",
    tags: ["AI", "Cybersecurity", "Django", "Dashboards"],
    points: [
      "Capture and simulation of normal/DoS traffic (Scapy, hping3)",
      "Preprocessing + ingestion pipeline for autoML",
      "Supervised models (XGBoost, RF, LSTM)",
      "Web interface with real-time dashboard",
    ],
  },
  {
    title: "Spark-IT - Data Warehouse & KPIs",
    period: "06/2024 - 08/2024",
    location: "Sfax, Tunisia",
    tags: ["ETL", "SSIS", "Power BI", "Data Warehouse"],
    points: [
      "Robust ETL (SSIS) from AdventureWorks2012",
      "Data warehouse + star schema model",
      "Power BI dashboard (sales/finance KPIs)",
    ],
  },
];

const skills = {
  Dev: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
  Data: ["SQL", "Power BI", "SSIS", "ETL", "DAX", "MDX"],
  Sec: ["Scapy", "hping3", "DoS / TCP SYN"],
  ML: ["XGBoost", "Random Forest", "Decision Tree", "ADA Boost", "LSTM", "BPNN"],
  Method: ["Agile/Scrum", "CRISP-DM"],
  Lang: ["English (B2-C1)", "French (B2-C1)", "Arabic (C2)", "Spanish (A2-B1)"],
};

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span
        key={t}
        className="px-3 py-1 rounded-full text-sm"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e5e5',
          color: '#14213d'
        }}
      >
        {t}
      </span>
    ))}
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen text-black" style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderBottom: '1px solid #e5e5e5' }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight" style={{ color: '#14213d' }}>
            Fahd Trigui
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#services" style={{ color: '#14213d' }}>Services</a>
            <a className="hover:opacity-80" href="#projects" style={{ color: '#14213d' }}>Projects</a>
            <a className="hover:opacity-80" href="#skills" style={{ color: '#14213d' }}>Skills</a>
            <a className="hover:opacity-80" href="#contact" style={{ color: '#14213d' }}>Contact</a>
          </nav>
          <a
            href="mailto:triguifahd@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: '#fca311', 
              color: '#ffffff',
              border: '1px solid #fca311'
            }}
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ backgroundColor: '#e5e5e5', color: '#14213d' }}>
              Available for freelance projects
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#14213d' }}>
              Web Developer & Data Analyst <span style={{ color: '#000000' }}>freelance</span>
            </h1>
            <p className="mt-4 max-w-prose" style={{ color: '#14213d' }}>
              I help SMEs create modern websites, visualize their data with clear dashboards,
              and improve the security of their systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="rounded-xl px-5 py-3 text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#14213d', color: '#ffffff' }}>
                View Services
              </a>
              <a href="#projects" className="rounded-xl px-5 py-3 text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ffffff', color: '#14213d', border: '1px solid #e5e5e5' }}>
                Discover Projects
              </a>
              <a
                href={`${import.meta.env.BASE_URL}CV_Fahd_Trigui.pdf`}
                download
                className="rounded-xl px-5 py-3 text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#fca311', color: '#ffffff' }}
              >
                Download CV
              </a>
            </div>
            <div className="mt-6 text-sm" style={{ color: '#000000' }}>
              Based in Sfax, Tunisia · Available remotely
            </div>
          </div>
          <div className="md:justify-self-end">
            {/* you can add an image here later */}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14" style={{ backgroundColor: '#e5e5e5', borderTop: '1px solid #e5e5e5' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold" style={{ color: '#14213d' }}>Services</h2>
          <p className="mt-2 max-w-2xl" style={{ color: '#14213d' }}>Clear offers, concrete deliverables and controlled deadlines.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e5e5'
                }}
              >
                <h3 className="font-medium" style={{ color: '#14213d' }}>{s.title}</h3>
                <p className="mt-2 text-sm" style={{ color: '#000000' }}>{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm list-disc list-inside" style={{ color: '#14213d' }}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold" style={{ color: '#14213d' }}>Projects</h2>
          <p className="mt-2 max-w-2xl" style={{ color: '#14213d' }}>
            Selection of relevant projects and work for your needs.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium leading-tight" style={{ color: '#14213d' }}>{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#e5e5e5', color: '#14213d', border: '1px solid #e5e5e5' }}>
                    {p.period}
                  </span>
                </div>
                <div className="mt-1 text-sm" style={{ color: '#000000' }}>{p.location}</div>
                <div className="mt-4 space-y-1 text-sm" style={{ color: '#14213d' }}>
                  {p.points.map((pt) => (
                    <div key={pt}>• {pt}</div>
                  ))}
                </div>
                <div className="mt-4">
                  <Chips items={p.tags} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14" style={{ backgroundColor: '#e5e5e5', borderTop: '1px solid #e5e5e5' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold" style={{ color: '#14213d' }}>Skills</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
              <h3 className="font-medium" style={{ color: '#14213d' }}>Development</h3>
              <div className="mt-3">
                <Chips items={skills.Dev} />
              </div>
              <h3 className="mt-6 font-medium" style={{ color: '#14213d' }}>Data</h3>
              <div className="mt-3">
                <Chips items={skills.Data} />
              </div>
              <h3 className="mt-6 font-medium" style={{ color: '#14213d' }}>Cybersecurity</h3>
              <div className="mt-3">
                <Chips items={skills.Sec} />
              </div>
            </div>
            <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
              <h3 className="font-medium" style={{ color: '#14213d' }}>Machine Learning</h3>
              <div className="mt-3">
                <Chips items={skills.ML} />
              </div>
              <h3 className="mt-6 font-medium" style={{ color: '#14213d' }}>Methodologies</h3>
              <div className="mt-3">
                <Chips items={skills.Method} />
              </div>
              <h3 className="mt-6 font-medium" style={{ color: '#14213d' }}>Languages</h3>
              <div className="mt-3">
                <Chips items={skills.Lang} />
              </div>
              <h3 className="mt-6 font-medium" style={{ color: '#14213d' }}>Certifications</h3>
              <div className="mt-3">
                <Chips items={["IBM SkillsBuild - AI Fundamentals"]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
            <h2 className="text-2xl font-semibold" style={{ color: '#14213d' }}>Let's Talk About Your Project</h2>
            <p className="mt-2 max-w-prose" style={{ color: '#14213d' }}>
              Tell me about your needs (website, dashboard, security, AI). I'll get back to you quickly
              with a simple plan, timeline and clear budget.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <a href="mailto:triguifahd@gmail.com" className="rounded-xl px-5 py-3 text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: '#14213d', color: '#ffffff' }}>
                Email
              </a>
              <a href="https://wa.me/21656129988" target="_blank" rel="noreferrer" className="rounded-xl px-5 py-3 text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: '#fca311', color: '#ffffff' }}>
                WhatsApp
              </a>
              <a href="https://linkedin.com/in/fahd-trigui-512799252" target="_blank" rel="noreferrer" className="rounded-xl px-5 py-3 text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ffffff', color: '#14213d', border: '1px solid #e5e5e5' }}>
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-xs" style={{ color: '#000000' }}>Sfax · Tunis · Remote (EU/US friendly)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-sm" style={{ borderTop: '1px solid #e5e5e5', color: '#000000' }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Fahd Trigui. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-80 transition-opacity" href="#home" style={{ color: '#14213d' }}>Top of page</a>
            <a className="hover:opacity-80 transition-opacity" href="mailto:triguifahd@gmail.com" style={{ color: '#14213d' }}>triguifahd@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}