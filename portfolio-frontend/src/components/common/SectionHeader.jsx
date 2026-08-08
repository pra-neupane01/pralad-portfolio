import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
          // {title}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-2 leading-relaxed font-body">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent w-24 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}

