import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Rocket } from 'lucide-react';

export default function Projects() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Building solutions, one project at a time"
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-14"
        >
          {['Full-Stack', 'Backend', 'Desktop'].map((cat, i) => {
            const count = projectsData.filter((p) =>
              p.category.includes(cat)
            ).length;
            const colors = [
              'border-neon-pink/40 text-neon-pink bg-neon-pink/5',
              'border-neon-cyan/40 text-neon-cyan bg-neon-cyan/5',
              'border-neon-purple/40 text-neon-purple bg-neon-purple/5',
            ];
            return (
              <div
                key={cat}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono ${colors[i]}`}
              >
                <Rocket size={12} /> {count}× {cat}
              </div>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
