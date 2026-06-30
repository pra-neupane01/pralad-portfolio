import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import GlassCard from './GlassCard';

export default function ProjectCard({ project }) {
  return (
    <GlassCard className="flex flex-col h-full">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-bold text-accent mb-3">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold font-display text-text-primary mb-2">{project.title}</h3>
        <p className="text-accent text-sm font-semibold">{project.tagline}</p>
      </div>

      <p className="text-text-secondary text-sm mb-4 flex-1">{project.description}</p>

      <div className="mb-4">
        <p className="text-xs text-text-secondary font-semibold mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-glass-light border border-glass-border rounded text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-glass-border">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
        >
          <Github size={18} /> Code
        </motion.a>
        {project.liveUrl && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
          >
            <ExternalLink size={18} /> Live
          </motion.a>
        )}
      </div>
    </GlassCard>
  );
}
