import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import ModernCard from '@/components/ModernCard';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Professional credentials" />

        <div className="space-y-6">
          {profile.certifications.map((cert, index) => (
            <ModernCard key={cert.id} delay={index * 0.1} className="flex gap-6 items-start">
              <div className="p-4 bg-dark-bg rounded-lg flex-shrink-0">
                <Award className="text-accent-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-text-light mb-1">
                  {cert.title}
                </h3>
                <p className="text-text-accent font-mono text-sm mb-3">{cert.issuer}</p>
                <p className="text-text-muted text-sm mb-3 font-mono">Issued: {cert.issueDate}</p>
                {cert.verificationUrl && (
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-light text-sm font-mono"
                  >
                    Verify <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </main>
  );
}
