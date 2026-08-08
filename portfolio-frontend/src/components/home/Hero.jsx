import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { RESUME_PATH } from '@/utils/constants';
import Button from '../common/Button';
import ProfilePhoto from './ProfilePhoto';
import TerminalCard from './TerminalCard';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Text & CTAs — 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-emerald-glow"></span>
              <span>Available for Backend Engineering Roles</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {profile.fullName}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-mono text-emerald-400/90 font-medium">
              Java Backend Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-body"
          >
            {profile.introLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button variant="primary" href="#projects" icon={ArrowRight}>
              View Projects
            </Button>
            <Button variant="secondary" href="/contact">
              Contact Me
            </Button>
            <Button variant="outline" href={RESUME_PATH} target="_blank" download icon={Download}>
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 pt-4 border-t border-white/[0.08]"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Connect:
            </span>
            <div className="flex gap-2.5">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-[#0e1422] border border-white/[0.08] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-[#0e1422] border border-white/[0.08] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-[#0e1422] border border-white/[0.08] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Profile & Terminal Showcase — 5 cols */}
        <div className="lg:col-span-5 flex flex-col items-center gap-8">
          <ProfilePhoto src="/profile.jpg.png" alt={profile.fullName} size="lg" />
          <div className="w-full">
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}

