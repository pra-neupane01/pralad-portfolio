import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Playground', path: '/playground' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="floating-card max-w-7xl mx-auto px-6 py-3 flex justify-between items-center border border-neon-purple/30 rounded-full"
      >
        {/* Logo */}
        <NavLink to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold font-display neon-text cursor-pointer select-none"
          >
            PN
          </motion.div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-body ${
                  isActive
                    ? 'text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/40'
                    : 'text-text-light hover:text-neon-pink hover:bg-neon-pink/5'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan hover:text-neon-pink transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
            transition={{ duration: 0.2 }}
            className="md:hidden floating-card rounded-2xl mt-3 max-w-7xl mx-auto p-4 border border-neon-purple/30"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg transition-all font-body ${
                      isActive
                        ? 'text-neon-cyan bg-neon-cyan/10'
                        : 'text-text-light hover:text-neon-pink'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
