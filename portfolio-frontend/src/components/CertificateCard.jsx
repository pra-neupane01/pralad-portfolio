import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiArrowUpRight } from "react-icons/hi2";

export default function CertificateCard({ certificate, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="soft-card"
    >
      <div className="mb-5 flex h-28 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-cyan/10 via-violet/10 to-white/[0.03]">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <HiOutlineAcademicCap className="text-5xl text-cyan" />
        )}
      </div>
      <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan">
        {certificate.category}
      </span>
      <h3 className="mt-3 text-xl font-black text-white">{certificate.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
      <p className="mt-1 text-sm font-bold text-slate-500">{certificate.date}</p>
      {certificate.credentialUrl ? (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan"
        >
          View credential
          <HiArrowUpRight />
        </a>
      ) : (
        <p className="mt-5 text-sm font-bold text-slate-500">Credential link coming soon</p>
      )}
    </motion.article>
  );
}
