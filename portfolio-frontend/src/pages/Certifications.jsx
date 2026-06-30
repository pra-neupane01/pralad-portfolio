import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import GlassCard from '@/components/GlassCard';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Professional achievements and credentials"
        />

        <div className="space-y-6">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="flex gap-6 items-start">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Award className="text-accent" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-display text-text-primary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-text-secondary text-sm mb-4">Issued: {cert.issueDate}</p>
                  {cert.verificationUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
                    >
                      Verify Certificate <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
