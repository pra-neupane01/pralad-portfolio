import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import IntroCard from '../components/sidebar/IntroCard';
import RightSidebar from '../components/sidebar/RightSidebar';
import ChatBubble from '../components/common/ChatBubble';
import MobileBottomNav from '../components/common/MobileBottomNav';

export default function ProfileLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />

      <main>
        {/* Profile Header & Tabs container */}
        <div className="profile-container">
          <ProfileHeader />
          <ProfileTabs />
        </div>

        {/* Responsive Content Layout */}
        <div className="profile-content">
          {/* Left Intro Card: Desktop sticky sidebar */}
          <aside className="profile-sidebar-left">
            <IntroCard />
          </aside>

          {/* Center Main Feed / Active Tab Content */}
          <section className="profile-main-feed">
            <Outlet />
          </section>

          {/* Right Sidebar: Skills, Featured Projects, GitHub */}
          <aside className="profile-sidebar-right">
            <RightSidebar />
          </aside>
        </div>
      </main>

      <MobileBottomNav />
      <ChatBubble />
    </div>
  );
}
