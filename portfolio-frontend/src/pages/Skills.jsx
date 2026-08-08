import SectionHeader from '../components/common/SectionHeader';
import SkillCard from '../components/skills/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto space-y-12">
      <SectionHeader 
        title="Skills & Technologies" 
        subtitle="Languages, frameworks, databases, and DevOps tools engineered for production applications."
      />

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <h3 className="text-xl font-display font-bold text-slate-100">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
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

