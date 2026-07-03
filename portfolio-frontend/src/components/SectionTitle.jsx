import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle = '' }) {
  const words = title.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`inline-block mr-3 ${i % 2 === 0 ? 'neon-text' : 'neon-text pink'}`}
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-text-muted text-base md:text-lg font-body"
        >
          {subtitle}
        </motion.p>
      )}
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mx-auto mt-4 h-px w-24"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.8), rgba(255,0,110,0.8), transparent)',
        }}
      />
    </motion.div>
  );
}
