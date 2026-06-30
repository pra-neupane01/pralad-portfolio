import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center justify-center">
      <GlassCard className="text-center max-w-lg">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-8xl font-bold font-display glow-text mb-4"
        >
          404
        </motion.h1>
        <p className="text-text-secondary text-lg mb-8">Page not found. It may have moved or never existed.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-dark text-bg-primary font-bold rounded-lg transition-all"
        >
          <Home size={20} /> Back to Home
        </Link>
      </GlassCard>
    </main>
  );
}
