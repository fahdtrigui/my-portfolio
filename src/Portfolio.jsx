import React from "react";

const services = [
  {
    title: "Sites Web & Apps",
    desc: "Conception de sites vitrines, e-commerce et apps web performantes.",
    bullets: [
      "WordPress / WooCommerce ou Django selon le besoin",
      "Design moderne, responsive, SEO de base",
      "Mise en ligne + formulaires de contact + securite de base",
    ],
  },
  {
    title: "Tableaux de bord & Data",
    desc: "KPIs, reporting automatique et data pipelines.",
    bullets: [
      "Power BI / SQL / ETL (SSIS)",
      "Datawarehouse (modele en etoile)",
      "Automatisation des rapports",
    ],
  },
  {
    title: "Cybersecurite (Starter)",
    desc: "Securisation de site et sensibilisation basique.",
    bullets: [
      "Durcissement WordPress (HTTPS/SSL, sauvegardes)",
      "Scan de surface + recommandations",
      "Conseils anti-phishing pour l'equipe",
    ],
  },
  {
    title: "IA appliquee",
    desc: "Modeles de classification/prediction pour cas simples.",
    bullets: [
      "XGBoost / Random Forest / LSTM",
      "Pretraitement & feature engineering",
      "PoC rapides orientes valeur",
    ],
  },
];

const projects = [
  {
    title: "Sofrecom Tunisie - Detection de cyberattaques IIoT",
    period: "02/2025 - 08/2025",
    location: "Sfax, Tunisie",
    tags: ["IA", "Cybersecurite", "Django", "Dashboards"],
    points: [
      "Capture et simulation de trafic normal/DoS (Scapy, hping3)",
      "Pretraitement + pipeline d'ingerstion pour l'autoML",
      "Modeles supervises (XGBoost, RF, LSTM)",
      "Interface web avec tableau de bord temps reel",
    ],
  },
  {
    title: "Spark-IT - Datawarehouse & KPIs",
    period: "06/2024 - 08/2024",
    location: "Sfax, Tunisie",
    tags: ["ETL", "SSIS", "Power BI", "Data Warehouse"],
    points: [
      "ETL robustes (SSIS) depuis AdventureWorks2012",
      "Entrepot de donnees + modele en etoile",
      "Tableau de bord Power BI (KPIs ventes/finance)",
    ],
  },
];

const skills = {
  Dev: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
  Data: ["SQL", "Power BI", "SSIS", "ETL", "DAX", "MDX"],
  Sec: ["Scapy", "hping3", "DoS / TCP SYN"],
  ML: ["XGBoost", "Random Forest", "Decision Tree", "ADA Boost", "LSTM", "BPNN"],
  Method: ["Agile/Scrum", "CRISP-DM"],
  Lang: ["Francais (C1-C2)", "Anglais (C1-C2)"],
};

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span
        key={t}
        className="px-3 py-1 rounded-full border border-zinc-300 text-sm bg-white/60 backdrop-blur"
      >
        {t}
      </span>
    ))}
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            Fahd Trigui
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#services">Services</a>
            <a className="hover:opacity-80" href="#projects">Projets</a>
            <a className="hover:opacity-80" href="#skills">Competences</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
          <a
            href="mailto:triguifahd@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm hover:shadow"
          >
            Me contacter
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-3 py-1 text-xs text-green-700">
              Disponible pour missions freelance
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Developpeur Web & Data Analyst <span className="text-zinc-500">freelance</span>
            </h1>
            <p className="mt-4 text-zinc-600 max-w-prose">
              J'aide les PME a creer des sites modernes, a visualiser leurs donnees avec des tableaux de bord clairs,
              et a ameliorer la securite de leurs systemes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="rounded-xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">
                Voir les services
              </a>
              <a href="#projects" className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm hover:shadow">
                Decouvrir les projets
              </a>
              {/* Download CV button */}
              <a
                href="/CV_Fahd_Trigui.pdf"
                download
                className="rounded-xl bg-green-600 text-white px-5 py-3 text-sm hover:bg-green-700"
              >
                Download CV
              </a>
            </div>
            <div className="mt-6 text-sm text-zinc-500">
              Base a Sfax, Tunisie · Disponible a distance
            </div>
          </div>
          <div className="md:justify-self-end">
            {/* you can add an image here later */}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 border-t border-zinc-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="mt-2 text-zinc-600 max-w-2xl">Des offres claires, livrables concrets et delais maitrises.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.05)]"
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-zinc-700 list-disc list-inside">
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
          <h2 className="text-2xl font-semibold">Projets</h2>
          <p className="mt-2 text-zinc-600 max-w-2xl">
            Selection de missions et travaux pertinents pour vos besoins.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium leading-tight">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 border border-zinc-200">
                    {p.period}
                  </span>
                </div>
                <div className="mt-1 text-sm text-zinc-500">{p.location}</div>
                <div className="mt-4 space-y-1 text-sm text-zinc-700">
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
      <section id="skills" className="py-14 border-t border-zinc-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">Competences</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-medium">Developpement</h3>
              <div className="mt-3">
                <Chips items={skills.Dev} />
              </div>
              <h3 className="mt-6 font-medium">Data</h3>
              <div className="mt-3">
                <Chips items={skills.Data} />
              </div>
              <h3 className="mt-6 font-medium">Cybersecurite</h3>
              <div className="mt-3">
                <Chips items={skills.Sec} />
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-medium">Machine Learning</h3>
              <div className="mt-3">
                <Chips items={skills.ML} />
              </div>
              <h3 className="mt-6 font-medium">Methodologies</h3>
              <div className="mt-3">
                <Chips items={skills.Method} />
              </div>
              <h3 className="mt-6 font-medium">Langues</h3>
              <div className="mt-3">
                <Chips items={skills.Lang} />
              </div>
              <h3 className="mt-6 font-medium">Certifications</h3>
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
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Parlons de votre projet</h2>
            <p className="mt-2 text-zinc-600 max-w-prose">
              Expliquez-moi votre besoin (site, dashboard, securite, IA). Je reviens vers vous rapidement
              avec un plan simple, un delai et un budget clair.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <a href="mailto:triguifahd@gmail.com" className="rounded-xl bg-zinc-900 text-white px-5 py-3 text-center hover:opacity-90">
                Email
              </a>
              <a href="https://wa.me/21656129988" target="_blank" rel="noreferrer" className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center hover:shadow">
                WhatsApp
              </a>
              <a href="https://linkedin.com/in/fahd-trigui-512799252" target="_blank" rel="noreferrer" className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center hover:shadow">
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-xs text-zinc-500">Sfax · Tunis · Remote (EU/US friendly)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 text-sm text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Fahd Trigui. Tous droits reserves.</div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-80" href="#home">Haut de page</a>
            <a className="hover:opacity-80" href="mailto:triguifahd@gmail.com">triguifahd@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
