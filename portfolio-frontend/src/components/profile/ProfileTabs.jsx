import { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const tabs = [
  { label: 'Posts', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Photos', path: '/photos' },
  { label: 'Contact', path: '/contact' },
];

export default function ProfileTabs() {
  const location = useLocation();
  const tabsRef = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  // Update sliding indicator on route change
  useEffect(() => {
    const currentPath = location.pathname;
    const activeTab = tabs.find((t) => (t.path === '/' ? currentPath === '/' : currentPath.startsWith(t.path)));
    const activeEl = tabsRef.current[activeTab ? activeTab.path : '/'];

    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    }
  }, [location.pathname]);

  return (
    <div className="profile-tabs-container" style={{ marginTop: '16px' }}>
      <nav className="profile-tabs" aria-label="Profile sections">
        {tabs.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            ref={(el) => (tabsRef.current[path] = el)}
            className={({ isActive }) => `profile-tab${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}

        {/* Sliding active indicator bar */}
        <div
          className="tab-indicator"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
        />
      </nav>
    </div>
  );
}
