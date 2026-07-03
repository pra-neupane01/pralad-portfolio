import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function SocialLinks({ layout = 'flex' }) {
  const socials = [
    { icon: Github, url: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, url: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${profile.email}`, label: 'Email' },
  ];

  const containerClass = layout === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex gap-6';

  return (
    <div className={containerClass}>
      {socials.map(({ icon: Icon, url, label }, i) => (
        <motion.a
          key={label}
          whileHover={{ scale: 1.15, color: '#4fb3a3' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: 'spring' }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-accent hover:text-accent-light transition-colors"
          title={label}
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </div>
  );
}
