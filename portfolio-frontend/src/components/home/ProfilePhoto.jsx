import { motion } from 'framer-motion';

export default function ProfilePhoto({ src = '/profile.jpg.png', alt = 'Profile Photo', size = 'lg' }) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-terminal-green/30 via-purple-500/20 to-terminal-green/10 blur-xl scale-110 animate-pulse" />

      {/* Gradient border ring */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-[3px] bg-gradient-to-tr from-terminal-green via-purple-500/60 to-terminal-green/40`}>
        {/* Inner dark ring */}
        <div className="w-full h-full rounded-full p-[3px] bg-terminal-bg">
          {/* Photo container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-terminal-surface">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Decorative floating dots */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-terminal-green/60 blur-[1px]"
      />
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-3 -left-3 w-2 h-2 rounded-full bg-purple-400/50 blur-[1px]"
      />
    </motion.div>
  );
}
