import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="terminal-card max-w-xl w-full mx-auto overflow-hidden"
      >
        {/* Terminal Title Bar */}
        <div className="bg-terminal-border/50 px-4 py-3 flex items-center gap-2 border-b border-terminal-border/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-xs font-mono text-terminal-textDim">
            error_404.sh
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-8 md:p-12 text-center font-mono">
          <div className="flex justify-center mb-6">
            <Terminal size={64} className="text-terminal-green opacity-50" />
          </div>
          
          <h1 className="text-6xl font-bold text-terminal-green mb-4">404</h1>
          <p className="text-xl text-terminal-text mb-2">
            <span className="text-terminal-textDim">$</span> cd /current/path
          </p>
          <p className="text-red-500 mb-8 text-sm">
            bash: cd: /current/path: No such file or directory
          </p>

          <Button href="/">
            Return to Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
