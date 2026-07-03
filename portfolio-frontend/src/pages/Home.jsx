import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Zap, Cpu, Globe } from 'lucide-react';
import { profile } from '@/data/profile';
import SocialLinks from '@/components/SocialLinks';
import FloatingCard from '@/components/FloatingCard';
import SectionTitle from '@/components/SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stats = [
  { value: '5+', label: 'Projects Built', icon: Zap, color: 'neon-cyan' },
  { value: 'PERN', label: 'Full-Stack', icon: Cpu, color: 'neon-pink' },
  { value: 'Java', label: 'Core Expertise', icon: Globe, color: 'neon-purple' },
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Backend Developer in Orbit';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pt-36 pb-24 px-4 md:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          {/* Left: Text content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/40 bg-neon-green/5 text-neon-green text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Open to Opportunities
            </motion.div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 leading-tight">
                <span className="neon-text">{profile.fullName}</span>
              </h1>

              <div className="h-14 flex items-center">
                <p className="text-2xl md:text-3xl font-display text-neon-pink"
                  style={{ textShadow: '0 0 15px rgba(255,0,110,0.6)' }}
                >
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-0.5 h-8 ml-2 bg-neon-cyan align-middle"
                  />
                </p>
              </div>
            </div>

            <p className="text-text-muted text-base leading-relaxed font-body max-w-lg">
              {profile.careerObjective}
            </p>

            {/* Status */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Current</p>
              <p className="text-sm font-body text-text-light">
                <span className="text-neon-pink">⚡ Interning</span> at{' '}
                <span className="text-neon-cyan font-semibold">
                  {profile.currentStatus.internship.company}
                </span>
              </p>
              <p className="text-sm font-body text-text-light">
                <span className="text-neon-purple">🎓 Studying</span>{' '}
                <span className="text-neon-cyan font-semibold">
                  {profile.currentStatus.education.degree}
                </span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                id="download-resume"
                className="px-7 py-3 font-bold font-mono rounded-lg flex items-center gap-2 text-space-black transition-all"
                style={{
                  background: 'linear-gradient(90deg, #00f5ff, #ff006e)',
                  boxShadow: '0 0 20px rgba(0,245,255,0.3)',
                }}
              >
                <Download size={18} /> Resume
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  id="view-projects"
                  className="px-7 py-3 font-bold font-mono rounded-lg flex items-center gap-2 border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 transition-all"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-2">
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px solid transparent',
                  borderTopColor: '#00f5ff',
                  borderRightColor: 'rgba(0,245,255,0.3)',
                  boxShadow: '0 0 30px rgba(0,245,255,0.2)',
                }}
              />
              {/* Counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full"
                style={{
                  border: '2px solid transparent',
                  borderTopColor: '#ff006e',
                  borderLeftColor: 'rgba(255,0,110,0.3)',
                  boxShadow: '0 0 20px rgba(255,0,110,0.15)',
                }}
              />
              {/* Pulsing outer glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(181,55,242,0.15) 0%, transparent 70%)',
                }}
              />
              {/* Profile image */}
              <img
                src="/profile-pic.jpg"
                alt="Pralad Neupane"
                className="absolute inset-6 w-auto h-auto rounded-full object-cover"
                style={{
                  border: '3px solid rgba(0,245,255,0.4)',
                  boxShadow: '0 0 30px rgba(0,245,255,0.2), inset 0 0 20px rgba(0,245,255,0.05)',
                }}
                onError={(e) => {
                  e.target.src =
                    `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230f1229" width="200" height="200" rx="100"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2300f5ff" font-size="56" font-family="monospace" font-weight="bold">PN</text></svg>`;
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map(({ value, label, icon: Icon, color }, i) => (
            <FloatingCard
              key={label}
              glow={i === 0 ? 'cyan' : i === 1 ? 'pink' : 'purple'}
              delay={i * 0.1}
              className={`text-center border ${
                i === 0
                  ? 'border-neon-cyan/20'
                  : i === 1
                  ? 'border-neon-pink/20'
                  : 'border-neon-purple/20'
              }`}
            >
              <Icon
                size={28}
                className={`mx-auto mb-3 ${
                  color === 'neon-cyan'
                    ? 'text-neon-cyan'
                    : color === 'neon-pink'
                    ? 'text-neon-pink'
                    : 'text-neon-purple'
                }`}
              />
              <h3
                className={`text-4xl font-bold font-display mb-1 ${
                  color === 'neon-cyan'
                    ? 'neon-text'
                    : color === 'neon-pink'
                    ? 'neon-text pink'
                    : 'neon-text purple'
                }`}
              >
                {value}
              </h3>
              <p className="text-text-muted text-sm font-body">{label}</p>
            </FloatingCard>
          ))}
        </motion.div>

        {/* About teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-pink font-mono text-sm transition-colors"
          >
            Explore my universe <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
