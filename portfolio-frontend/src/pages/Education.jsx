import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto">
      <SectionHeader 
        title="Education" 
        subtitle="My academic background and qualifications."
      />

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-terminal-green/50 before:via-terminal-green/10 before:to-transparent">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-terminal-bg bg-terminal-surfaceLight text-terminal-green group-hover:bg-terminal-green group-hover:text-terminal-bg transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-green-glow">
              <GraduationCap size={18} />
            </div>
            
            {/* Content card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg terminal-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-1 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-terminal-textMuted uppercase tracking-wider">
                  {item.status}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-terminal-text mb-1">
                {item.degree}
              </h3>
              
              <p className="text-terminal-textMuted mb-1 text-sm font-medium">
                {item.institution}
              </p>
              
              <p className="text-terminal-textDim text-sm italic mb-4">
                Partnered with {item.partner}
              </p>
              
              <p className="text-sm text-terminal-textMuted leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-terminal-border">
                <a 
                  href={item.links.institution}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-terminal-text hover:text-terminal-green transition-colors"
                >
                  <ExternalLink size={12} /> View College
                </a>
                <a 
                  href={item.links.partner}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-terminal-text hover:text-terminal-green transition-colors"
                >
                  <ExternalLink size={12} /> View University
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
