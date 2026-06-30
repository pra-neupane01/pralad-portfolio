import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function SocialLinks({ layout = 'flex' }) {
  const socials = [
    { icon: Github, url: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, url: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${profile.email}`, label: 'Email' },
  ];

  const containerClass = layout === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex gap-4';

  return (
    <div className={containerClass}>
      {socials.map(({ icon: Icon, url, label }) => (
        <motion.a
          key={label}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass rounded-lg text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300 flex items-center justify-center"
          title={label}
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </div>
  );
}
