import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, FolderGit2, User, Mail, Sun, Moon, Command } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  // Scroll listener for progress bar and avatar appearance in navbar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setIsScrolledPastHeader(totalScroll > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K or "/"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }, [isDark]);

  const navItems = [
    { icon: Home, label: 'Feed', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: FolderGit2, label: 'Projects', path: '/projects' },
    { icon: Mail, label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className="desktop-nav"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'var(--color-navbar)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-sm)',
          height: '56px',
          borderBottom: '1px solid var(--color-border-light)',
          transition: 'background var(--transition-normal)',
        }}
      >
        <div
          style={{
            maxWidth: '1260px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            padding: '0 clamp(8px, 2vw, 20px)',
            gap: '12px',
          }}
        >
          {/* Left: Wordmark + Quick Search Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '0 1 auto' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
              aria-label="Pralad Neupane - Home"
            >
              <span
                style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-family)',
                }}
              >
                PN
              </span>

              {/* Avatar pops into navbar when scrolled past header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: isScrolledPastHeader ? 1 : 0,
                  transform: isScrolledPastHeader ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'opacity var(--transition-normal), transform var(--transition-normal)',
                  pointerEvents: isScrolledPastHeader ? 'auto' : 'none',
                }}
              >
                <img
                  src="/pralad-profile.jpeg"
                  alt="Pralad Neupane"
                  width={28}
                  height={28}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    aspectRatio: '1/1',
                    border: '1px solid var(--color-border)',
                  }}
                />
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                  Pralad Neupane
                </span>
              </div>
            </Link>

            {/* Quick search button triggering Command Palette */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              aria-label="Search portfolio (Ctrl+K)"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'var(--color-comment)',
                border: '1px solid var(--color-border-light)',
                borderRadius: '20px',
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                cursor: 'pointer',
                transition: 'background var(--transition-fast), border-color var(--transition-fast)',
              }}
              className="hover:border-[var(--color-primary)]"
            >
              <Search size={15} />
              <span>Search...</span>
              <kbd
                style={{
                  fontSize: '10px',
                  padding: '1px 5px',
                  borderRadius: '4px',
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-tertiary)',
                  fontWeight: 600,
                }}
              >
                Ctrl K
              </kbd>
            </button>
          </div>

          {/* Center: Main Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} aria-label="Main navigation">
            {navItems.map(({ icon: Icon, label, path }) => {
              const isActive = location.pathname === path || (path === '/' && location.pathname === '/');
              return (
                <Link
                  key={path}
                  to={path}
                  aria-label={label}
                  title={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    borderBottom: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
                    textDecoration: 'none',
                    transition: 'background var(--transition-fast), color var(--transition-fast)',
                  }}
                  className="hover:bg-[var(--color-card-hover)] btn-press"
                >
                  <Icon size={22} />
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsPaletteOpen(true)}
              aria-label="Command palette"
              title="Command Palette (Ctrl+K)"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'var(--color-comment)',
                color: 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background var(--transition-fast)',
              }}
              className="btn-press"
            >
              <Command size={17} />
            </button>

            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'var(--color-comment)',
                color: 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background var(--transition-fast)',
              }}
              className="btn-press"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        isDark={isDark}
      />
    </>
  );
}
