import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiAdjustmentsHorizontal, HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { projectFilters, projects as localProjects, sortOptions } from "../data/projects.js";

const githubUser = "pra-neupane01";

function normalizeGithubRepo(repo) {
  return {
    title: repo.name,
    category: repo.language || "GitHub",
    filterTags: [repo.language || "GitHub"],
    status: "GitHub Repository",
    featured: ["SajiloYatra", "Restaurant-App", "TrustMart"].includes(repo.name),
    date: repo.updated_at,
    description: repo.description || "Repository imported from GitHub. Add a description there to enrich this card.",
    techStack: [repo.language || "Code"],
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || "",
    details: `Updated on ${new Date(repo.updated_at).toLocaleDateString()}. Stars: ${repo.stargazers_count}. Forks: ${repo.forks_count}.`,
  };
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Featured");
  const [githubProjects, setGithubProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(localProjects[0]);
  const [sourceStatus, setSourceStatus] = useState("Local project data");

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubProjects() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=40`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("GitHub API unavailable");
        const repos = await response.json();
        setGithubProjects(repos.map(normalizeGithubRepo));
        setSourceStatus("Live GitHub data blended with curated portfolio details");
      } catch (error) {
        if (error.name !== "AbortError") {
          setSourceStatus("Using curated local project data");
        }
      }
    }

    loadGithubProjects();
    return () => controller.abort();
  }, []);

  const projectMap = useMemo(() => {
    const map = new Map();
    githubProjects.forEach((project) => map.set(project.title.toLowerCase(), project));
    localProjects.forEach((project) => {
      const imported = map.get(project.title.toLowerCase());
      map.set(project.title.toLowerCase(), imported ? { ...imported, ...project } : project);
    });
    return Array.from(map.values());
  }, [githubProjects]);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return projectMap
      .filter((project) => {
        const matchesFilter =
          activeFilter === "All" ||
          project.category === activeFilter ||
          project.filterTags?.includes(activeFilter) ||
          project.techStack?.includes(activeFilter);

        const searchableText = [
          project.title,
          project.category,
          project.status,
          project.description,
          project.details,
          ...(project.techStack || []),
        ]
          .join(" ")
          .toLowerCase();

        return matchesFilter && (!normalizedSearch || searchableText.includes(normalizedSearch));
      })
      .sort((a, b) => {
        if (sortBy === "A-Z") return a.title.localeCompare(b.title);
        if (sortBy === "Latest") return new Date(b.date || 0) - new Date(a.date || 0);
        return Number(b.featured) - Number(a.featured) || new Date(b.date || 0) - new Date(a.date || 0);
      });
  }, [activeFilter, projectMap, searchTerm, sortBy]);

  useEffect(() => {
    if (!filteredProjects.length) {
      setSelectedProject(null);
      return;
    }

    setSelectedProject((current) =>
      current && filteredProjects.some((project) => project.title === current.title)
        ? current
        : filteredProjects[0],
    );
  }, [filteredProjects]);

  return (
    <section className="page-container py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
        <SectionTitle
          eyebrow="Projects Lab"
          title="Backend systems, Java builds, and practical software experiments."
          description="Search, filter, sort, and inspect the systems behind my learning path. Curated project notes stay available even if GitHub data cannot load."
        />
        <div className="glass-panel rounded-2xl p-5">
          <p className="mono text-xs font-black uppercase tracking-[0.2em] text-cyan">data source</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{sourceStatus}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 rounded-2xl border border-line bg-slate-950/55 p-4 backdrop-blur-xl lg:grid-cols-[1fr_auto]">
        <label className="relative block">
          <HiMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-500" />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search Java, Spring Boot, REST API, database..."
            className="min-h-12 w-full rounded-xl border border-line bg-white/[0.04] py-3 pl-12 pr-4 text-slate-100 outline-none transition focus:border-cyan"
          />
        </label>

        <label className="flex min-h-12 items-center gap-3 rounded-xl border border-line bg-white/[0.04] px-4">
          <HiAdjustmentsHorizontal className="text-xl text-cyan" />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="bg-transparent text-sm font-black text-white outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option} className="bg-slate-950">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-xl border px-4 py-2 text-sm font-black transition ${
              activeFilter === filter
                ? "border-cyan bg-cyan text-slate-950"
                : "border-line bg-white/[0.04] text-slate-300 hover:border-cyan/60 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {selectedProject && (
        <AnimatePresence mode="wait">
          <motion.aside
            key={selectedProject.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="mt-10 overflow-hidden rounded-3xl border border-cyan/35 bg-emerald-950/20 shadow-glow"
          >
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-line bg-slate-950/55 p-6 lg:border-b-0 lg:border-r">
                <p className="mono text-xs font-black uppercase tracking-[0.2em] text-cyan">
                  selected project
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">{selectedProject.title}</h2>
                <p className="mt-3 text-sm font-black text-lime-200">{selectedProject.status}</p>
              </div>
              <div className="p-6">
                <button
                  className="float-right rounded-full border border-line bg-white/[0.04] p-2 text-slate-300 hover:border-cyan hover:text-white"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project detail"
                >
                  <HiXMark />
                </button>
                <p className="pr-10 leading-8 text-slate-300">{selectedProject.details}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1.5 text-xs font-bold text-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </AnimatePresence>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      {!filteredProjects.length && (
        <p className="mt-10 rounded-2xl border border-line bg-white/[0.04] p-6 text-center font-bold text-slate-300">
          No project matched that search.
        </p>
      )}
    </section>
  );
}
