import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import Button from '../common/Button';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="terminal-card h-full flex flex-col group p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-terminal-green/10 text-terminal-green rounded-lg group-hover:bg-terminal-green/20 transition-colors">
          <Code size={24} />
        </div>
        
        {project.highlight && (
          <span className="text-xs font-mono px-2 py-1 bg-terminal-surfaceLight dark:bg-terminal-surfaceLight text-terminal-textMuted dark:text-terminal-textMuted border border-terminal-border dark:border-terminal-border rounded-md">
            {project.highlight}
          </span>
        )}
      </div>

      <h3 className="text-xl font-display font-semibold text-terminal-text dark:text-terminal-text mb-3 group-hover:text-terminal-green transition-colors">
        {project.title}
      </h3>
      
      <p className="text-terminal-textMuted dark:text-terminal-textMuted text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="mt-auto space-y-5">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-terminal-border dark:border-terminal-border">
          {project.githubUrl && (
            <Button 
              variant="outline" 
              href={project.githubUrl} 
              target="_blank" 
              className="py-1.5 px-3 text-xs w-full"
            >
              <Github size={14} /> GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              variant="primary" 
              href={project.liveUrl} 
              target="_blank" 
              className="py-1.5 px-3 text-xs w-full"
            >
              <ExternalLink size={14} /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
