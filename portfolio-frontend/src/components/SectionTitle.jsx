import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-section"
    >
      <h2 className="text-display-lg font-display font-bold text-text-light mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
