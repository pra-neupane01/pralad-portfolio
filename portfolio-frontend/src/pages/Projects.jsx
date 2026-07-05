import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <div className="py-12 md:py-20">
      <SectionHeader 
        title="Projects" 
        subtitle="A collection of my academic, personal, and freelance development projects."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
