import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <motion.div
        className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{ x: [0, 38, 0], y: [0, 20, 0], opacity: [0.32, 0.55, 0.32] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-lime-300/14 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 28, 0], opacity: [0.24, 0.45, 0.24] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
