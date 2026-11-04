import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { NavLink } from 'react-router-dom';

export default function ScrapbookProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section id="projects" className="relative z-10 w-full py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#29251F]/10">
      {/* Chapter header styled like a vintage journal entry */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="rubber-stamp text-[10px] sm:text-xs">
              CHAPTER 01 · CODE ARCHIVE
            </span>
            <span className="font-handwriting text-[#263B2A] text-lg font-bold">
              selected works
            </span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#29251F] tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="font-dmsans text-sm sm:text-base text-[#29251F]/70 max-w-xl mt-1">
            Hands-on software built with Python, TensorFlow, Java, and Spring Boot — from deep learning acoustic classifiers to full-stack transactional backends.
          </p>
        </div>

        <div className="shrink-0">
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F3] border border-[#29251F]/20 rounded-sm shadow-sm text-xs font-typewriter font-bold text-[#29251F] hover:border-[#C81016] hover:text-[#C81016] transition-all transform hover:-translate-y-0.5"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={13} />
          </NavLink>
        </div>
      </div>

      {/* Projects Grid: Manila Folder / Archival Index Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((project, index) => {
          const tapeRotations = ['rotate-[-3deg]', 'rotate-[4deg]', 'rotate-[-2deg]'];
          const cardRotations = ['hover:rotate-[-0.5deg]', 'hover:rotate-[0.5deg]', 'hover:rotate-[-0.5deg]'];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`manila-card rounded-sm p-6 flex flex-col justify-between relative ${cardRotations[index % 3]}`}
            >
              {/* Washi Tape Strip at top of card */}
              <div className={`absolute -top-3.5 left-8 w-20 h-5 washi-tape-strip ${tapeRotations[index % 3]} z-20`} />

              {/* Card Header / Category Stamp */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <span className="px-2 py-0.5 bg-[#263B2A]/10 text-[#263B2A] font-typewriter text-[10px] font-bold tracking-wider rounded-xs border border-[#263B2A]/20">
                    {project.category}
                  </span>
                  <span className="font-handwriting text-xs text-[#29251F]/60 font-semibold">
                    {project.period || '2025'}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#29251F] tracking-tight mb-2 hover:text-[#C81016] transition-colors">
                  {project.title}
                </h3>

                <p className="font-dmsans text-xs sm:text-sm text-[#29251F]/80 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Tags & Links */}
              <div className="pt-4 border-t border-[#29251F]/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-typewriter bg-[#F4EBDD] border border-[#29251F]/15 rounded-xs text-[#29251F]/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-typewriter font-bold text-[#C81016] hover:underline"
                    >
                      <Github size={13} />
                      <span>Repository</span>
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-typewriter text-[#29251F]/50">Internal Project</span>
                  )}

                  <span className="font-handwriting text-xs text-[#29251F]/50">
                    Entry #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
