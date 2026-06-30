import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={`glass p-6 rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
