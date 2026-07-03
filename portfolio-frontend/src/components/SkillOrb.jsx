import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';
import { Code2, Database, Server, FileCode, Users } from 'lucide-react';

const iconMap = { Code2, Database, Server, FileCode, Users };

const glowColors = ['cyan', 'pink', 'purple', 'cyan', 'pink'];

export default function SkillOrb({ skill, delay = 0, index = 0 }) {
  const glow = glowColors[index % glowColors.length];
  const IconComponent = iconMap[skill.icon] || FileCode;

  const iconColorMap = {
    cyan: 'text-neon-cyan',
    pink: 'text-neon-pink',
    purple: 'text-neon-purple',
  };

  const borderColorMap = {
    cyan: 'border-neon-cyan/30',
    pink: 'border-neon-pink/30',
    purple: 'border-neon-purple/30',
  };

  const bgColorMap = {
    cyan: 'from-neon-cyan/20 to-neon-purple/10',
    pink: 'from-neon-pink/20 to-neon-purple/10',
    purple: 'from-neon-purple/20 to-neon-cyan/10',
  };

  const tagColorMap = {
    cyan: 'border-neon-cyan/30 text-neon-cyan/80',
    pink: 'border-neon-pink/30 text-neon-pink/80',
    purple: 'border-neon-purple/30 text-neon-purple/80',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 150 }}
      viewport={{ once: true }}
    >
      <FloatingCard
        glow={glow}
        delay={delay}
        float={false}
        className={`text-center flex flex-col items-center justify-center border h-full ${borderColorMap[glow]}`}
      >
        {/* Icon orb */}
        <div
          className={`w-16 h-16 bg-gradient-to-br ${bgColorMap[glow]} rounded-full flex items-center justify-center mb-4 animate-pulse-glow`}
        >
          <IconComponent className={iconColorMap[glow]} size={28} />
        </div>

        <h3 className={`text-lg font-bold font-display mb-3 ${iconColorMap[glow]}`}
          style={{
            textShadow: glow === 'cyan'
              ? '0 0 8px rgba(0,245,255,0.6)'
              : glow === 'pink'
              ? '0 0 8px rgba(255,0,110,0.6)'
              : '0 0 8px rgba(181,55,242,0.6)',
          }}
        >
          {skill.category}
        </h3>

        <div className="space-y-1.5 mb-4 w-full">
          {skill.skills.map((s) => (
            <span
              key={s}
              className={`block text-xs font-mono border px-2 py-1 rounded text-center ${tagColorMap[glow]} bg-space-dark/30`}
            >
              {s}
            </span>
          ))}
        </div>

        <p className={`text-xs font-semibold font-mono mt-auto ${iconColorMap[glow]}`}>
          ◆ {skill.proficiency}
        </p>
      </FloatingCard>
    </motion.div>
  );
}
