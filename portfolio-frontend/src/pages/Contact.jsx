import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { profile } from '@/data/profile';
import SectionTitle from '@/components/SectionTitle';
import FloatingCard from '@/components/FloatingCard';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

const LocationMap = lazy(() => import('@/components/LocationMap'));

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    glow: 'cyan',
    colorClass: 'text-neon-cyan border-neon-cyan/20',
    iconBg: 'bg-neon-cyan/10',
    iconColor: 'text-neon-cyan',
    linkColor: 'text-neon-cyan hover:text-neon-pink',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: Array.isArray(profile.phone) ? profile.phone.join(' / ') : profile.phone,
    href: `tel:${Array.isArray(profile.phone) ? profile.phone[0] : profile.phone}`,
    glow: 'pink',
    colorClass: 'text-neon-pink border-neon-pink/20',
    iconBg: 'bg-neon-pink/10',
    iconColor: 'text-neon-pink',
    linkColor: 'text-neon-pink hover:text-neon-cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location.address,
    href: null,
    glow: 'purple',
    colorClass: 'text-neon-purple border-neon-purple/20',
    iconBg: 'bg-neon-purple/10',
    iconColor: 'text-neon-purple',
    linkColor: 'text-neon-purple',
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Let's collaborate or just chat" />

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <FloatingCard
                  key={info.label}
                  glow={info.glow}
                  delay={i * 0.1}
                  className={`flex gap-4 items-center border ${info.colorClass}`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 ${info.iconBg}`}>
                    <Icon className={info.iconColor} size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-sm font-body font-medium transition-colors ${info.linkColor}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-body font-medium ${info.iconColor}`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </FloatingCard>
              );
            })}

            {/* Social */}
            <FloatingCard glow="purple" className="border border-neon-purple/20">
              <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-4">
                Connect
              </p>
              <SocialLinks layout="flex" />
            </FloatingCard>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold font-display neon-text mb-5">Where I'm Based</h2>
          <div
            className="h-72 md:h-96 rounded-2xl overflow-hidden border border-neon-cyan/20"
            style={{ boxShadow: '0 0 40px rgba(0,245,255,0.1)' }}
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-neon-cyan font-mono text-sm bg-space-dark/50">
                  Loading map…
                </div>
              }
            >
              <LocationMap />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
