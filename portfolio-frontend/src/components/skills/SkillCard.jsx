import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function SkillCard({ category, index }) {
  const Icon = Icons[category.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="terminal-card p-6 h-full flex flex-col group"
    >
      <div className="flex items-center gap-4 mb-6 border-b border-terminal-border dark:border-terminal-border pb-4">
        <div className="p-3 bg-terminal-surfaceLight dark:bg-terminal-surfaceLight text-terminal-green rounded-lg group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-display font-semibold text-terminal-text dark:text-terminal-text">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-end">
              <span className="font-mono text-sm text-terminal-text dark:text-terminal-text">
                <span className="text-terminal-textDim mr-2">&gt;</span>
                {skill.name}
              </span>
              <span className="text-xs text-terminal-textMuted dark:text-terminal-textMuted bg-terminal-surfaceLight dark:bg-terminal-surfaceLight px-2 py-0.5 rounded">
                {skill.level}
              </span>
            </div>
            {/* Optional: Add a visual indicator instead of a progress bar */}
            <div className="h-0.5 w-full bg-terminal-surfaceLight dark:bg-terminal-surfaceLight rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: skill.level === 'Core Focus' ? '100%' : skill.level === 'Comfortable' ? '75%' : skill.level === 'Project Experience' ? '60%' : '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                className="h-full bg-terminal-green/30"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
