import SectionHeader from '../components/common/SectionHeader';
import SkillCard from '../components/skills/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto">
      <SectionHeader 
        title="Skills & Technologies" 
        subtitle="Tools and technologies I use to build secure, scalable and maintainable applications."
      />

      <div className="space-y-16">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-terminal-green font-mono text-xl">&gt;</span>
              <h2 className="text-2xl font-display font-semibold text-terminal-text dark:text-terminal-text">
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
