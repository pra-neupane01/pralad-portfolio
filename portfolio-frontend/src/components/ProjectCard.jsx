import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div>
        <p>{project.type}</p>
        <h3>{project.name}</h3>
        <span>{project.description}</span>
      </div>

      <ul>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a href={project.repo} target="_blank" rel="noreferrer">
        <ExternalLink size={17} />
        View repository
      </a>
    </article>
  );
}
