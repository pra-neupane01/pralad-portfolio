import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto space-y-8">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Backend REST services, full-stack applications, and desktop management systems."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

