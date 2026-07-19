import Hero from '../components/home/Hero';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/skills/SkillCard';
import Button from '../components/common/Button';

export default function Home() {
  // Get top 3 projects for the home page
  const featuredProjects = projectsData.slice(0, 3);
  // Get top 8 skills for home page
  const featuredSkills = skillCategories.flatMap(c => c.skills).slice(0, 8);

  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 border-t border-terminal-border dark:border-terminal-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Some of my recent backend and full-stack work." 
          />
          <div className="mb-12 md:mb-0">
            <Button variant="outline" href="/projects">
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Core Skills Snapshot */}
      <section className="py-20 border-t border-terminal-border dark:border-terminal-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader 
            title="Core Skills" 
            subtitle="My primary technical focus areas." 
          />
          <div className="mb-12 md:mb-0">
            <Button variant="outline" href="/skills">
              View All Skills
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
          {featuredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
