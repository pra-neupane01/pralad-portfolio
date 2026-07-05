import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/utils/constants';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`flex justify-between items-center px-5 py-3 rounded-xl transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-lg border-terminal-green/10'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <NavLink to="/" aria-label="Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1"
            >
              <span className="text-xl font-mono font-bold text-terminal-green">
                PN
              </span>
              <span className="text-terminal-green animate-blink font-mono text-xl">
                &gt;_
              </span>
            </motion.div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium font-mono transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-terminal-green dark:text-terminal-green'
                      : 'text-terminal-textMuted dark:text-terminal-textMuted hover:text-terminal-text dark:hover:text-terminal-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-terminal-green rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-terminal-text dark:text-terminal-text p-1.5 rounded-lg hover:bg-terminal-surfaceLight dark:hover:bg-terminal-surfaceLight transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="lg:hidden mx-4 mt-2 overflow-hidden glass-panel rounded-xl"
          >
            <div className="py-3 space-y-0.5">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-sm font-mono font-medium transition-all rounded-lg mx-2 ${
                        isActive
                          ? 'text-terminal-green bg-terminal-green/5'
                          : 'text-terminal-textMuted hover:text-terminal-text hover:bg-terminal-surfaceLight/50'
                      }`
                    }
                  >
                    <span className="text-terminal-green/50 mr-2">&gt;</span>
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
