import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Compass, FolderGit2, User, BookOpen, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_PATH } from '@/utils/constants';

export default function ScrapbookNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Journey', path: '/journey', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: Send },
  ];

  return (
    <header className="relative z-40 w-full pt-4 pb-2 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between py-2 border-b border-[#29251F]/10">
        {/* Brand / Monogram */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="relative">
            {/* Small washi tape accent on top of logo */}
            <div className="absolute -top-2.5 -left-2 w-8 h-3.5 washi-tape-strip rotate-[-12deg] z-10 pointer-events-none" />
            <div className="w-9 h-9 rounded-sm bg-[#FAF8F3] border border-[#29251F]/20 shadow-sm flex items-center justify-center text-[#C81016] font-serif font-black text-base group-hover:rotate-[-3deg] transition-transform">
              PN
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base text-[#29251F] tracking-tight group-hover:text-[#C81016] transition-colors">
              Pralad Neupane
            </span>
            <span className="font-typewriter text-[10px] tracking-wider text-[#29251F]/60 uppercase">
              Field Journal · Vol. 01
            </span>
          </div>
        </NavLink>

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-dmsans text-xs uppercase tracking-widest font-semibold transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#C81016]'
                    : 'text-[#29251F]/70 hover:text-[#C81016]'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="scrapbookNavDot"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C81016] rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side: Resume Archival Tag & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-typewriter font-bold tracking-wider text-[#C81016] bg-[#FAF8F3] border border-[#C81016]/40 rounded-sm shadow-sm hover:bg-[#C81016] hover:text-[#FAF8F3] transition-all transform hover:-rotate-1"
          >
            <span>RESUME.PDF</span>
            <ArrowUpRight size={12} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#29251F] bg-[#FAF8F3] border border-[#29251F]/15 rounded shadow-sm hover:text-[#C81016]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#FAF8F3] border border-[#29251F]/15 rounded-lg shadow-polaroid p-4 z-50 overflow-hidden"
          >
            {/* Washi tape at top of dropdown */}
            <div className="absolute top-0 right-8 w-16 h-4 washi-tape-strip rotate-[3deg] pointer-events-none" />

            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2 rounded text-xs font-dmsans uppercase tracking-wider font-semibold transition-colors ${
                      isActive
                        ? 'text-[#C81016] bg-[#C81016]/10'
                        : 'text-[#29251F] hover:bg-[#29251F]/5'
                    }`
                  }
                >
                  <item.icon size={14} className="text-[#C81016]" />
                  <span>{item.name}</span>
                </NavLink>
              ))}

              <div className="pt-3 border-t border-[#29251F]/10">
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-typewriter font-bold text-[#C81016] bg-[#C81016]/5 border border-[#C81016]/30 rounded hover:bg-[#C81016] hover:text-white transition-colors"
                >
                  <span>DOWNLOAD RESUME</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
