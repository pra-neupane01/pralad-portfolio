import { NavLink } from 'react-router-dom';

const tabs = [
  { label: 'Posts', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Photos', path: '/photos' },
  { label: 'Contact', path: '/contact' },
];

export default function ProfileTabs() {
  return (
    <nav className="profile-tabs" aria-label="Profile sections">
      {tabs.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) => `profile-tab${isActive ? ' active' : ''}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
