import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Satellite } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-center max-w-md"
      >
        {/* Floating 404 */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="text-[8rem] font-bold font-display leading-none mb-4 neon-text"
            style={{ textShadow: '0 0 30px rgba(0,245,255,0.8), 0 0 80px rgba(0,245,255,0.4)' }}
          >
            404
          </p>
        </motion.div>

        <div className="mb-3 flex justify-center">
          <Satellite size={40} className="text-neon-pink animate-spin-slow" />
        </div>

        <h1 className="text-2xl font-bold font-display neon-text pink mb-3">
          Lost in Space
        </h1>
        <p className="text-text-muted font-body mb-8">
          This sector of the cosmos doesn't exist. Let's get you back to safety.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold font-mono rounded-lg text-space-black"
            style={{ background: 'linear-gradient(90deg, #00f5ff, #ff006e)' }}
          >
            <Home size={18} /> Return Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
