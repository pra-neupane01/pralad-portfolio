import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import ModernCard from './ModernCard';

export default function ProjectCard({ project, index }) {
  return (
    <ModernCard delay={index * 0.1} className="flex flex-col h-full">
      {/* Category badge */}
      <span className="inline-block w-fit px-3 py-1 bg-dark-bg border border-accent-primary text-accent-primary text-xs font-mono mb-4 rounded-lg">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-2xl font-display font-bold text-text-light mb-3">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-text-accent font-mono text-sm mb-4">{project.tagline}</p>

      {/* Description */}
      <p className="text-text-muted text-sm mb-6 flex-1 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-6">
        <p className="text-xs text-text-accent font-mono mb-3">TECH</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-dark-bg border border-border-dark rounded text-text-accent font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-6 border-t border-border-dark">
        <motion.a
          whileHover={{ x: 4 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent-primary hover:text-accent-light font-mono text-sm"
        >
          <Github size={16} /> Code
        </motion.a>
        {project.liveUrl && (
          <motion.a
            whileHover={{ x: 4 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent-primary hover:text-accent-light font-mono text-sm"
          >
            <ExternalLink size={16} /> Live
          </motion.a>
        )}
      </div>
    </ModernCard>
  );
}
