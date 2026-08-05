import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/socials';
import { RESUME_PATH } from '@/utils/constants';
import Button from '../common/Button';
import TerminalCard from './TerminalCard';
import ProfilePhoto from './ProfilePhoto';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-green/10 border border-terminal-green/20 text-terminal-green text-sm font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
              Available for work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-4 tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-green to-terminal-greenDim">
              {profile.fullName}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-mono text-terminal-textMuted dark:text-terminal-textMuted mb-6"
          >
            &gt; {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-terminal-textDim dark:text-terminal-textDim mb-8 max-w-lg leading-relaxed"
          >
            {profile.introLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Button variant="solid" href="#projects">
              View Projects
            </Button>
            <Button
              variant="outline"
              href={RESUME_PATH}
              target="_blank"
              download
              icon={Download}
            >
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm font-mono text-terminal-textDim dark:text-terminal-textDim">
              // Connect:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 rounded-lg text-terminal-textMuted hover:text-terminal-green hover:bg-terminal-green/10 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Profile Photo + Terminal Card */}
        <div className="order-1 lg:order-2 relative w-full max-w-lg mx-auto flex flex-col items-center gap-8">
          {/* Circular Profile Photo */}
          <ProfilePhoto src="/profile.jpg.png" alt={profile.fullName} size="lg" />

          {/* Terminal Card below photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-terminal-green/20 to-transparent blur-2xl rounded-full opacity-50 z-0"></div>
            <div className="relative z-10">
              <TerminalCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
