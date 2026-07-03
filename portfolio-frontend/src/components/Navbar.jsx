import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Playground', path: '/playground' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-border-dark">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ color: '#4fb3a3' }}
          className="text-2xl font-display font-bold text-text-light"
        >
          PN
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-mono transition-colors ${
                  isActive
                    ? 'text-accent-primary'
                    : 'text-text-accent hover:text-text-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-light hover:text-accent-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border-dark bg-dark-secondary p-6 space-y-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-mono text-text-accent hover:text-accent-primary transition-colors"
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
