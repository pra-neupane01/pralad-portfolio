import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, RESUME_PATH } from '@/utils/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : styles.navbarUnscrolled}`}
    >
      <div className={styles.navContainer}>
        <div
          className={`${styles.navInner} ${scrolled ? 'bg-[#090d16]/85 backdrop-blur-xl border border-white/[0.08] shadow-glass' : 'bg-transparent'}`}
        >
          {/* Logo */}
          <NavLink to="/" aria-label="Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-mono font-extrabold text-slate-950 text-sm shadow-emerald-glow">
                PN
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-display font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  Pralad Neupane
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                  Java Dev
                </span>
              </div>
            </motion.div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 text-xs font-sans font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-emerald-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 inset-x-0 mx-auto w-3/4 h-0.5 bg-emerald-400 rounded-full shadow-emerald-glow"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: Resume CTA + Mobile menu button */}
          <div className="flex items-center gap-3">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-400 transition-all shadow-sm"
            >
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.05] border border-white/[0.08]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0e1422]/95 backdrop-blur-2xl border border-white/[0.08] rounded-xl lg:hidden mx-4 mt-2 overflow-hidden shadow-2xl"
          >
            <div className="p-4 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm font-sans font-medium transition-all rounded-lg ${
                        isActive
                          ? 'text-emerald-400 bg-emerald-500/10 font-semibold border border-emerald-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <div className="pt-3 border-t border-white/[0.08]">
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all shadow-emerald-glow"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

