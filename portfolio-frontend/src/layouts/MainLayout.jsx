import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  if (isHome) {
    return (
      <div className="min-h-screen bg-[#F4EBDD] text-[#29251F] font-dmsans selection:bg-[#C81016]/20 selection:text-[#C81016] relative overflow-x-hidden">
        <Outlet />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-24 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="page-transition"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
