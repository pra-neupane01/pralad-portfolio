import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { profile } from '../data/profile';
import { RESUME_PATH } from '../utils/constants';

export default function About() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto">
      <SectionHeader 
        title="About Me" 
        subtitle="My background, education, and career goals."
      />

      <div className="terminal-card p-6 md:p-10 mb-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
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

          {/* Details Sidebar */}
          <div className="w-full md:w-64 space-y-6 bg-terminal-surfaceLight dark:bg-terminal-surfaceLight p-6 rounded-lg border border-terminal-border dark:border-terminal-border">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full border-2 border-terminal-green/50 p-1 flex items-center justify-center bg-terminal-bg/50">
                <User size={64} className="text-terminal-green/50" />
              </div>
            </div>

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
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/20">APIs</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
