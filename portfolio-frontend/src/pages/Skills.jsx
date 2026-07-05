import SectionHeader from '../components/common/SectionHeader';
import SkillCard from '../components/skills/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto">
      <SectionHeader 
        title="Technical Skills" 
        subtitle="Technologies and tools I work with, categorized by domain."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}
