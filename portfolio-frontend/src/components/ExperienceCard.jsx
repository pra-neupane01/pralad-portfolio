import { motion } from "framer-motion";

export default function ExperienceCard({ label, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative border-l border-line pl-6"
    >
      <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border border-cyan bg-night shadow-glow" />
      <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan">{label}</span>
      <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
      <p className="mt-2 leading-7 text-slate-400">{description}</p>
    </motion.article>
  );
}
