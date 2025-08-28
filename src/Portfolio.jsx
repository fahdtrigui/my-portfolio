import React from "react";

/* ---------- DATA ---------- */

const services = [
  {
    title: "Websites & Apps",
    desc:
      "Design and build modern showcase sites, e-commerce, or lightweight web apps.",
    bullets: [
      "WordPress / WooCommerce or Django (as needed)",
      "Modern, responsive design + basic SEO",
      "Deploy + contact forms + baseline security",
    ],
  },
  {
    title: "Dashboards & Data",
    desc:
      "KPIs, automated reporting, and data pipelines tailored to your business.",
    bullets: [
      "Power BI / SQL / ETL (SSIS)",
      "Data warehouse (star schema)",
      "Automated reports and refresh",
    ],
  },
  {
    title: "Cybersecurity (Starter)",
    desc:
      "Hardening and awareness basics for small teams and websites.",
    bullets: [
      "WordPress hardening (HTTPS/SSL, backups)",
      "Surface scans + practical recommendations",
      "Anti-phishing tips for staff",
    ],
  },
  {
    title: "Applied AI",
    desc:
      "Simple, value-oriented ML prototypes for classification or prediction.",
    bullets: [
      "XGBoost / Random Forest / LSTM",
      "Preprocessing & feature engineering",
      "Rapid PoCs focused on outcomes",
    ],
  },
];

const projects = [
  {
    title: "Sofrecom Tunisia — IIoT Cyberattack Detection",
    period: "02/2025 – 08/2025",
    location: "Sfax, Tunisia",
    tags: ["AI", "Cybersecurity", "Django", "Dashboards"],
    points: [
      "Captured & simulated normal/DoS traffic (Scapy, hping3)",
      "Preprocessing + ingestion pipeline for AutoML",
      "Supervised models (XGBoost, RF, LSTM)",
      "Web UI with real-time dashboard",
    ],
  },
  {
    title: "Spark-IT — Data Warehouse & KPIs",
    period: "06/2024 – 08/2024",
    location: "Sfax, Tunisia",
    tags: ["ETL", "SSIS", "Power BI", "Data Warehouse"],
    points: [
      "Robust ETL (SSIS) from AdventureWorks2012",
      "Data warehouse + star schema",
      "Power BI dashboards (sales/finance KPIs)",
    ],
  },
];

const skills = {
  Dev: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
  Data: ["SQL", "Power BI", "SSIS", "ETL", "DAX", "MDX"],
  Sec: ["Scapy", "hping3", "DoS / TCP SYN"],
  ML: ["XGBoost", "Random Forest", "Decision Tree", "AdaBoost", "LSTM", "BPNN"],
  Method: ["Agile/Scrum", "CRISP-DM"],
  // Language levels per your request:
  Lang: [
    "Arabic (C2)",
    "English (B–C1)",
    "French (B–C1)",
    "Spanish (A2–B1)",
  ],
};

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span
        key={t}
        className="px-3 py-1 rounded-full border bg-white text-[#14213d] border-[#e5e5e5] text-sm"
      >
        {t}
      </span>
    ))}
  </div>
);

/* ---------- UI ---------- */

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#14213d]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            Fahd Trigui
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-[#fca311]" href="#services">Services</a>
            <a className="hover:text-[#fca311]" href="#projects">Projects</a>
            <a className="hover:text-[#fca311]" href="#skills">Skills</a>
            <a className="hover:text-[#fca311]" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e5e5e5] bg-white px-4 py-2 text-sm hover:bg-[#fca311] hover:text-black transition"
          >
            Contact me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#e5e5e5] px-3 py-1 text-xs text-[#14213d]">
              Available for freelance projects
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Web Developer & Data Analyst <span className="text-[#fca311]">freelancer</span>
            </h1>
            <p className="mt-4 text-[#14213d]/80 max-w-prose">
              I help SMEs build modern websites, visualize their data with clear dashboards,
              and improve the security of their systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-xl bg-[#14213d] text-white px-5 py-3 text-sm hover:bg-black transition"
              >
                View services
              </a>
              <a
                href="#projects"
                className="rounded-xl border border-[#e5e5e5] bg-white px-5 py-3 text-sm hover:bg-[#e5e5e5] transition"
              >
                See projects
              </a>
              {/* Download CV */}
              <a
                href={`${import.meta.env.BASE_URL}CV_Fahd_Trigui.pdf`}
                download
                className="rounded-xl bg-[#fca311] text-black px-5 py-3 text-sm hover:bg-[#f7b63c] transition"
              >
                Download CV
              </a>
            </div>
            <div className="mt-6 text-sm text-[#14213d]/70">
              Based in Sfax, Tunisia · Open to remote
            </div>
          </div>
          <div className="md:justify-self-end">
            {/* Add a hero image or illustration later if you like */}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 border-t border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="mt-2 text-[#14213d]/80 max-w-2xl">
            Clear offers, concrete deliverables, and controlled timelines.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-[#14213d]/80">{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#14213d] list-disc list-inside">
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
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-[#14213d]/80 max-w-2xl">
            Selected work aligned with common business needs.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium leading-tight">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#e5e5e5] border border-[#e5e5e5]">
                    {p.period}
                  </span>
                </div>
                <div className="mt-1 text-sm text-[#14213d]/70">{p.location}</div>
                <div className="mt-4 space-y-1 text-sm text-[#14213d]">
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
      <section id="skills" className="py-14 border-t border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
              <h3 className="font-medium">Development</h3>
              <div className="mt-3"><Chips items={skills.Dev} /></div>
              <h3 className="mt-6 font-medium">Data</h3>
              <div className="mt-3"><Chips items={skills.Data} /></div>
              <h3 className="mt-6 font-medium">Cybersecurity</h3>
              <div className="mt-3"><Chips items={skills.Sec} /></div>
            </div>

            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
              <h3 className="font-medium">Machine Learning</h3>
              <div className="mt-3"><Chips items={skills.ML} /></div>
              <h3 className="mt-6 font-medium">Methods</h3>
              <div className="mt-3"><Chips items={skills.Method} /></div>
              <h3 className="mt-6 font-medium">Languages</h3>
              <div className="mt-3"><Chips items={skills.Lang} /></div>
              <h3 className="mt-6 font-medium">Certifications</h3>
              <div className="mt-3"><Chips items={["IBM SkillsBuild — AI Fundamentals"]} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Let’s talk about your project</h2>
            <p className="mt-2 text-[#14213d]/80 max-w-prose">
              Tell me what you need (website, dashboard, security, AI). I’ll reply with a simple plan,
              a timeline, and a clear budget.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <a
                href="mailto:triguifahd@gmail.com"
                className="rounded-xl bg-[#14213d] text-white px-5 py-3 text-center hover:bg-black transition"
              >
                Email
              </a>
              <a
                href="https://wa.me/21656129988"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#e5e5e5] bg-white px-5 py-3 text-center hover:bg-[#e5e5e5] transition"
              >
                WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/fahd-trigui-512799252"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#e5e5e5] bg-white px-5 py-3 text-center hover:bg-[#e5e5e5] transition"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-xs text-[#14213d]/60">
              Sfax · Tunis · Remote (EU/US friendly)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#e5e5e5] text-sm text-[#14213d]/70">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Fahd Trigui. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#fca311]" href="#home">Back to top</a>
            <a className="hover:text-[#fca311]" href="mailto:triguifahd@gmail.com">
              triguifahd@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
