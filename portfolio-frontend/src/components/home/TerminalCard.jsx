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
        }, Math.random() * 40 + 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2200);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setCurrentLine((prev) => (prev + 1) % TERMINAL_LINES.length);
        setIsTyping(true);
      }
    }
  }, [currentLine, displayedText, isTyping]);

  return (
    <div className="terminal-card overflow-hidden shadow-2xl relative w-full min-h-[340px] flex flex-col border border-white/[0.08] bg-[#0e1422]/90 backdrop-blur-xl rounded-xl">
      {/* Title Bar */}
      <div className="bg-[#090d16]/80 px-4 py-3 flex items-center gap-2 border-b border-white/[0.08]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-slate-400">
          backend.java — {profile.fullName.toLowerCase().replace(' ', '')}@dev
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed flex-grow flex flex-col">
        <div className="text-slate-500 text-xs mb-4">
          // Java Backend Architecture & Microservices Environment
        </div>
        
        <div className="text-emerald-400 mb-2 font-semibold">
          <span className="text-slate-500 mr-2">$</span>whoami
        </div>
        <div className="text-slate-200 mb-6 pl-4 font-body font-medium">
          {profile.fullName} <span className="text-xs text-slate-400 font-mono">({profile.title})</span>
        </div>

        <div className="text-emerald-400 mb-2 font-semibold">
          <span className="text-slate-500 mr-2">$</span>./skills.sh
        </div>
        
        <div className="flex-grow pl-4 text-emerald-300 font-mono font-medium relative min-h-[40px] flex items-center">
          <span>{displayedText}</span>
          <span className="inline-block w-2 h-5 bg-emerald-400 animate-blink ml-1"></span>
        </div>
      </div>
    </div>
  );
}

