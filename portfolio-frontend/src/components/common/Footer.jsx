import { Link } from 'react-router-dom';
import { socialLinks } from '@/data/socials';
import { NAV_ITEMS } from '@/utils/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-12 px-6 md:px-8 bg-[#060911]/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-mono font-extrabold text-slate-950 text-xs">
                PN
              </div>
              <span className="text-base font-display font-bold text-slate-100">
                Pralad Neupane
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Java Backend Developer focused on Spring Boot, REST APIs, and scalable backend architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-mono font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
              // Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs text-slate-400 hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-slate-600">›</span> {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
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
                    className="p-2.5 rounded-xl bg-[#0e1422] border border-white/[0.08] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-emerald-glow transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 text-center">
          <p className="text-xs font-mono text-slate-500">
            © {year} Pralad Neupane. Engineered with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

