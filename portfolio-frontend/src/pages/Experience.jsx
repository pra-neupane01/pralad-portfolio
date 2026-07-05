import { motion } from 'framer-motion';
import { Briefcase, Code, BookOpen } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { experienceData } from '../data/experience';

export default function Experience() {
  const getIcon = (type) => {
    switch (type) {
      case 'Project Experience': return <Code size={18} />;
      case 'Self-Learning': return <BookOpen size={18} />;
      case 'Academic': return <Briefcase size={18} />;
      default: return <Code size={18} />;
    }
  };

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto">
      <SectionHeader 
        title="Experience & Learning" 
        subtitle="A timeline of my practical project experience and focused technical learning."
      />

      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="terminal-card p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group"
          >
            {/* Left Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-terminal-surfaceLight group-hover:bg-terminal-green transition-colors"></div>
            
            {/* Meta Info (Mobile: Top, Desktop: Left) */}
            <div className="md:w-1/4 shrink-0">
              <div className="flex items-center gap-2 text-terminal-green mb-2">
                {getIcon(item.type)}
                <span className="text-sm font-mono tracking-wider uppercase">{item.type}</span>
              </div>
              <p className="text-sm font-mono text-terminal-textMuted bg-terminal-bg inline-block px-2 py-1 rounded border border-terminal-border">
                {item.period}
              </p>
            </div>
            
            {/* Content */}
            <div className="md:w-3/4">
              <h3 className="text-xl font-display font-semibold text-terminal-text mb-3">
                {item.title}
              </h3>
              <p className="text-terminal-textMuted text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span key={skill} className="text-xs font-mono text-terminal-textDim bg-terminal-surfaceLight px-2 py-1 rounded">
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
