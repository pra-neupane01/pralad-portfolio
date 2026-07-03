import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import FallingBlocksGame from '@/components/FallingBlocksGame';
import FloatingCard from '@/components/FloatingCard';
import { Gamepad2, Zap, Shield } from 'lucide-react';

const hints = [
  { icon: Gamepad2, text: 'Use Arrow Keys or A/D to move your ship' },
  { icon: Shield, text: 'Dodge all falling blocks to survive' },
  { icon: Zap, text: 'Speed increases as your score climbs' },
];

export default function Playground() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Playground"
          subtitle="Take a break and test your reflexes"
        />

        {/* Hint cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 mb-10"
        >
          {hints.map(({ icon: Icon, text }, i) => {
            const colors = ['text-neon-cyan border-neon-cyan/20', 'text-neon-pink border-neon-pink/20', 'text-neon-purple border-neon-purple/20'];
            return (
              <div
                key={i}
                className={`floating-card border p-3 text-center ${colors[i]}`}
              >
                <Icon size={20} className="mx-auto mb-2" />
                <p className="text-text-muted text-xs font-mono leading-relaxed">{text}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <FallingBlocksGame />
        </motion.div>
      </div>
    </main>
  );
}
