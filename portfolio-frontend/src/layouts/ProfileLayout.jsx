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
        <ProfileHeader />

        <div style={{ maxWidth: '940px', margin: '0 auto', padding: '0 16px' }}>
          <ProfileTabs />
        </div>

        <div className="profile-content" style={{ paddingTop: '16px', paddingBottom: '80px' }}>
          {/* Left sidebar - Intro card (desktop) */}
          <aside className="hidden md:block" style={{ position: 'sticky', top: '76px', alignSelf: 'start' }}>
            <IntroCard />
          </aside>

          {/* Center feed + right sidebar */}
          <div>
            <Outlet />
            {/* Right sidebar shown below on mobile, inline on desktop */}
            <div className="md:hidden" style={{ marginTop: '16px' }}>
              <RightSidebar />
            </div>
          </div>
        </div>
      </main>

      <MobileBottomNav />
      <ChatBubble />
    </div>
  );
}
