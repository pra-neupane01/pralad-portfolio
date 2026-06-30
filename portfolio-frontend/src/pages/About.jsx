import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { skillsData } from '@/data/skills';
import SectionTitle from '@/components/SectionTitle';
import GlassCard from '@/components/GlassCard';
import { Code2, Database, Server, FileCode, Users } from 'lucide-react';

const iconMap = {
  Code2,
  Database,
  Server,
  FileCode,
  Users,
};

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="My journey and expertise" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-20"
        >
          <p className="text-lg text-text-secondary leading-relaxed">{profile.careerObjective}</p>
        </motion.div>

        <SectionTitle title="Education" subtitle="My academic background" />

        <div className="space-y-6 mb-20">
          {profile.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="md:flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-display text-text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-semibold mb-2">{edu.institution}</p>
                    <p className="text-text-secondary">{edu.description}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-accent font-semibold">
                      {edu.startDate} – {edu.endDate}
                    </p>
                    <p className="text-text-secondary text-sm">{edu.location}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <SectionTitle title="Skills & Expertise" subtitle="Technical proficiencies" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {Object.values(skillsData).map((skillGroup, index) => {
            const IconComponent = iconMap[skillGroup.icon] || FileCode;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-accent" size={28} />
                    <h3 className="text-xl font-bold font-display text-text-primary">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-sm text-accent font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm mt-auto pt-4">
                    Proficiency: <span className="text-accent">{skillGroup.proficiency}</span>
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
