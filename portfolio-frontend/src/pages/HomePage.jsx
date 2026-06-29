import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Radio,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";
import {
  focusLines,
  highlights,
  profile,
  projects,
  services,
  skillGroups,
  stats,
  timeline,
} from "../data/profile.js";
import { useGithubRepos } from "../hooks/useGithubRepos.js";

export default function HomePage({ goToPage }) {
  const [focusIndex, setFocusIndex] = useState(0);
  const { projects: liveProjects, repos, status } = useGithubRepos();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex((current) => (current + 1) % focusLines.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const featuredProjects = useMemo(() => {
    const source = liveProjects.length ? liveProjects : projects;
    return source.filter((project) => project.featured).slice(0, 3);
  }, [liveProjects]);

  const githubStatus =
    status === "ready"
      ? `${repos.length} public repos synced`
      : status === "fallback"
        ? "Using curated project data"
        : "Syncing GitHub projects";

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Backend developer in Morang, Nepal</p>
          <h1>{profile.name}</h1>
          <h2>{profile.headline}</h2>
          <p className="hero-intro">{profile.intro}</p>
          <div className="dynamic-line" aria-live="polite">
            <Radio size={18} />
            <span>{focusLines[focusIndex]}</span>
          </div>

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
            <strong>{githubStatus}</strong>
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
          <p className="eyebrow">Current signal</p>
          <h2>Learning through real work, college projects, and public repositories.</h2>
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

      <section className="content-section split-section capability-section">
        <div>
          <p className="eyebrow">Capability map</p>
          <h2>Backend stack with enough frontend to ship the full story.</h2>
          <p>
            My core interest is backend development: server logic, clean APIs,
            database design, and reliable workflows. I also work with React so I
            can connect complete product experiences end to end.
          </p>
        </div>
        <div className="skill-board">
          {skillGroups.map((group) => (
            <article className="skill-track" key={group.title}>
              <div>
                <h3>{group.title}</h3>
                <strong>{group.strength}%</strong>
              </div>
              <span className="skill-meter">
                <span style={{ width: `${group.strength}%` }} />
              </span>
              <p>{group.skills.join(" / ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section service-section">
        <div className="section-heading inline">
          <div>
            <p className="eyebrow">What I can help with</p>
            <h2>Practical backend work for student teams, startups, and mentors.</h2>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={24} />
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading inline">
          <div>
            <p className="eyebrow">Live project board</p>
            <h2>Projects that show how I think and build.</h2>
          </div>
          <button className="button ghost" onClick={() => goToPage("projects")}>
            All projects
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="project-grid preview">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Trajectory</p>
          <h2>Where I am putting my energy next.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
