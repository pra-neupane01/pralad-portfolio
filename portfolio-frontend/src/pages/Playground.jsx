import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import FallingBlocksGame from '@/components/FallingBlocksGame';

export default function Playground() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Playground" subtitle="Take a break and test your reflexes" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <FallingBlocksGame />
        </motion.div>
      </div>
    </main>
  );
}
