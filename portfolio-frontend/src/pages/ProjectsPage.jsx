import { useMemo, useState } from "react";
import { Github, Search, SlidersHorizontal } from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";
import { profile } from "../data/profile.js";
import { useGithubRepos } from "../hooks/useGithubRepos.js";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const { projects, status } = useGithubRepos();

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchable = [
        project.name,
        project.type,
        project.description,
        project.impact,
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchable.includes(query.trim().toLowerCase());
    });
  }, [activeCategory, projects, query]);

  const featuredProject = filteredProjects[0] || projects[0];
  const syncLabel =
    status === "ready"
      ? "Live GitHub data"
      : status === "fallback"
        ? "Curated data"
        : "Syncing GitHub";

  return (
    <section className="page-section">
      <div className="page-heading project-heading">
        <div>
          <p className="eyebrow">Project command center</p>
          <h1>Live repositories, filtered by the kind of backend work they show.</h1>
          <p>
            This page pulls public GitHub metadata when available and falls back
            to curated descriptions, so the portfolio still feels current.
          </p>
        </div>
        <a className="button outline" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub profile
        </a>
      </div>

      <div className="project-controls" aria-label="Project filters">
        <div className="search-field">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or stack"
            aria-label="Search projects"
          />
        </div>
        <div className="filter-group">
          <SlidersHorizontal size={18} />
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {featuredProject && (
        <section className={`project-spotlight ${featuredProject.accent}`}>
          <div>
            <p className="eyebrow">{syncLabel}</p>
            <h2>{featuredProject.name}</h2>
            <p>{featuredProject.impact}</p>
          </div>
          <div className="spotlight-metrics">
            <span>
              <strong>{featuredProject.liveLanguage}</strong>
              Language
            </span>
            <span>
              <strong>{featuredProject.updatedAt}</strong>
              Updated
            </span>
            <span>
              <strong>{featuredProject.stack.length}</strong>
              Stack points
            </span>
          </div>
        </section>
      )}

      <div className="project-grid full">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {!filteredProjects.length && (
        <div className="empty-state">
          <h2>No project found</h2>
          <p>Try another search term or switch the category filter.</p>
        </div>
      )}
    </section>
  );
}
