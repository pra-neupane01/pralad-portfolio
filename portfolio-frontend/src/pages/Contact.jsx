import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import ModernCard from '@/components/ModernCard';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

const LocationMap = lazy(() => import('@/components/LocationMap'));

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-16 mb-section">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ModernCard className="flex gap-4 items-start">
              <Mail className="text-accent-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="text-sm font-mono text-text-accent mb-1">Email</h4>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-text-light hover:text-accent-primary font-mono text-sm"
                >
                  {profile.email}
                </a>
              </div>
            </ModernCard>

            <ModernCard className="flex gap-4 items-start">
              <Phone className="text-accent-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="text-sm font-mono text-text-accent mb-1">Phone</h4>
                <a
                  href={`tel:${Array.isArray(profile.phone) ? profile.phone[0] : profile.phone}`}
                  className="text-text-light hover:text-accent-primary font-mono text-sm"
                >
                  {Array.isArray(profile.phone) ? profile.phone.join(' / ') : profile.phone}
                </a>
              </div>
            </ModernCard>

            <ModernCard className="flex gap-4 items-start">
              <MapPin className="text-accent-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="text-sm font-mono text-text-accent mb-1">Location</h4>
                <p className="text-text-light text-sm">{profile.location.address}</p>
              </div>
            </ModernCard>

            <ModernCard>
              <h4 className="text-sm font-mono text-text-accent mb-4">Connect</h4>
              <SocialLinks layout="grid" />
            </ModernCard>
          </motion.div>
        </div>

        {/* Map */}
        <SectionTitle title="Based In" subtitle="Nepal" />
        <ModernCard className="h-96 md:h-[500px] p-0 overflow-hidden">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-text-muted font-mono">Loading map...</div>}>
            <LocationMap />
          </Suspense>
        </ModernCard>
      </div>
    </main>
  );
}
