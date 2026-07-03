import { motion } from 'framer-motion';
import ModernCard from './ModernCard';
import { skillsData } from '@/data/skills';

export default function SkillGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.values(skillsData).map((skillGroup, index) => (
        <ModernCard key={skillGroup.category} delay={index * 0.1}>
          <h4 className="text-xl font-display font-bold text-text-light mb-4">
            {skillGroup.category}
          </h4>
          <div className="space-y-3">
            {skillGroup.skills.map((skill) => (
              <div key={skill} className="flex items-center justify-between">
                <span className="text-text-muted font-mono text-sm">{skill}</span>
                <div className="w-12 h-1 bg-border-dark rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-accent-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-accent mt-6 pt-6 border-t border-border-dark font-mono">
            {skillGroup.proficiency}
          </p>
        </ModernCard>
      ))}
    </div>
  );
}
