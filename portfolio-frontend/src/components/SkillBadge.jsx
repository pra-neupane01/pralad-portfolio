import { motion } from "framer-motion";

export default function SkillBadge({ children }) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.03 }}
      className="inline-flex rounded-full border border-line bg-white/[0.05] px-3 py-2 text-sm font-bold text-slate-200 shadow-sm"
    >
      {children}
    </motion.span>
  );
}
