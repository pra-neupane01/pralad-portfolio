import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto">
      <SectionHeader 
        title="Services" 
        subtitle="What I can do for you and your business."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => {
          const Icon = Icons[service.icon] || Icons.Code;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="terminal-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-terminal-surfaceLight text-terminal-green flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-green-glow">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-terminal-text mb-4">
                  {service.title}
                </h3>
                
                <p className="text-terminal-textMuted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
