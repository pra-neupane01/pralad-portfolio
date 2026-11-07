import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileLayout from '../layouts/ProfileLayout';
import LoadingSkeleton from '../components/common/LoadingSkeleton';

// Code-split routes
const PostsFeed = lazy(() => import('../pages/PostsFeed'));
const AboutTab = lazy(() => import('../pages/AboutTab'));
const ProjectsTab = lazy(() => import('../pages/ProjectsTab'));
const PhotosTab = lazy(() => import('../pages/PhotosTab'));
const ContactTab = lazy(() => import('../pages/ContactTab'));

function SuspenseWrap({ children }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      {children}
    </Suspense>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfileLayout />}>
        <Route index element={<SuspenseWrap><PostsFeed /></SuspenseWrap>} />
        <Route path="about" element={<SuspenseWrap><AboutTab /></SuspenseWrap>} />
        <Route path="projects" element={<SuspenseWrap><ProjectsTab /></SuspenseWrap>} />
        <Route path="photos" element={<SuspenseWrap><PhotosTab /></SuspenseWrap>} />
        <Route path="contact" element={<SuspenseWrap><ContactTab /></SuspenseWrap>} />
        {/* Redirect old routes */}
        <Route path="skills" element={<Navigate to="/about" replace />} />
        <Route path="education" element={<Navigate to="/about" replace />} />
        <Route path="services" element={<Navigate to="/about" replace />} />
        <Route path="journey" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
