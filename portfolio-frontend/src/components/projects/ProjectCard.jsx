import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="obsidian-card h-full flex flex-col group p-6 relative overflow-hidden"
    >
      {/* Accent gradient line top border */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-4">
        <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all shadow-sm">
          <Layers size={22} />
        </div>
        
        {project.highlight && (
          <span className="text-[11px] font-mono px-2.5 py-1 bg-white/[0.04] text-emerald-400 border border-white/[0.08] rounded-md uppercase tracking-wider">
            {project.highlight}
          </span>
        )}
      </div>

      <h3 className="text-lg font-display font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-xs sm:text-sm mb-6 flex-grow leading-relaxed font-body">
        {project.description}
      </p>

      <div className="mt-auto space-y-4">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[11px] font-mono px-2.5 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-sans font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            >
              <Github size={14} /> <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-sans font-semibold text-slate-950 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-all shadow-emerald-glow"
            >
              <ExternalLink size={14} /> <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

