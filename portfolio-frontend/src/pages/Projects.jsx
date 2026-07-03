import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Selected Projects" subtitle="Production-grade solutions" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
