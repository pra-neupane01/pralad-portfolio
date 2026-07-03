import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import CertificationCard from '@/components/CertificationCard';
import FloatingCard from '@/components/FloatingCard';
import { ShieldCheck, Star } from 'lucide-react';

export default function Certifications() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Professional achievements and credentials"
        />

        {/* Header stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <FloatingCard glow="purple" className="border border-neon-purple/30 flex items-center gap-4 px-8 py-4">
            <div className="p-3 bg-neon-purple/10 rounded-xl">
              <ShieldCheck className="text-neon-purple" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold font-display neon-text purple">
                {profile.certifications.length}
              </p>
              <p className="text-text-muted text-sm font-body">
                Verified {profile.certifications.length === 1 ? 'Certification' : 'Certifications'}
              </p>
            </div>
          </FloatingCard>
        </motion.div>

        {/* Certs list */}
        <div className="space-y-6">
          {profile.certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <FloatingCard glow="pink" className="border border-dashed border-neon-pink/30">
            <div className="flex items-center justify-center gap-3 text-text-muted font-mono text-sm">
              <Star size={16} className="text-neon-pink animate-pulse" />
              More certifications in progress…
              <Star size={16} className="text-neon-pink animate-pulse" />
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </main>
  );
}
