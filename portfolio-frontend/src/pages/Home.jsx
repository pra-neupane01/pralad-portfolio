import Hero from '../components/home/Hero';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/skills/SkillCard';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Top 3 featured projects for homepage
  const featuredProjects = projectsData.slice(0, 3);
  // Core skills subset for homepage snapshot
  const featuredSkills = skillCategories.flatMap(c => c.skills).slice(0, 8);

  return (
    <div className="space-y-20 pb-16">
      <Hero />

      {/* Featured Projects Section */}
      <section id="projects" className="pt-12 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Backend systems, full-stack web platforms, and software solutions." 
          />
          <div className="shrink-0 mb-8 sm:mb-0">
            <Button variant="secondary" href="/projects" icon={ArrowRight}>
              All Projects
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Core Technical Focus Snapshot */}
      <section className="pt-12 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeader 
            title="Technical Skills" 
            subtitle="Primary languages, frameworks, databases, and DevOps tools." 
          />
          <div className="shrink-0 mb-8 sm:mb-0">
            <Button variant="secondary" href="/skills" icon={ArrowRight}>
              View All Skills
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {featuredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

