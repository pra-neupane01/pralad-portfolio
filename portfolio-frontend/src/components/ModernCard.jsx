import { motion } from 'framer-motion';

export default function ModernCard({
  children,
  className = '',
  hover = true,
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(45, 155, 127, 0.1)' } : {}}
      className={`modern-card p-8 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
