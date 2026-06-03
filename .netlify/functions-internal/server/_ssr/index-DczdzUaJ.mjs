import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const dashboardImg = "/assets/dashboard-DOF3wsH1.jpg";
const GITHUB = "https://github.com/Adeeb123473";
const LINKEDIN = "https://www.linkedin.com/in/adeebulhassan";
const EMAIL = "adeeb123473@gmail.com";
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background font-sans text-foreground selection:bg-accent/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoreStack, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProject, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OtherProjects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EducationCerts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "font-mono text-sm font-bold uppercase tracking-tighter", children: "AHS.SYS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#experience", className: "transition-colors hover:text-accent", children: "Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "transition-colors hover:text-accent", children: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stack", className: "transition-colors hover:text-accent", children: "Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${EMAIL}`, className: "text-accent", children: "Contact" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "grid grid-cols-1 gap-12 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-success" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Available for Werkstudent Roles" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl", children: [
        "Adeeb Ul Hassan ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Siddiqui." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground", children: [
        "Software Engineer & Data Analytics Specialist pursuing M.Sc. at",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "TU Dresden" }),
        ". Building robust systems for transaction processing and business intelligence."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: GITHUB, target: "_blank", rel: "noreferrer", className: "rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/85", children: "View GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${EMAIL}`, className: "rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground", children: "Get in touch" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl border border-border bg-surface p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70", children: "Technical Identity" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-4", children: [["Role", "Software Engineer"], ["Location", "Dresden, Germany"], ["Focus", "SQL, React, Python, Cloud"], ["Education", "M.Sc. CS (TU Dresden)"]].map(([k, v], i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between ${i < arr.length - 1 ? "border-b border-muted pb-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-xs font-semibold", children: v })
      ] }, k)) })
    ] }) })
  ] });
}
function CoreStack() {
  const cards = [{
    tag: "Full Stack",
    title: "React & Node.js",
    sub: "Enterprise-ready web systems"
  }, {
    tag: "Data Logic",
    title: "Power BI & SQL",
    sub: "OLAP cubes & ETL pipelines"
  }, {
    tag: "Infrastructure",
    title: "GCP & Docker",
    sub: "Cloud-native containerized apps"
  }, {
    tag: "Specialization",
    title: "FinTech Systems",
    sub: "ATM transaction processing"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stack", className: "mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70", children: c.tag }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-semibold", children: c.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.sub })
  ] }, c.tag)) });
}
function FeaturedProject() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight", children: "Featured System" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Architecting the bridge between operational data and business intelligence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-accent", children: "PROJECT_01" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: ["MERN STACK", "SSAS", "POWER BI", "SCIKIT-LEARN", "SQL SERVER"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold", children: "Integrated E-Commerce & OLAP Analytics Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 leading-relaxed text-muted-foreground", children: "A full-stack e-commerce platform integrated with a data warehouse and OLAP analytics system. Designed a Star Schema architecture supporting multidimensional business analysis, with automated ETL workflows and predictive demand forecasting." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: ["Star Schema data warehouse for multidimensional analysis via SSAS.", "Interactive Power BI dashboards for sales, inventory, and customers.", "Demand forecasting models built with Python and Scikit-Learn."].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Adeeb123473/FYP", target: "_blank", rel: "noreferrer", className: "mt-10 inline-flex items-center gap-2 font-semibold text-accent", children: [
          "Explore on GitHub",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dashboardImg, alt: "OLAP analytics dashboard preview", className: "h-full min-h-[400px] w-full object-cover", loading: "lazy" }) })
    ] }) })
  ] });
}
function OtherProjects() {
  const projects = [{
    id: "02",
    title: "Airline Reservation System",
    desc: "Full-stack airline booking engine with transactional integrity and concurrent seat allocation.",
    tags: ["Java", "React", "Node.js", "MySQL"]
  }, {
    id: "03",
    title: "Medical Diagnosis System",
    desc: "Recommendation engine combining collaborative and content-based filtering for symptom analysis.",
    tags: ["Python", "ML", "Filtering"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-20 grid grid-cols-1 gap-6 md:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-foreground/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-accent", children: [
      "PROJECT_",
      p.id
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: p.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: p.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground", children: t }, t)) })
  ] }, p.id)) });
}
function Experience() {
  const roles = [{
    period: "Jun 2024 — Mar 2025",
    location: "Karachi, PK",
    title: "Software Application Consultant",
    company: "Euronet Pakistan",
    accent: true,
    points: ["Supported Integrated Transaction Management systems for ATM transaction processing.", "Analyzed SQL-based transaction logs and reduced issue resolution time.", "Collaborated on payment processing and security compliance initiatives.", "Assisted in fraud monitoring and technical documentation."]
  }, {
    period: "Jul 2024 — Sep 2024",
    location: "Karachi, PK",
    title: "Software Engineer Intern",
    company: "Euronet Pakistan",
    accent: false,
    points: ["Worked on ATM transaction workflows and issue investigation.", "Participated in Agile Scrum development activities.", "Assisted with testing and payment scheme integrations."]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "experience", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 border-b border-border pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight", children: "Experience" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-mono text-sm font-bold ${r.accent ? "text-accent" : "text-muted-foreground/70"}`, children: r.period }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground/70", children: r.location })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-muted-foreground", children: r.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 max-w-2xl space-y-2 text-muted-foreground", children: r.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" }),
          pt
        ] }, pt)) })
      ] })
    ] }, r.title)) })
  ] });
}
function EducationCerts() {
  const skillGroups = {
    Programming: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C#"],
    Web: ["React.js", "Node.js", "Express.js", "REST", "GraphQL", "Tailwind CSS"],
    Databases: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    "Data & Analytics": ["Power BI", "DAX", "Power Query", "SSAS", "OLAP", "ETL", "BigQuery"],
    "Cloud & Tools": ["GCP", "AWS", "Docker", "Git", "GitLab", "Postman"],
    Methodologies: ["Agile", "Scrum", "OOP", "Design Patterns", "CI/CD"]
  };
  const certs = ["Google Cloud Data Analytics Professional", "Advanced React Development (Meta)", "MERN Stack Development Bootcamp"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-32 grid grid-cols-1 gap-12 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 text-3xl font-bold tracking-tight", children: "Technical Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: Object.entries(skillGroups).map(([group, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[10px] font-bold uppercase tracking-widest text-accent", children: group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground", children: s }, s)) })
      ] }, group)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 text-3xl font-bold tracking-tight", children: "Education" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] font-bold uppercase tracking-widest text-accent", children: "2026 — 2028 (Expected)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-lg font-bold", children: "M.Sc. Computer Science" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "TU Dresden, Germany" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70", children: "2021 — 2025" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-lg font-bold", children: "B.Sc. Software Engineering" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Bahria University · CGPA 3.6/4.0" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 mt-10 text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Certifications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium", children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 mt-10 text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Languages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg border border-border bg-surface px-4 py-2 text-sm", children: [
          "English · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "IELTS 7.0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg border border-border bg-surface px-4 py-2 text-sm", children: [
          "German · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "A1" })
        ] })
      ] })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-32 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight", children: "Let's build something data-driven." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-primary-foreground/70", children: "Currently seeking a 20 hr/week Werkstudent position in Dresden. Open to roles in Software Engineering, Backend Development, or Data Engineering." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: LINKEDIN, target: "_blank", rel: "noreferrer", className: "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: GITHUB, target: "_blank", rel: "noreferrer", className: "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent", children: "GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${EMAIL}`, className: "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+4915216046380", className: "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent", children: "+49 152 1604 6380" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {})
  ] });
}
function ContactForm() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  function validate() {
    const e = {};
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
    else if (m.length > 2e3) e.message = "Message must be under 2000 characters";
    return e;
  }
  async function onSubmit(ev) {
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Portfolio contact from ${name.trim()}`,
          _template: "table",
          _captcha: "false"
        })
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
  const inputBase = "w-full rounded-lg border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition focus:border-accent";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "mx-auto mt-12 grid max-w-2xl gap-4 text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cf-name", className: "mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "cf-name", type: "text", value: name, onChange: (e) => setName(e.target.value), maxLength: 100, disabled: submitting, "aria-invalid": !!errors.name, className: `${inputBase} ${errors.name ? "border-red-400" : "border-primary-foreground/20"}`, placeholder: "Your name" }),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-300", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cf-email", className: "mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "cf-email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), maxLength: 200, disabled: submitting, "aria-invalid": !!errors.email, className: `${inputBase} ${errors.email ? "border-red-400" : "border-primary-foreground/20"}`, placeholder: "you@example.com" }),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-300", children: errors.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cf-message", className: "mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "cf-message", value: message, onChange: (e) => setMessage(e.target.value), maxLength: 2e3, rows: 5, disabled: submitting, "aria-invalid": !!errors.message, className: `${inputBase} resize-none ${errors.message ? "border-red-400" : "border-primary-foreground/20"}`, placeholder: "Tell me about the role or project…" }),
      errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-300", children: errors.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting, className: "mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-accent-foreground transition hover:opacity-90 disabled:opacity-50", children: submitting ? "Sending…" : "Send Message" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-auto max-w-7xl px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground", children: "© 2026 ADEEB UL HASSAN SIDDIQUI // DRESDEN, DE" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold uppercase tracking-tighter text-muted-foreground", children: "Authorized to work in Germany · 20 hrs/week" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold uppercase tracking-tighter text-muted-foreground" })
    ] })
  ] }) });
}
export {
  Portfolio as component
};
