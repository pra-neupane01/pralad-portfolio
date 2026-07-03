import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import SocialLinks from '@/components/SocialLinks';
import ModernCard from '@/components/ModernCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Backend Engineer";

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
    <main className="min-h-screen pt-40 pb-20 px-6 md:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-section">
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Name */}
            <div>
              <h1 className="text-display-xl font-display font-bold text-text-light mb-6">
                {profile.fullName}
              </h1>
              <p className="text-3xl font-mono text-accent-primary mb-4">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 ml-2 bg-text-light"
                />
              </p>
            </div>

            {/* Intro */}
            <p className="text-lg text-text-muted leading-relaxed max-w-lg">
              {profile.careerObjective}
            </p>

            {/* Status */}
            <div className="space-y-2 text-sm">
              <p className="text-text-light">
                <span className="text-accent-primary">→</span> Currently interning at{' '}
                <span className="font-semibold">{profile.currentStatus.internship.company}</span>
              </p>
              <p className="text-text-light">
                <span className="text-accent-primary">→</span> Studying at{' '}
                <span className="font-semibold">{profile.currentStatus.education.degree}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.a
                whileHover={{ x: -4 }}
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-accent-primary hover:bg-accent-light text-dark-bg font-semibold rounded-lg flex items-center gap-2 transition-all"
              >
                <Download size={18} /> Resume
              </motion.a>
              <motion.div
                whileHover={{ x: 4 }}
              >
                <Link
                  to="/projects"
                  className="px-6 py-3 modern-card border border-accent-primary text-accent-primary font-semibold rounded-lg flex items-center gap-2"
                >
                  Work <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Social */}
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Profile Pic */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-accent-primary/30"
            >
              <img
                src="/profile-pic.jpg"
                alt="Pralad"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%231a1a1a" width="200" height="200"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%232d9b7f" font-size="56" font-family="serif" font-weight="bold">PN</text></svg>`;
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <ModernCard className="text-center">
            <p className="text-4xl font-display font-bold text-accent-primary mb-2">5+</p>
            <p className="text-text-muted text-sm">Projects</p>
          </ModernCard>
          <ModernCard className="text-center">
            <p className="text-4xl font-display font-bold text-accent-primary mb-2">PERN</p>
            <p className="text-text-muted text-sm">Full-Stack</p>
          </ModernCard>
          <ModernCard className="text-center">
            <p className="text-4xl font-display font-bold text-accent-primary mb-2">Java</p>
            <p className="text-text-muted text-sm">Backend</p>
          </ModernCard>
        </div>
      </motion.div>
    </main>
  );
}
