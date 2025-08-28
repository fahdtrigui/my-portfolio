import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";


const services = [
  {
    title: "Websites & Apps",
    icon: "🌐",
    desc: "Design of showcase sites, e-commerce and high-performance web apps.",
    bullets: [
      "WordPress / WooCommerce or Django depending on needs",
      "Modern design, responsive, basic SEO",
      "Deployment + contact forms + basic security",
    ],
  },
  {
    title: "Dashboards & Data",
    icon: "📊",
    desc: "KPIs, automatic reporting and data pipelines.",
    bullets: [
      "Power BI / SQL / ETL (SSIS)",
      "Data warehouse (star schema)",
      "Report automation",
    ],
  },
  {
    title: "Cybersecurity (Starter)",
    icon: "🔒",
    desc: "Website security and basic awareness training.",
    bullets: [
      "WordPress hardening (HTTPS/SSL, backups)",
      "Surface scan + recommendations",
      "Anti-phishing advice for teams",
    ],
  },
  {
    title: "Applied AI",
    icon: "🤖",
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
  Dev: { items: ["Django", "Python", "HTML5", "CSS3", "JavaScript"], icon: "💻" },
  Data: { items: ["SQL", "Power BI", "SSIS", "ETL", "DAX", "MDX"], icon: "📈" },
  Sec: { items: ["Scapy", "hping3", "DoS / TCP SYN"], icon: "🛡️" },
  ML: { items: ["XGBoost", "Random Forest", "Decision Tree", "ADA Boost", "LSTM", "BPNN"], icon: "🧠" },
  Method: { items: ["Agile/Scrum", "CRISP-DM"], icon: "⚡" },
  Lang: { items: ["English (B2-C1)", "French (B2-C1)", "Arabic (C2)", "Spanish (A2-B1)"], icon: "🌍" },
};

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef, delay]);

  return (
    <div
      ref={setElementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t, index) => (
      <span
        key={`${t}-${index}`}
        className="px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm"
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
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus("sending");

  try {
    const res = await emailjs.send(
      "service_cdc45yb",       // ✅ Your Service ID
      "template_6cglnyj",      // ✅ Your Template ID
      {
        name: formData.name,
        email: formData.email,
        project: formData.project,
        message: formData.message,
      },
      "-cLiasRf_BVKRCsrm"      // ✅ Your Public Key
    );

    if (res.status === 200) {
      setFormStatus("sent");
      setFormData({ name: "", email: "", project: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    } else {
      setFormStatus("error");
    }
  } catch (error) {
    console.error("EmailJS error:", error);
    setFormStatus("error");
  }
};


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-black" style={{ backgroundColor: '#ffffff' }}>
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#fca311' }} />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-5 animate-bounce" style={{ backgroundColor: '#14213d', animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-20 w-28 h-28 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#fca311', animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-40 w-20 h-20 rounded-full opacity-5 animate-bounce" style={{ backgroundColor: '#14213d', animationDuration: '4s', animationDelay: '0.5s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #e5e5e5', boxShadow: '0 1px 20px rgba(0,0,0,0.05)' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-bold text-xl tracking-tight transition-all duration-300 hover:scale-105" 
            style={{ color: '#14213d' }}
          >
            Fahd Trigui
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['services', 'projects', 'skills', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:scale-105 pb-1 ${
                  activeSection === section ? 'border-b-2' : 'hover:opacity-70'
                }`}
                style={{ 
                  color: '#14213d',
                  borderColor: activeSection === section ? '#fca311' : 'transparent'
                }}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ backgroundColor: isMenuOpen ? '#e5e5e5' : 'transparent' }}
          >
            <div className="space-y-1">
              <div className={`w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
          
          <a
            href="mailto:triguifahd@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            style={{ 
              backgroundColor: '#fca311', 
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(252, 163, 17, 0.3)'
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 border-t' : 'max-h-0'}`} style={{ borderColor: '#e5e5e5' }}>
          <div className="px-4 py-4 space-y-4">
            {['services', 'projects', 'skills', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left capitalize transition-colors duration-300 hover:opacity-70"
                style={{ color: '#14213d' }}
              >
                {section}
              </button>
            ))}
            <a
              href="mailto:triguifahd@gmail.com"
              className="inline-block w-full text-center rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300"
              style={{ backgroundColor: '#fca311', color: '#ffffff' }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{ backgroundColor: '#e5e5e5', color: '#14213d' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#fca311' }} />
                Available for freelance projects
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #14213d 0%, #fca311 100%)'
                  }}
                >
                  Web Developer
                </span>
                <br />
                <span style={{ color: '#14213d' }}>& Data Analyst</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl" style={{ color: '#000000' }}>freelance</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-prose" style={{ color: '#14213d' }}>
                I help SMEs <strong style={{ color: '#fca311' }}>increase revenue</strong> with high-converting websites, 
                make <strong style={{ color: '#fca311' }}>data-driven decisions</strong> with custom dashboards,
                and <strong style={{ color: '#fca311' }}>protect their business</strong> with cybersecurity solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                  style={{ backgroundColor: '#14213d', color: '#ffffff' }}
                >
                  <span className="group-hover:mr-1 transition-all duration-300">View Services</span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform" 
                  style={{ backgroundColor: '#ffffff', color: '#14213d', border: '2px solid #e5e5e5' }}
                >
                  Discover Projects
                </button>
                <button
                  onClick={() => {
                    // Create a temporary link to download CV
                    const link = document.createElement('a');
                    link.href = '/CV_Fahd_Trigui.pdf';
                    link.download = 'CV_Fahd_Trigui.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                  style={{ 
                    backgroundColor: '#fca311', 
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(252, 163, 17, 0.3)'
                  }}
                >
                  Download CV
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#000000' }}>
                <span>📍</span>
                Based in Sfax, Tunisia · Available remotely
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300} className="md:justify-self-end">
            <div className="relative flex items-center justify-center">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full border-4 border-dashed animate-spin" style={{ 
                borderColor: '#e5e5e5',
                animation: 'spin 20s linear infinite'
              }} />
              <div 
                className="absolute inset-8 rounded-full flex items-center justify-center text-6xl sm:text-8xl"
                style={{ 
                  background: 'linear-gradient(135deg, #fca311, #14213d)',
                  color: '#ffffff'
                }}
              >
                👨‍💻
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 relative" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#14213d' }}>Services</h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#14213d' }}>
                Clear offers, concrete deliverables and controlled deadlines
              </p>
              <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#fca311' }} />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, index) => (
              <ScrollReveal key={s.title} delay={index * 100}>
                <article className="group rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer h-full"
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 transition-colors duration-300" style={{ color: '#14213d' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#000000' }}>{s.desc}</p>
                  <ul className="space-y-2 text-sm list-none" style={{ color: '#14213d' }}>
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: '#fca311' }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#14213d' }}>Projects</h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#14213d' }}>
                Selection of relevant projects and work for your needs
              </p>
              <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#fca311' }} />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, index) => (
              <ScrollReveal key={p.title} delay={index * 200}>
                <article className="group rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full" 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold leading-tight flex-1" style={{ color: '#14213d' }}>{p.title}</h3>
                    <span className="text-xs px-3 py-1.5 rounded-full font-medium shrink-0" 
                      style={{ 
                        backgroundColor: '#fca311', 
                        color: '#ffffff'
                      }}
                    >
                      {p.period}
                    </span>
                  </div>
                  <div className="text-sm mb-6 flex items-center gap-1" style={{ color: '#000000' }}>
                    <span>📍</span>
                    {p.location}
                  </div>
                  <div className="space-y-3 text-sm mb-6" style={{ color: '#14213d' }}>
                    {p.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#fca311' }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: '#e5e5e5' }}>
                    <Chips items={p.tags} />
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#14213d' }}>Skills</h2>
              <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#fca311' }} />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <ScrollReveal key={category} delay={index * 100}>
                <div className="rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-1 h-full" 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{data.icon}</span>
                    <h3 className="font-bold text-lg" style={{ color: '#14213d' }}>
                      {category === 'Dev' ? 'Development' : 
                       category === 'Sec' ? 'Cybersecurity' :
                       category === 'ML' ? 'Machine Learning' :
                       category === 'Method' ? 'Methodologies' :
                       category === 'Lang' ? 'Languages' : category}
                    </h3>
                  </div>
                  <Chips items={data.items} />
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={600}>
              <div className="rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-1 h-full" 
                style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e5e5',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🏆</span>
                  <h3 className="font-bold text-lg" style={{ color: '#14213d' }}>Certifications</h3>
                </div>
                <Chips items={["IBM SkillsBuild - AI Fundamentals"]} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="rounded-3xl p-6 sm:p-10 relative overflow-hidden" 
              style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e5e5',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10" 
                style={{ 
                  background: 'linear-gradient(135deg, #fca311, #14213d)',
                  borderRadius: '0 0 0 100%'
                }}
              />
              
              <div className="relative">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#14213d' }}>Let's Talk About Your Project</h2>
                  <p className="text-base sm:text-lg max-w-prose mx-auto" style={{ color: '#14213d' }}>
                    Tell me about your needs (website, dashboard, security, AI). I'll get back to you quickly
                    with a simple plan, timeline and clear budget.
                  </p>
                  <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#fca311' }} />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#14213d' }}>
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105"
                          style={{
                            backgroundColor: '#ffffff',
                            border: '2px solid #e5e5e5',
                            color: '#14213d',
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#fca311'}
                          onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#14213d' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105"
                          style={{
                            backgroundColor: '#ffffff',
                            border: '2px solid #e5e5e5',
                            color: '#14213d'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#fca311'}
                          onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="project" className="block text-sm font-semibold mb-2" style={{ color: '#14213d' }}>
                        Project Type
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105"
                        style={{
                          backgroundColor: '#ffffff',
                          border: '2px solid #e5e5e5',
                          color: '#14213d'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#fca311'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                      >
                        <option value="">Select a service</option>
                        <option value="website">🌐 Website & Apps</option>
                        <option value="dashboard">📊 Dashboards & Data</option>
                        <option value="security">🔒 Cybersecurity</option>
                        <option value="ai">🤖 Applied AI</option>
                        <option value="other">💡 Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#14213d' }}>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105 resize-vertical"
                        style={{
                          backgroundColor: '#ffffff',
                          border: '2px solid #e5e5e5',
                          color: '#14213d'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#fca311'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                        placeholder="Tell me about your project, timeline, and budget if you have one in mind..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{ 
                        backgroundColor: '#fca311', 
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(252, 163, 17, 0.3)'
                      }}
                    >
                      {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? 'Message Sent! ✅' : 'Send Message ✨'}
                    </button>
                    
                    {formStatus === 'sent' && (
                      <div className="text-center text-sm p-3 rounded-lg" style={{ backgroundColor: '#e5f7e5', color: '#2d5016' }}>
                        Thank you! I'll get back to you within 24 hours.
                      </div>
                    )}
                  </form>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-bold text-lg mb-6" style={{ color: '#14213d' }}>Prefer Direct Contact?</h3>
                      <div className="space-y-4">
                        <a href="mailto:triguifahd@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" 
                          style={{ backgroundColor: '#e5e5e5' }}
                        >
                          <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110" 
                            style={{ backgroundColor: '#14213d', color: '#ffffff' }}
                          >
                            ✉
                          </span>
                          <div>
                            <div className="font-semibold" style={{ color: '#14213d' }}>Email</div>
                            <div className="text-sm opacity-80" style={{ color: '#14213d' }}>triguifahd@gmail.com</div>
                          </div>
                        </a>
                        
                        <a href="https://wa.me/21656129988" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" 
                          style={{ backgroundColor: '#e5e5e5' }}
                        >
                          <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110" 
                            style={{ backgroundColor: '#fca311', color: '#ffffff' }}
                          >
                            📱
                          </span>
                          <div>
                            <div className="font-semibold" style={{ color: '#14213d' }}>WhatsApp</div>
                            <div className="text-sm opacity-80" style={{ color: '#14213d' }}>+216 56 129 988</div>
                          </div>
                        </a>
                        
                        <a href="https://linkedin.com/in/fahd-trigui-512799252" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1" 
                          style={{ backgroundColor: '#e5e5e5' }}
                        >
                          <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110" 
                            style={{ backgroundColor: '#14213d', color: '#ffffff' }}
                          >
                            in
                          </span>
                          <div>
                            <div className="font-semibold" style={{ color: '#14213d' }}>LinkedIn</div>
                            <div className="text-sm opacity-80" style={{ color: '#14213d' }}>Professional Profile</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#e5e5e5' }}>
                      <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#14213d' }}>
                        ⚡ Response Time
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
                        I typically respond within <strong>24 hours</strong> on weekdays. 
                        For urgent projects, WhatsApp is fastest.
                      </p>
                    </div>
                    
                    <div className="text-sm flex items-center gap-2" style={{ color: '#000000' }}>
                      <span>🌍</span>
                      <span><strong>Sfax · Tunis · Remote</strong> (EU/US friendly)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#14213d', color: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Fahd Trigui</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Web Developer & Data Analyst helping SMEs grow with modern digital solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>🌐 Websites & Apps</li>
                <li>📊 Dashboards & Data</li>
                <li>🔒 Cybersecurity</li>
                <li>🤖 Applied AI</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>📧 triguifahd@gmail.com</div>
                <div>📱 +216 56 129 988</div>
                <div>📍 Sfax, Tunisia</div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="text-sm opacity-60">
              © {new Date().getFullYear()} Fahd Trigui. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/fahd-trigui-512799252" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                in
              </a>
              <a 
                href="mailto:triguifahd@gmail.com"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                ✉
              </a>
              <a 
                href="https://wa.me/21656129988" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                📱
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-40"
        style={{ 
          backgroundColor: '#fca311', 
          color: '#ffffff',
          boxShadow: '0 4px 20px rgba(252, 163, 17, 0.3)'
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #e5e5e5;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #fca311;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #14213d;
        }
      `}</style>
    </div>
  );
}