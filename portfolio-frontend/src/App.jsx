import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Certifications = lazy(() => import("./pages/Certifications.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function PageShell({ children }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-night text-slate-100">
      <Navbar />
      <Suspense
        fallback={
          <div className="page-container grid min-h-[60vh] place-items-center text-sm font-black uppercase tracking-[0.24em] text-cyan">
            Loading portfolio
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageShell>
                  <Home />
                </PageShell>
              }
            />
            <Route
              path="/about"
              element={
                <PageShell>
                  <About />
                </PageShell>
              }
            />
            <Route
              path="/projects"
              element={
                <PageShell>
                  <Projects />
                </PageShell>
              }
            />
            <Route
              path="/certifications"
              element={
                <PageShell>
                  <Certifications />
                </PageShell>
              }
            />
            <Route
              path="/contact"
              element={
                <PageShell>
                  <Contact />
                </PageShell>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
}
