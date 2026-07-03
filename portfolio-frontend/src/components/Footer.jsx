import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SocialLinks from './SocialLinks';
import { Github, Linkedin, Mail, Zap } from 'lucide-react';

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Playground', path: '/playground' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neon-purple/20 py-12 px-4 md:px-8">
      <div
        className="max-w-7xl mx-auto"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(181,55,242,0.04))',
        }}
      >
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold font-display neon-text mb-3 w-fit"
            >
              PN
            </motion.div>
            <p className="text-text-muted font-body text-sm leading-relaxed max-w-xs">
              Backend-focused developer building scalable, clean solutions from the cosmos of Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-mono text-neon-pink uppercase tracking-widest mb-4">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-body text-text-muted hover:text-neon-cyan transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Zap size={10} className="text-neon-purple" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">
              Connect
            </p>
            <SocialLinks />
            <p className="text-text-muted text-xs font-body mt-4">
              {profile.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-neon-purple/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with React + Vite + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
