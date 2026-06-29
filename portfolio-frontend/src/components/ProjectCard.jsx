import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2";

export default function ProjectCard({ project, index = 0, onViewDetails }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -7, rotateX: 1.2, rotateY: -1.2 }}
      className={`group relative overflow-hidden rounded-2xl border bg-slate-950/60 p-5 shadow-card backdrop-blur-xl ${
        project.featured ? "border-cyan/45 shadow-glow" : "border-line"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute -bottom-12 left-8 h-28 w-28 rounded-full bg-violet/20 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan/10 px-3 py-1 text-xs font-black text-cyan">
              <HiSparkles />
              Featured
            </span>
          )}
        </div>

        <p className="text-sm leading-7 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.status && (
          <p className="mt-5 mono text-xs font-black uppercase tracking-[0.18em] text-lime-200/80">
            {project.status}
          </p>
        )}

        <p className="mt-5 border-l-2 border-cyan/60 pl-3 text-sm leading-7 text-slate-300">
          {project.details}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {onViewDetails ? (
            <button className="primary-button" type="button" onClick={() => onViewDetails(project)}>
              View Details
              <HiArrowUpRight />
            </button>
          ) : (
            <Link className="primary-button" to="/projects">
              View Details
              <HiArrowUpRight />
            </Link>
          )}
          <a className="secondary-button" href={project.githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </a>
          {project.liveUrl ? (
            <a className="primary-button" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
              <HiArrowUpRight />
            </a>
          ) : (
            <span className="rounded-xl border border-line bg-white/[0.035] px-4 py-2.5 text-sm font-bold text-slate-400">
              Live Demo Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
