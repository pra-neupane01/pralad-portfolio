import { motion } from 'framer-motion';

export default function ProfilePhoto({ src = '/profile.jpg.png', alt = 'Profile Photo', size = 'lg' }) {
  const sizeClasses = {
    sm: 'w-28 h-28',
    md: 'w-44 h-44',
    lg: 'w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/30 blur-2xl scale-110 animate-pulse" />

      {/* Gradient border ring */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-[3px] bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-400 shadow-emerald-glow`}>
        {/* Inner obsidian dark ring */}
        <div className="w-full h-full rounded-full p-[3px] bg-[#090d16]">
          {/* Photo container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0e1422]">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Decorative accent dots */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 shadow-emerald-glow"
      />
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 -left-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-cyan-glow"
      />
    </motion.div>
  );
}

