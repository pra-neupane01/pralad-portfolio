import {
  ArrowDownToLine,
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";
import { highlights, profile, projects, skills, stats } from "../data/profile.js";

export default function HomePage({ goToPage }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Open to opportunities in Nepal</p>
          <h1>{profile.name}</h1>
          <h2>{profile.headline}</h2>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <button className="button solid" onClick={() => goToPage("projects")}>
              View projects
              <ArrowRight size={18} />
            </button>
            <a className="button outline" href={profile.resume} download>
              <ArrowDownToLine size={18} />
              Download resume
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.facebook} target="_blank" rel="noreferrer" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href={`mailto:${profile.email}`} title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={profile.image} alt="Pralad Neupane" />
          <div className="profile-panel">
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <strong>Backend systems, APIs, and Java workflows</strong>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Profile snapshot">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label}>
              <Icon size={20} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </section>

      <section className="content-section" id="internship">
        <div className="section-heading">
          <p className="eyebrow">Now</p>
          <h2>Learning in public, building with purpose.</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article className="highlight-item" key={item.label}>
                <Icon size={22} />
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section split-section">
        <div>
          <p className="eyebrow">Skills</p>
          <h2>Backend stack with frontend confidence.</h2>
          <p>
            My core interest is backend development: server logic, clean APIs,
            database design, and reliable workflows. I also work with React so I
            can connect complete product experiences end to end.
          </p>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading inline">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Projects that show how I think.</h2>
          </div>
          <button className="button ghost" onClick={() => goToPage("projects")}>
            All projects
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="project-grid preview">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
