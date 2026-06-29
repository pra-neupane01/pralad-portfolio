import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { projectCategories, projects } from "../data/projects.js";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="page-container py-16 lg:py-24">
      <SectionTitle
        eyebrow="Projects"
        title="Project showcase built like a case-study board."
        description="Filter by stack and explore the systems I am building across Java/Spring Boot, Node.js, frontend, and Python."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-xl border px-4 py-2 text-sm font-black transition ${
              activeCategory === category
                ? "border-cyan bg-cyan text-slate-950"
                : "border-line bg-white/[0.04] text-slate-300 hover:border-cyan/60 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
