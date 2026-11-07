import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, FolderGit2, User, Mail, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }, [isDark]);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: FolderGit2, label: 'Projects', path: '/projects' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Mail, label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className="desktop-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-navbar)',
        boxShadow: 'var(--shadow-md)',
        height: '56px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0 16px',
          gap: '8px',
        }}
      >
        {/* Left: Name wordmark + search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '0 1 auto', minWidth: 0 }}>
          <Link
            to="/"
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em',
            }}
            aria-label="Pralad Neupane - Home"
          >
            PN
          </Link>

          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                color: 'var(--color-text-secondary)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
              style={{
                paddingLeft: '36px',
                width: '200px',
                height: '36px',
                fontSize: 'var(--font-size-sm)',
                borderRadius: '20px',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  window.location.hash = `search=${encodeURIComponent(searchQuery.trim())}`;
                }
              }}
            />
          </div>
        </div>

        {/* Center: Nav icons */}
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
                  width: '50px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  textDecoration: 'none',
                  transition: 'background var(--transition-fast)',
                }}
                className="hover:bg-[var(--color-card-hover)]"
              >
                <Icon size={22} />
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
            style={{
              width: '36px',
              height: '36px',
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
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
