import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';
import FloatingCard from './FloatingCard';

const glowCycle = ['pink', 'cyan', 'purple'];

export default function ProjectCard({ project, index }) {
  const glow = glowCycle[index % 3];

  const colorMap = {
    pink: {
      border: 'border-neon-pink/30',
      badge: 'bg-neon-pink/20 text-neon-pink border border-neon-pink/50',
      title: 'neon-text pink',
      tagline: 'text-neon-pink/80',
      tech: 'border-neon-pink/30 text-neon-pink/70',
      divider: 'border-neon-pink/20',
      link1: 'text-neon-pink hover:text-neon-cyan',
    },
    cyan: {
      border: 'border-neon-cyan/30',
      badge: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50',
      title: 'neon-text',
      tagline: 'text-neon-cyan/80',
      tech: 'border-neon-cyan/30 text-neon-cyan/70',
      divider: 'border-neon-cyan/20',
      link1: 'text-neon-cyan hover:text-neon-pink',
    },
    purple: {
      border: 'border-neon-purple/30',
      badge: 'bg-neon-purple/20 text-neon-purple border border-neon-purple/50',
      title: 'neon-text purple',
      tagline: 'text-neon-purple/80',
      tech: 'border-neon-purple/30 text-neon-purple/70',
      divider: 'border-neon-purple/20',
      link1: 'text-neon-purple hover:text-neon-cyan',
    },
  };

  const c = colorMap[glow];

  return (
    <FloatingCard
      glow={glow}
      delay={index * 0.08}
      className={`flex flex-col h-full border ${c.border}`}
    >
      {/* Category badge */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.08 + 0.2, type: 'spring' }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-xs font-bold mb-4 font-mono ${c.badge}`}
      >
        <Zap size={10} /> {project.category}
      </motion.span>

      <h3 className={`text-xl font-bold font-display mb-1.5 ${c.title}`}>
        {project.title}
      </h3>

      <p className={`text-sm font-semibold mb-3 font-body ${c.tagline}`}>{project.tagline}</p>

      <p className="text-text-muted text-sm mb-5 flex-1 font-body leading-relaxed">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="mb-5">
        <p className="text-xs text-text-muted font-mono mb-2 uppercase tracking-wider">Stack:</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs bg-space-dark/50 border rounded font-mono ${c.tech}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Role tag */}
      <p className="text-xs text-text-muted font-mono mb-4">
        Role: <span className="text-text-light">{project.role}</span>
      </p>

      {/* Links */}
      <div className={`flex gap-4 pt-4 border-t ${c.divider}`}>
        <motion.a
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm font-mono transition-colors ${c.link1}`}
        >
          <Github size={16} /> Code
        </motion.a>
        {project.liveUrl && (
          <motion.a
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-neon-green hover:text-neon-cyan transition-colors"
          >
            <ExternalLink size={16} /> Live
          </motion.a>
        )}
      </div>
    </FloatingCard>
  );
}
