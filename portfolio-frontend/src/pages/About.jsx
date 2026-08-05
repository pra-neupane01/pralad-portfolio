import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { profile } from '../data/profile';
import { RESUME_PATH } from '../utils/constants';
import ProfilePhoto from '../components/home/ProfilePhoto';

export default function About() {
  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto">
      <SectionHeader
        title="About Me"
        subtitle="My background, education, and career goals."
      />

      {/* Hero-style About layout: text left, photo right */}
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-12">
        {/* Text Content — takes 3 columns */}
        <div className="lg:col-span-3">
          <div className="terminal-card p-6 md:p-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-terminal-green font-mono mb-2">
                <span className="text-terminal-textDim">$</span> cat about.txt
              </div>

              <div className="text-terminal-text dark:text-terminal-text leading-relaxed whitespace-pre-wrap">
                {profile.aboutSummary}
              </div>

              <div className="flex items-center gap-2 text-terminal-green font-mono mb-2 mt-8">
                <span className="text-terminal-textDim">$</span> cat objective.txt
              </div>

              <div className="text-terminal-textMuted dark:text-terminal-textMuted italic leading-relaxed">
                "{profile.careerObjective}"
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <Button href={RESUME_PATH} target="_blank" download icon={Download}>
                  Download Resume
                </Button>
                <Button variant="outline" href="/contact">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side — Photo + Details — takes 2 columns */}
        <div className="lg:col-span-2 flex flex-col items-center gap-8">
          {/* Circular Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProfilePhoto src="/profile.jpg.png" alt={profile.fullName} size="lg" />
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full space-y-6 bg-terminal-surfaceLight dark:bg-terminal-surfaceLight p-6 rounded-lg border border-terminal-border dark:border-terminal-border"
          >
            <div>
              <p className="text-xs font-mono text-terminal-textMuted mb-1 uppercase tracking-wider">Location</p>
              <p className="text-sm text-terminal-text">{profile.location}</p>
            </div>

            <div>
              <p className="text-xs font-mono text-terminal-textMuted mb-1 uppercase tracking-wider">Education</p>
              <p className="text-sm text-terminal-text">{profile.education.degree}</p>
              <p className="text-xs text-terminal-textDim mt-1">{profile.education.institution}</p>
            </div>

            <div>
              <p className="text-xs font-mono text-terminal-textMuted mb-1 uppercase tracking-wider">Focus</p>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">Java</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">Spring Boot</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">Spring Security</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">REST APIs</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">PostgreSQL</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">Docker</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
