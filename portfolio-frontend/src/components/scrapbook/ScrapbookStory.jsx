import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Award, BookOpen, Terminal, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ScrapbookStory() {
  const coreSkills = [
    { name: 'Python', category: 'Language' },
    { name: 'TensorFlow', category: 'Deep Learning' },
    { name: 'Java', category: 'Core Backend' },
    { name: 'Spring Boot', category: 'Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'React', category: 'Frontend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'REST APIs', category: 'Architecture' },
  ];

  return (
    <section className="relative z-10 w-full py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#29251F]/10">
      {/* Chapter 02 header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="rubber-stamp text-[10px] sm:text-xs">
            CHAPTER 02 · FIELD LOGS
          </span>
          <span className="font-handwriting text-[#263B2A] text-lg font-bold">
            skills &amp; expedition
          </span>
        </div>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#29251F] tracking-tight">
          Engineering Craft &amp; Academic Journey
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Manila Notebook Page with Skills (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#FAF8F3] border border-[#29251F]/15 rounded-sm p-6 sm:p-8 shadow-paper relative"
        >
          {/* Washi tape over top-left corner */}
          <div className="absolute -top-3 left-10 w-24 h-5 washi-tape-strip rotate-[-2deg] z-20" />

          <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10 mb-6">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-[#C81016]" />
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#29251F]">
                Core Competencies &amp; Toolkit
              </h3>
            </div>
            <span className="font-typewriter text-[11px] text-[#29251F]/60">
              REV. 2026
            </span>
          </div>

          <p className="font-dmsans text-sm text-[#29251F]/80 leading-relaxed mb-6">
            Focused on learning AI/ML fundamentals, deep learning audio classification, and engineering scalable backend systems using Python and Java.
          </p>

          {/* Grid of Specimen / Tag style skills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {coreSkills.map((skill, idx) => (
              <div
                key={skill.name}
                className="p-3 bg-[#F4EBDD] border border-[#29251F]/15 rounded-xs flex flex-col justify-between hover:border-[#C81016] transition-colors group"
              >
                <span className="font-typewriter text-[9px] uppercase tracking-wider text-[#263B2A] font-bold">
                  {skill.category}
                </span>
                <span className="font-serif font-bold text-sm text-[#29251F] mt-1 group-hover:text-[#C81016] transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Handwritten Annotation at bottom */}
          <div className="pt-4 border-t border-[#29251F]/10 flex items-center justify-between">
            <p className="font-handwriting text-base text-[#29251F]/70">
              "Curiosity-driven engineering — turning concepts into code."
            </p>
            <NavLink
              to="/skills"
              className="inline-flex items-center gap-1 font-typewriter text-xs font-bold text-[#C81016] hover:underline"
            >
              <span>ALL SKILLS</span>
              <ArrowRight size={12} />
            </NavLink>
          </div>
        </motion.div>

        {/* Right Column: Academic & Recognition Ledger (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 bg-[#F6EFE2] border border-[#29251F]/15 rounded-sm p-6 sm:p-8 shadow-paper relative"
        >
          {/* Washi tape over top-right */}
          <div className="absolute -top-3 right-8 w-20 h-5 washi-tape-strip rotate-[3deg] z-20" />

          <div className="flex items-center gap-2 pb-4 border-b border-[#29251F]/10 mb-6">
            <Award size={18} className="text-[#C81016]" />
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#29251F]">
              Education &amp; Honors
            </h3>
          </div>

          <div className="space-y-6">
            {/* Degree */}
            <div className="relative pl-6 border-l-2 border-[#C81016]/40">
              <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#C81016]" />
              <span className="font-typewriter text-[10px] text-[#29251F]/60 uppercase tracking-wider">
                UNDERGRADUATE · PURSUING
              </span>
              <h4 className="font-serif font-bold text-base text-[#29251F] mt-0.5">
                BSc (Hons) Computing
              </h4>
              <p className="font-dmsans text-xs text-[#29251F]/80">
                Itahari International College / London Metropolitan University
              </p>
            </div>

            {/* Hackathon Award */}
            <div className="relative pl-6 border-l-2 border-[#263B2A]/40">
              <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#263B2A]" />
              <span className="font-typewriter text-[10px] text-[#263B2A] uppercase tracking-wider font-bold">
                HACKATHON WINNER · 2026
              </span>
              <h4 className="font-serif font-bold text-base text-[#29251F] mt-0.5">
                Grand Winner — IdeaX Hackathon
              </h4>
              <p className="font-dmsans text-xs text-[#29251F]/80">
                Recognized for technical creativity, problem-solving, and team execution.
              </p>
            </div>

            {/* AAA Scholarship */}
            <div className="relative pl-6 border-l-2 border-[#29251F]/20">
              <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#29251F]/60" />
              <span className="font-typewriter text-[10px] text-[#29251F]/60 uppercase tracking-wider">
                MERIT SCHOLARSHIP · 2026
              </span>
              <h4 className="font-serif font-bold text-base text-[#29251F] mt-0.5">
                College AAA Scholarship Award
              </h4>
              <p className="font-dmsans text-xs text-[#29251F]/80">
                Academic, Attitude &amp; Attendance distinction.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#29251F]/10">
            <NavLink
              to="/journey"
              className="inline-flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#C81016] hover:underline"
            >
              <span>EXPLORE FULL JOURNEY &amp; CERTS</span>
              <ArrowRight size={13} />
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
