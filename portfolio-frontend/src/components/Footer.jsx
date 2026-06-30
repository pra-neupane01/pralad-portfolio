import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import SocialLinks from './SocialLinks';

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Playground', path: '/playground' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-12 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-bold font-display glow-text">{profile.fullName}</h2>
          <p className="mt-3 max-w-xl text-text-secondary leading-relaxed">{profile.title}</p>
          <p className="mt-4 text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
        </div>
        <div className="grid gap-5 md:justify-items-end">
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
