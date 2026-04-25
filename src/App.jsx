import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

const services = [
  {
    title: "Data Analysis",
    description:
      "We turn raw business data into clear, decision-ready insights that improve growth, operations, and strategy.",
  },
  {
    title: "AI Agentic Models",
    description:
      "We design practical AI-driven workflows and agentic systems to automate repetitive work and speed up execution.",
  },
  {
    title: "Data Science Projects",
    description:
      "From forecasting to optimization, we build outcome-focused data science solutions tailored to startup needs.",
  },
];

const stats = [
  { value: "Startup-First", label: "Primary Focus" },
  { value: "End-to-End", label: "Project Ownership" },
  { value: "Fast", label: "Execution Cycles" },
  { value: "Practical", label: "Business Outcomes" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

function App() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="top-nav">
      <NavLink to="/" className="brand">
        <span className="brand-mark">S</span>
        <span className="brand-text">Statvance</span>
      </NavLink>

      <nav className="menu">
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
      </nav>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
    >
      {label}
    </NavLink>
  );
}

function PageFrame({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

function HomePage() {
  return (
    <PageFrame>
      <section className="hero card">
        <div className="hero-blob" />
        <motion.p
          className="eyebrow"
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0.05}
        >
          Data Intelligence for Growth
        </motion.p>
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          Helping businesses build with{" "}
          <span className="accent-text">data, AI, and confidence.</span>
        </motion.h1>
        <motion.p
          className="hero-copy"
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          Statvance supports startups and growing companies with data analysis,
          AI agentic models, and custom data science projects that solve real
          business problems.
        </motion.p>
      </section>

      <section className="section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">What We Do</p>
          <h2>Built for fast-moving teams that need clarity and execution.</h2>
        </motion.div>

        <div className="grid">
          {services.map((service, index) => (
            <motion.article
              className="card service-card"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <p className="service-index">0{index + 1}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

function AboutPage() {
  return (
    <PageFrame>
      <section className="section split">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">About Statvance</p>
          <h2>A focused data and AI partner for ambitious companies.</h2>
          <p className="body-copy">
            Statvance works with startup teams and growing businesses that want
            better use of their data. We help you move from uncertainty to
            informed action by combining analysis, intelligent automation, and
            practical delivery.
          </p>
          <p className="body-copy">
            We are early, lean, and execution-driven. The goal is simple:
            deliver work that creates measurable business value and builds trust
            through clear communication.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.article
              className="card stat"
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame>
      <section className="section">
        <motion.div
          className="card contact-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Contact</p>
          <h2>Let us discuss your next data or AI project.</h2>
          <p className="body-copy">
            Since form submission is not required, you can replace these
            placeholders with your real business contact details when ready.
          </p>
          <div className="contact-list">
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:hello@statvance.com">hello@statvance.com</a>
            </p>
            <p>
              <span>Phone:</span> +91 00000 00000
            </p>
            <p>
              <span>Location:</span> India (Remote + Onsite for projects)
            </p>
          </div>
        </motion.div>
      </section>
    </PageFrame>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Statvance. All rights reserved.</p>
      <p>Data Analysis • AI Agentic Models • Data Science Projects</p>
    </footer>
  );
}

export default App;
