import { useState, useEffect } from 'react';
import { TERMINAL_LINES } from '@/utils/constants';
import { profile } from '@/data/profile';

export default function TerminalCard() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = TERMINAL_LINES[currentLine];
    
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, Math.random() * 50 + 50); // Random typing speed between 50-100ms
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000); // Pause at end of line
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 30); // Fast deletion speed
        return () => clearTimeout(timeout);
      } else {
        setCurrentLine((prev) => (prev + 1) % TERMINAL_LINES.length);
        setIsTyping(true);
      }
    }
  }, [currentLine, displayedText, isTyping]);

  return (
    <div className="terminal-card overflow-hidden shadow-2xl relative w-full h-[400px] flex flex-col">
      {/* Terminal Title Bar */}
      <div className="bg-terminal-border/50 dark:bg-terminal-border/50 px-4 py-3 flex items-center gap-2 backdrop-blur-sm border-b border-terminal-border/50 dark:border-terminal-border/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-terminal-textDim dark:text-terminal-textDim">
          bash — {profile.fullName.toLowerCase().replace(' ', '')}@backend:~
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed flex-grow flex flex-col">
        <div className="text-terminal-textMuted dark:text-terminal-textMuted mb-4">
          Last login: {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })} on ttys001
        </div>
        
        <div className="text-terminal-green mb-2">
          <span className="text-terminal-textDim">$</span> whoami
        </div>
        <div className="text-terminal-text mb-6 pl-4">
          {profile.fullName}
        </div>

        <div className="text-terminal-green mb-2">
          <span className="text-terminal-textDim">$</span> ./display-skills.sh
        </div>
        
        <div className="flex-grow pl-4 text-terminal-greenDim relative min-h-[40px]">
          {displayedText}
          <span className="terminal-cursor"></span>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-lg">
          <div className="w-full h-8 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent animate-scan opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
