import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  Award,
  BriefcaseBusiness,
  FolderKanban,
  Home,
  Mail,
  Menu,
  X,
} from "lucide-react";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import CertificationsPage from "./pages/CertificationsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { profile } from "./data/profile.js";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const pageMap = {
  home: HomePage,
  projects: ProjectsPage,
  certifications: CertificationsPage,
  contact: ContactPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const Page = useMemo(() => pageMap[activePage], [activePage]);

  const goToPage = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goToPage("home")} aria-label="Go to home">
          <span className="brand-mark">PN</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.headline}</small>
          </span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={activePage === item.id ? "active" : ""}
                onClick={() => goToPage(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="topbar-actions">
          <a className="icon-button primary" href={profile.resume} download title="Download resume">
            <ArrowDownToLine size={19} />
          </a>
          <a className="icon-button" href="#internship" title="Current internship">
            <BriefcaseBusiness size={19} />
          </a>
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <Page goToPage={goToPage} />
      </main>

      <footer className="footer">
        <span>Built for collaboration, internships, and meaningful backend work.</span>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}
