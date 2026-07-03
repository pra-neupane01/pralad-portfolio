import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { skillsData } from '@/data/skills';
import SectionTitle from '@/components/SectionTitle';
import FloatingCard from '@/components/FloatingCard';
import SkillOrb from '@/components/SkillOrb';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Career Objective */}
        <SectionTitle title="About Me" subtitle="My journey and expertise" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <FloatingCard glow="cyan" className="border border-neon-cyan/20">
            <div className="flex gap-4 items-start">
              <div
                className="w-1 rounded-full flex-shrink-0 self-stretch"
                style={{ background: 'linear-gradient(to bottom, #00f5ff, #ff006e, #b537f2)' }}
              />
              <p className="text-text-muted text-base md:text-lg leading-relaxed font-body">
                {profile.careerObjective}
              </p>
            </div>
          </FloatingCard>
        </motion.div>

        {/* Education */}
        <SectionTitle title="Education Journey" subtitle="Academic background" />

        <div className="space-y-6 mb-24">
          {profile.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FloatingCard
                glow={index % 2 === 0 ? 'cyan' : 'pink'}
                float={false}
                className={`border ${index % 2 === 0 ? 'border-neon-cyan/20' : 'border-neon-pink/20'}`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex gap-4 items-start flex-1">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${
                      index % 2 === 0 ? 'bg-neon-cyan/10' : 'bg-neon-pink/10'
                    }`}>
                      <GraduationCap
                        size={24}
                        className={index % 2 === 0 ? 'text-neon-cyan' : 'text-neon-pink'}
                      />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold font-display mb-1 ${
                        index % 2 === 0 ? 'neon-text' : 'neon-text pink'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className="text-text-light font-semibold font-body mb-1">{edu.institution}</p>
                      <p className="text-text-muted text-sm font-body">{edu.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:text-right text-sm text-text-muted font-mono flex-shrink-0">
                    <span className="flex items-center gap-1.5 md:justify-end">
                      <Calendar size={12} />
                      {edu.startDate} – {edu.endDate}
                    </span>
                    <span className="flex items-center gap-1.5 md:justify-end">
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <SectionTitle title="Skills & Expertise" subtitle="Technical proficiencies in my arsenal" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(skillsData).map((skillGroup, index) => (
            <SkillOrb
              key={skillGroup.category}
              skill={skillGroup}
              delay={index * 0.08}
              index={index}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
