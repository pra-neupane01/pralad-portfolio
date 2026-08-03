import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Hash, Sparkles } from 'lucide-react';

export default function CertificationCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="terminal-card group relative overflow-hidden"
    >
      {/* Shimmer accent line at top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6">
        {/* Header row: badge / icon + issuer */}
        <div className="flex items-start gap-4 mb-4">
          {cert.badgeUrl ? (
            <div className="w-14 h-14 rounded-lg bg-terminal-surfaceLight border border-terminal-border overflow-hidden shrink-0 group-hover:border-terminal-green/30 transition-colors">
              <img
                src={cert.badgeUrl}
                alt={`${cert.title} badge`}
                className="w-full h-full object-contain p-1"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-lg bg-terminal-surfaceLight border border-terminal-border flex items-center justify-center shrink-0 group-hover:border-terminal-green/30 group-hover:text-terminal-green transition-colors text-terminal-textMuted">
              <Award size={26} />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-display font-semibold text-terminal-text group-hover:text-terminal-green transition-colors leading-snug">
              {cert.title}
            </h3>
            <p className="text-sm text-terminal-textMuted mt-0.5 font-medium">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-terminal-textDim mb-4">
          {cert.date && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} className="text-terminal-green/60" />
              {cert.date}
            </span>
          )}
          {cert.credentialId && (
            <span className="inline-flex items-center gap-1.5">
              <Hash size={12} className="text-terminal-green/60" />
              {cert.credentialId}
            </span>
          )}
        </div>

        {/* Skills tags */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="tech-badge text-[10px] py-0.5 px-2"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Verify link */}
        {cert.credentialUrl && (
          <div className="pt-4 border-t border-terminal-border">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-text hover:text-terminal-green transition-colors group/link"
            >
              <Sparkles size={12} className="text-terminal-green/70" />
              Verify Credential
              <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
