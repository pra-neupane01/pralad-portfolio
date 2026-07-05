import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="text-terminal-green font-mono text-sm">&gt;</span>
        <span className="text-terminal-green font-mono text-sm tracking-wider uppercase">
          {title}
        </span>
      </div>
      {subtitle && (
        <p className="text-terminal-textMuted dark:text-terminal-textMuted text-sm md:text-base max-w-2xl mt-2">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px bg-gradient-to-r from-terminal-green/50 to-transparent max-w-xs" />
    </motion.div>
  );
}
