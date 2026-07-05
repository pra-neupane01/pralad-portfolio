import { Link } from 'react-router-dom';
import { socialLinks } from '@/data/socials';
import { NAV_ITEMS } from '@/utils/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-terminal-border dark:border-terminal-border py-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-mono font-bold text-terminal-green">PN</span>
              <span className="text-terminal-green font-mono text-xl">&gt;_</span>
            </div>
            <p className="text-sm text-terminal-textMuted dark:text-terminal-textMuted">
              Java Backend Developer · Spring Boot · REST APIs
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-mono font-semibold text-terminal-green mb-4">
              // Quick Links
            </p>
            <div className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-terminal-textMuted dark:text-terminal-textMuted hover:text-terminal-green transition-colors"
                >
                  <span className="text-terminal-textDim mr-1">&gt;</span> {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-mono font-semibold text-terminal-green mb-4">
              // Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2.5 rounded-lg border border-terminal-border dark:border-terminal-border text-terminal-textMuted hover:text-terminal-green hover:border-terminal-green/30 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-terminal-border dark:border-terminal-border pt-6 text-center">
          <p className="text-xs font-mono text-terminal-textDim dark:text-terminal-textDim">
            © {year} Pralad Neupane • Built with React & Tailwind CSS • Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
