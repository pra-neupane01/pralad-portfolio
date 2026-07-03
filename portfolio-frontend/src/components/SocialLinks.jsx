import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function SocialLinks({ layout = 'flex' }) {
  const socials = [
    {
      icon: Github,
      url: profile.social.github,
      label: 'GitHub',
      color: 'cyan',
      borderClass: 'border-neon-cyan/30 text-neon-cyan hover:shadow-neon-cyan hover:border-neon-cyan/80',
    },
    {
      icon: Linkedin,
      url: profile.social.linkedin,
      label: 'LinkedIn',
      color: 'pink',
      borderClass: 'border-neon-pink/30 text-neon-pink hover:shadow-neon-pink hover:border-neon-pink/80',
    },
    {
      icon: Mail,
      url: `mailto:${profile.email}`,
      label: 'Email',
      color: 'purple',
      borderClass: 'border-neon-purple/30 text-neon-purple hover:shadow-neon-purple hover:border-neon-purple/80',
    },
  ];

  const containerClass = layout === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex gap-4';

  return (
    <div className={containerClass}>
      {socials.map(({ icon: Icon, url, label, borderClass }, i) => (
        <motion.a
          key={label}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 floating-card rounded-xl transition-all duration-300 flex items-center justify-center border ${borderClass}`}
          title={label}
          aria-label={label}
        >
          <Icon size={26} />
        </motion.a>
      ))}
    </div>
  );
}
