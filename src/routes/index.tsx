import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import profileImg from "@/assets/profile.jpeg";
import dashboardImg from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeeb Ul Hassan Siddiqui — Software Engineer & Data Analytics" },
      {
        name: "description",
        content:
          "Portfolio of Adeeb Ul Hassan Siddiqui — Software Engineer and Data Analytics Specialist based in Dresden, Germany. M.Sc. Computer Science at TU Dresden.",
      },
      { property: "og:title", content: "Adeeb Ul Hassan Siddiqui — Software Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Backend, full-stack and data engineering work — building transaction systems, OLAP analytics, and modern web platforms.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const GITHUB = "https://github.com/Adeeb123473";
const LINKEDIN = "https://www.linkedin.com/in/adeebulhassan";
const EMAIL = "adeeb123473@gmail.com";

function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      <Nav />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <Hero />
        <CoreStack />
        <FeaturedProject />
        <OtherProjects />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-bold uppercase tracking-tighter">
          AHS.SYS
        </a>
        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
          <a href="#experience" className="transition-colors hover:text-accent">
            Experience
          </a>
          <a href="#projects" className="transition-colors hover:text-accent">
            Projects
          </a>
          <a href="#stack" className="transition-colors hover:text-accent">
            Stack
          </a>
          <span className="h-4 w-px bg-border" />
          <a href={`mailto:${EMAIL}`} className="text-accent">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Available for Werkstudent Roles
          </span>
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Adeeb Ul Hassan <span className="text-accent">Siddiqui.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          Software Engineer & Data Analytics Specialist pursuing M.Sc. at{" "}
          <span className="font-semibold text-foreground">TU Dresden</span>. Building robust
          systems for transaction processing and business intelligence.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/85"
          >
            View GitHub
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
              Technical Identity
            </span>
            {/* <span className="font-mono text-xs text-accent">ID: 21-BU-0473</span> */}
          </div>
          <dl className="space-y-4">
            {[
              ["Role", "Software Engineer"],
              ["Location", "Dresden, Germany"],
              ["Focus", "SQL, React, Python, Cloud"],
              ["Education", "M.Sc. CS (TU Dresden)"],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                className={`flex justify-between ${
                  i < arr.length - 1 ? "border-b border-muted pb-2" : ""
                }`}
              >
                <dt className="text-xs text-muted-foreground">{k}</dt>
                <dd className="text-xs font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          {/* <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <img
              src={profileImg}
              alt="Adeeb Ul Hassan Siddiqui"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

function CoreStack() {
  const cards = [
    { tag: "Full Stack", title: "React & Node.js", sub: "Enterprise-ready web systems" },
    { tag: "Data Logic", title: "Power BI & SQL", sub: "OLAP cubes & ETL pipelines" },
    { tag: "Infrastructure", title: "GCP & Docker", sub: "Cloud-native containerized apps" },
    { tag: "Specialization", title: "FinTech Systems", sub: "ATM transaction processing" },
  ];
  return (
    <section id="stack" className="mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.tag} className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
            {c.tag}
          </h3>
          <p className="mt-4 font-semibold">{c.title}</p>
          <p className="text-xs text-muted-foreground">{c.sub}</p>
        </div>
      ))}
    </section>
  );
}

function FeaturedProject() {
  return (
    <section id="projects" className="mt-32">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">Featured System</h2>
          <p className="mt-2 text-muted-foreground">
            Architecting the bridge between operational data and business intelligence.
          </p>
        </div>
        <span className="font-mono text-xs text-accent">PROJECT_01</span>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <div className="mb-6 flex flex-wrap gap-2">
              {["MERN STACK", "SSAS", "POWER BI", "SCIKIT-LEARN", "SQL SERVER"].map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-bold">
              Integrated E-Commerce & OLAP Analytics Platform
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A full-stack e-commerce platform integrated with a data warehouse and OLAP analytics
              system. Designed a Star Schema architecture supporting multidimensional business
              analysis, with automated ETL workflows and predictive demand forecasting.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Star Schema data warehouse for multidimensional analysis via SSAS.",
                "Interactive Power BI dashboards for sales, inventory, and customers.",
                "Demand forecasting models built with Python and Scikit-Learn.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/Adeeb123473/FYP"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-accent"
            >
              Explore on GitHub
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
          <div className="relative bg-muted/50">
            <img
              src={dashboardImg}
              alt="OLAP analytics dashboard preview"
              className="h-full min-h-[400px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherProjects() {
  const projects = [
    {
      id: "02",
      title: "Airline Reservation System",
      desc: "Full-stack airline booking engine with transactional integrity and concurrent seat allocation.",
      tags: ["Java", "React", "Node.js", "MySQL"],
    },
    {
      id: "03",
      title: "Medical Diagnosis System",
      desc: "Recommendation engine combining collaborative and content-based filtering for symptom analysis.",
      tags: ["Python", "ML", "Filtering"],
    },
  ];
  return (
    <section className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <div
          key={p.id}
          className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-foreground/20"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs text-accent">PROJECT_{p.id}</span>
          </div>
          <h3 className="text-2xl font-bold">{p.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Experience() {
  const roles = [
    {
      period: "Jun 2024 — Mar 2025",
      location: "Karachi, PK",
      title: "Software Application Consultant",
      company: "Euronet Pakistan",
      accent: true,
      points: [
        "Supported Integrated Transaction Management systems for ATM transaction processing.",
        "Analyzed SQL-based transaction logs and reduced issue resolution time.",
        "Collaborated on payment processing and security compliance initiatives.",
        "Assisted in fraud monitoring and technical documentation.",
      ],
    },
    {
      period: "Jul 2024 — Sep 2024",
      location: "Karachi, PK",
      title: "Software Engineer Intern",
      company: "Euronet Pakistan",
      accent: false,
      points: [
        "Worked on ATM transaction workflows and issue investigation.",
        "Participated in Agile Scrum development activities.",
        "Assisted with testing and payment scheme integrations.",
      ],
    },
  ];
  return (
    <section id="experience" className="mt-32">
      <div className="mb-12 border-b border-border pb-8">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      </div>
      <div className="space-y-12">
        {roles.map((r) => (
          <div key={r.title} className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p
                className={`font-mono text-sm font-bold ${
                  r.accent ? "text-accent" : "text-muted-foreground/70"
                }`}
              >
                {r.period}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground/70">
                {r.location}
              </p>
            </div>
            <div className="lg:col-span-9">
              <h4 className="text-lg font-bold">{r.title}</h4>
              <p className="font-medium text-muted-foreground">{r.company}</p>
              <ul className="mt-4 max-w-2xl space-y-2 text-muted-foreground">
                {r.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationCerts() {
  const skillGroups: Record<string, string[]> = {
    Programming: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C#"],
    Web: ["React.js", "Node.js", "Express.js", "REST", "GraphQL", "Tailwind CSS"],
    Databases: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    "Data & Analytics": ["Power BI", "DAX", "Power Query", "SSAS", "OLAP", "ETL", "BigQuery"],
    "Cloud & Tools": ["GCP", "AWS", "Docker", "Git", "GitLab", "Postman"],
    Methodologies: ["Agile", "Scrum", "OOP", "Design Patterns", "CI/CD"],
  };
  const certs = [
    "Google Cloud Data Analytics Professional",
    "Advanced React Development (Meta)",
    "MERN Stack Development Bootcamp",
  ];

  return (
    <section className="mt-32 grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Technical Stack</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                {group}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <aside className="lg:col-span-5">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Education</h2>
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              2026 — 2028 (Expected)
            </p>
            <h4 className="mt-3 text-lg font-bold">M.Sc. Computer Science</h4>
            <p className="text-muted-foreground">TU Dresden, Germany</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
              2021 — 2025
            </p>
            <h4 className="mt-3 text-lg font-bold">B.Sc. Software Engineering</h4>
            <p className="text-muted-foreground">Bahria University · CGPA 3.6/4.0</p>
          </div>
        </div>

        <h3 className="mb-4 mt-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Certifications
        </h3>
        <ul className="space-y-2">
          {certs.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium"
            >
              {c}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 mt-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Languages
        </h3>
        <div className="flex gap-3">
          <span className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            English · <span className="text-muted-foreground">IELTS 7.0</span>
          </span>
          <span className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            German · <span className="text-muted-foreground">A1</span>
          </span>
        </div>
      </aside>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-32 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight">Let's build something data-driven.</h2>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/70">
          Currently seeking a 20 hr/week Werkstudent position in Dresden. Open to roles in Software
          Engineering, Backend Development, or Data Engineering.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href="tel:+4915216046380"
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
          >
            +49 152 1604 6380
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}

type FormErrors = { name?: string; email?: string; message?: string };

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    const n = name.trim();
    const m = message.trim();
    const em = email.trim();
    if (!n) e.name = "Name is required";
    else if (n.length > 100) e.name = "Name must be under 100 characters";
    if (!em) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) e.email = "Enter a valid email address";
    else if (em.length > 200) e.email = "Email must be under 200 characters";
    if (!m) e.message = "Message is required";
    else if (m.length < 10) e.message = "Message must be at least 10 characters";
    else if (m.length > 2000) e.message = "Message must be under 2000 characters";
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      toast.error("Please fix the errors in the form.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Portfolio contact from ${name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
     toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      toast.error("Could not send message. Please email me directly at (adeeb123473@gmial.com).");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-lg border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition focus:border-accent";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto mt-12 grid max-w-2xl gap-4 text-left"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60">
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            disabled={submitting}
            aria-invalid={!!errors.name}
            className={`${inputBase} ${errors.name ? "border-red-400" : "border-primary-foreground/20"}`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            disabled={submitting}
            aria-invalid={!!errors.email}
            className={`${inputBase} ${errors.email ? "border-red-400" : "border-primary-foreground/20"}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60">
          Message
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          rows={5}
          disabled={submitting}
          aria-invalid={!!errors.message}
          className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-primary-foreground/20"}`}
          placeholder="Tell me about the role or project…"
        />
        {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 ADEEB UL HASSAN SIDDIQUI // DRESDEN, DE
        </p>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">
            Authorized to work in Germany · 20 hrs/week
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">
            {/* v1.0 */}
          </span>
        </div>
      </div>
    </footer>
  );
}
