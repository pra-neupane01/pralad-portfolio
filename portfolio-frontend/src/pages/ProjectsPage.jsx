import { Github } from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";
import { profile, projects } from "../data/profile.js";

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Project page</p>
        <h1>Backend projects, product ideas, and systems practice.</h1>
        <p>
          A focused look at the repositories I am building and improving, from
          travel booking management to restaurant ordering APIs.
        </p>
        <a className="button outline" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub profile
        </a>
      </div>

      <div className="project-grid full">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
