import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-terminal-bg dark:bg-terminal-bg"
        >
          <div className="text-center">
            <div className="font-mono text-terminal-green text-lg mb-4">
              <span className="text-terminal-textDim">$</span> initializing
              <span className="animate-blink">_</span>
            </div>
            <div className="w-48 h-0.5 bg-terminal-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="h-full bg-terminal-green rounded-full"
              />
            </div>
            <p className="text-terminal-textDim font-mono text-xs mt-3">
              Pralad Neupane // Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
