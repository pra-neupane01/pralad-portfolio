import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import GlassCard from '@/components/GlassCard';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

const LocationMap = lazy(() => import('@/components/LocationMap'));

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Let's collaborate or just chat" />

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard className="flex gap-4 items-start">
              <Mail className="text-accent mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-1">Email</h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard className="flex gap-4 items-start">
              <Phone className="text-accent mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-1">Phone</h3>
                {Array.isArray(profile.phone) ? (
                  <div className="flex flex-col gap-1">
                    {profile.phone.map((number, idx) => (
                      <a
                        key={idx}
                        href={`tel:${number}`}
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    {profile.phone}
                  </a>
                )}
              </div>
            </GlassCard>

            <GlassCard className="flex gap-4 items-start">
              <MapPin className="text-accent mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-1">Location</h3>
                <p className="text-text-secondary">{profile.location.address}</p>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-bold text-text-primary mb-4">Connect</h3>
              <SocialLinks layout="grid" />
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-display text-text-primary mb-6">
            Where I&apos;m Based
          </h2>
          <GlassCard className="h-96 md:h-[500px] p-0 overflow-hidden">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-text-secondary">
                  Loading map...
                </div>
              }
            >
              <LocationMap />
            </Suspense>
          </GlassCard>
        </motion.div>
      </div>
    </main>
  );
}
