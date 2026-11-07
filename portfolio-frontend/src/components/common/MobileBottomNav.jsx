import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, User, Image, Mail } from 'lucide-react';

const tabs = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'About', path: '/about' },
  { icon: FolderGit2, label: 'Projects', path: '/projects' },
  { icon: Image, label: 'Photos', path: '/photos' },
  { icon: Mail, label: 'Contact', path: '/contact' },
];

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {tabs.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          aria-label={label}
          style={({ isActive }) => ({
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            padding: '6px 0',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
            borderTop: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 600,
          })}
        >
          <Icon size={20} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
