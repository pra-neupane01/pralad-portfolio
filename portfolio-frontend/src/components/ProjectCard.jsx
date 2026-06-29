import { CalendarClock, ExternalLink, GitFork, Star } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-card-main">
        <div className="project-card-topline">
          <p>{project.type}</p>
          {project.featured && <strong>Featured</strong>}
        </div>
        <h3>{project.name}</h3>
        <span>{project.liveDescription || project.description}</span>
      </div>

      <div className="project-impact">{project.impact}</div>

      <ul>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-meta">
        <span>
          <CalendarClock size={15} />
          {project.updatedAt || "Recently"}
        </span>
        <span>
          <Star size={15} />
          {project.stars ?? 0}
        </span>
        <span>
          <GitFork size={15} />
          {project.forks ?? 0}
        </span>
      </div>

      <div className="project-card-footer">
        <span className="project-language">{project.liveLanguage || project.category}</span>
        <a href={project.repo} target="_blank" rel="noreferrer">
          <ExternalLink size={17} />
          Repository
        </a>
      </div>
    </article>
  );
}
