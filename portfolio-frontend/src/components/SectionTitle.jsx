import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-400">{description}</p>}
    </motion.div>
  );
}
