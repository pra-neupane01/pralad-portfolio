import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';
import SocialLinks from '@/components/SocialLinks';
import GlassCard from '@/components/GlassCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Backend-Focused Developer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-display text-text-primary mb-4">
                {profile.fullName}
              </h1>
              <p className="text-3xl font-display glow-text h-16">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-10 ml-2 bg-accent"
                />
              </p>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed">{profile.careerObjective}</p>

            <div className="space-y-2">
              <p className="text-accent text-sm font-semibold">
                Interning at{' '}
                <span className="text-text-primary">{profile.currentStatus.internship.company}</span>
              </p>
              <p className="text-accent text-sm font-semibold">
                Studying at{' '}
                <span className="text-text-primary">{profile.currentStatus.education.school}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-accent hover:bg-accent-dark text-bg-primary font-bold rounded-lg flex items-center gap-2 transition-all"
              >
                <Download size={20} /> Download Resume
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="px-8 py-3 glass text-accent font-bold rounded-lg flex items-center gap-2 hover:bg-opacity-20 transition-all"
                >
                  View Projects <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent/50 shadow-glow"
              />

              <img
                src="/profile-pic.jpg"
                alt="Pralad Neupane"
                className="w-full h-full rounded-full object-cover border-4 border-glass-border shadow-lg"
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%231e293b" width="200" height="200"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2306d6ff" font-size="48" font-family="sans-serif">PN</text></svg>';
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-4 mb-20">
          <GlassCard className="text-center">
            <h3 className="text-4xl font-bold glow-text mb-2">5+</h3>
            <p className="text-text-secondary">Projects Completed</p>
          </GlassCard>
          <GlassCard className="text-center">
            <h3 className="text-4xl font-bold glow-text mb-2">MERN</h3>
            <p className="text-text-secondary">Full-Stack Stack</p>
          </GlassCard>
          <GlassCard className="text-center">
            <h3 className="text-4xl font-bold glow-text mb-2">Java</h3>
            <p className="text-text-secondary">Backend Expert</p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </main>
  );
}
