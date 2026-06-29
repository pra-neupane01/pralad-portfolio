import { Activity, BriefcaseBusiness, Code2, Database, MapPin, ServerCog } from "lucide-react";
import { profile } from "../data/profile.js";

const stackItems = ["Java", "Node.js", "Express", "PostgreSQL", "Firebase", "React"];

export default function HeroConsole({ githubStatus, featuredProjects }) {
  return (
    <aside className="hero-console" aria-label="Portfolio system snapshot">
      <div className="console-header">
        <span />
        <span />
        <span />
        <strong>portfolio.system</strong>
      </div>

      <div className="console-status">
        <Activity size={18} />
        <div>
          <span>Repository signal</span>
          <strong>{githubStatus}</strong>
        </div>
      </div>

      <div className="console-grid">
        <div>
          <ServerCog size={21} />
          <span>Focus</span>
          <strong>Backend APIs</strong>
        </div>
        <div>
          <BriefcaseBusiness size={21} />
          <span>Internship</span>
          <strong>{profile.internship}</strong>
        </div>
        <div>
          <MapPin size={21} />
          <span>Base</span>
          <strong>{profile.location}</strong>
        </div>
        <div>
          <Database size={21} />
          <span>Data</span>
          <strong>PostgreSQL</strong>
        </div>
      </div>

      <div className="console-stack">
        <div className="console-section-title">
          <Code2 size={18} />
          <span>Primary stack</span>
        </div>
        <div>
          {stackItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="console-projects">
        <span>Featured repositories</span>
        {featuredProjects.map((project) => (
          <a href={project.repo} target="_blank" rel="noreferrer" key={project.name}>
            <strong>{project.name}</strong>
            <small>{project.liveLanguage || project.category}</small>
          </a>
        ))}
      </div>
    </aside>
  );
}
