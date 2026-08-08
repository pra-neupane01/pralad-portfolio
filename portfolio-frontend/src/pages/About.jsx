import { motion } from 'framer-motion';
import { Download, Terminal, Code2, Server } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { profile } from '../data/profile';
import { RESUME_PATH } from '../utils/constants';
import ProfilePhoto from '../components/home/ProfilePhoto';

export default function About() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto space-y-12">
      <SectionHeader
        title="About Me"
        subtitle="Background, engineering focus, and core technical background."
      />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Photo Left — 5 cols */}
        <div className="lg:col-span-5 flex flex-col items-center gap-6">
          <ProfilePhoto src="/profile.jpg.png" alt={profile.fullName} size="lg" />
          
          <div className="w-full obsidian-card p-4 space-y-2 text-center">
            <p className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              {profile.title}
            </p>
            <p className="text-xs text-slate-400">
              📍 {profile.location}
            </p>
          </div>
        </div>

        {/* Text Content Right — 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          <div className="obsidian-card p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pb-2 border-b border-white/[0.08]">
              <Terminal size={14} />
              <span>profile_summary.txt</span>
            </div>

            <p className="text-slate-200 text-base md:text-lg leading-relaxed font-body font-normal">
              {profile.aboutSummary}
            </p>

            <div className="bg-[#060911]/80 p-4 rounded-xl border border-white/[0.06] space-y-2">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">// Career Objective</p>
              <p className="text-slate-300 text-xs sm:text-sm italic font-body">
                "{profile.careerObjective}"
              </p>
            </div>

            {/* Core Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
                <Code2 size={20} className="text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-200">Spring Boot</p>
                  <p className="text-[10px] text-slate-400">RESTful Services</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center gap-3">
                <Server size={20} className="text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-200">Databases</p>
                  <p className="text-[10px] text-slate-400">PostgreSQL & MySQL</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href={RESUME_PATH} target="_blank" download icon={Download}>
                Download Resume
              </Button>
              <Button variant="secondary" href="/contact">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

