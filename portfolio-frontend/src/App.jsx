import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Certifications = lazy(() => import("./pages/Certifications.jsx"));
const Playground = lazy(() => import("./pages/Playground.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

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
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/certifications"
              element={
                <PageTransition>
                  <Certifications />
                </PageTransition>
              }
            />
            <Route
              path="/playground"
              element={
                <PageTransition>
                  <Playground />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
}
