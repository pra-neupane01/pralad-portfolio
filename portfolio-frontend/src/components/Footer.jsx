import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dark py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-text-light mb-3">PN</h3>
            <p className="text-text-muted text-sm">{profile.title}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-text-light text-sm font-mono font-semibold mb-4">Links</p>
            <div className="space-y-2">
              <p className="text-text-muted text-sm hover:text-accent-primary cursor-pointer transition-colors">Home</p>
              <p className="text-text-muted text-sm hover:text-accent-primary cursor-pointer transition-colors">Projects</p>
              <p className="text-text-muted text-sm hover:text-accent-primary cursor-pointer transition-colors">Contact</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-text-light text-sm font-mono font-semibold mb-4">Social</p>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-border-dark pt-8 text-center">
          <p className="text-text-accent text-xs font-mono">
            © {year} Pralad Neupane • Built with React & Tailwind • Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
