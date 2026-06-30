import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-display glow-text mb-4">{title}</h2>
      {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
    </motion.div>
  );
}
