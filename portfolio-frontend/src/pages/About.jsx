import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import ModernCard from '@/components/ModernCard';
import SkillGrid from '@/components/SkillGrid';

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Career Objective */}
        <SectionTitle title="About Me" subtitle="My professional journey" />

        <ModernCard className="mb-section p-12 max-w-3xl">
          <p className="text-lg text-text-muted leading-relaxed">
            {profile.careerObjective}
          </p>
        </ModernCard>

        {/* Education */}
        <SectionTitle title="Education" subtitle="Foundation & growth" />

        <div className="space-y-6 mb-section">
          {profile.education.map((edu, index) => (
            <ModernCard key={edu.id} delay={index * 0.1}>
              <div className="md:flex justify-between items-start gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-text-light mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-accent-primary font-semibold text-sm mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-text-muted text-sm">{edu.description}</p>
                </div>
                <div className="text-right mt-4 md:mt-0 flex-shrink-0">
                  <p className="text-sm font-mono text-accent-primary font-semibold">
                    {edu.startDate} – {edu.endDate}
                  </p>
                  <p className="text-xs text-text-accent">{edu.location}</p>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>

        {/* Skills */}
        <SectionTitle title="Technical Skills" subtitle="Languages, frameworks & tools" />
        <SkillGrid />
      </div>
    </main>
  );
}
