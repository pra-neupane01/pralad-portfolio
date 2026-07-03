import { motion } from 'framer-motion';

export default function FloatingCard({
  children,
  className = '',
  glow = 'purple',
  delay = 0,
  float = true,
  ...props
}) {
  const glowClasses = {
    pink: 'floating-card pink-glow',
    cyan: 'floating-card cyan-glow',
    purple: 'floating-card',
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div
      initial={float ? 'hidden' : false}
      whileInView={float ? 'visible' : false}
      variants={float ? floatVariants : {}}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      viewport={{ once: true }}
      className={`${glowClasses[glow]} p-6 rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
