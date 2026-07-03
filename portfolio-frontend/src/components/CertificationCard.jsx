import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield } from 'lucide-react';
import FloatingCard from './FloatingCard';

export default function CertificationCard({ cert, index }) {
  const glows = ['cyan', 'pink', 'purple'];
  const glow = glows[index % 3];

  const colorMap = {
    cyan: {
      border: 'border-neon-cyan/30',
      icon: 'text-neon-cyan',
      bg: 'bg-neon-cyan/10',
      issuer: 'text-neon-cyan',
      link: 'text-neon-cyan hover:text-neon-pink border-neon-cyan/50 bg-neon-cyan/10 hover:bg-neon-pink/10 hover:border-neon-pink/50',
    },
    pink: {
      border: 'border-neon-pink/30',
      icon: 'text-neon-pink',
      bg: 'bg-neon-pink/10',
      issuer: 'text-neon-pink',
      link: 'text-neon-pink hover:text-neon-cyan border-neon-pink/50 bg-neon-pink/10 hover:bg-neon-cyan/10 hover:border-neon-cyan/50',
    },
    purple: {
      border: 'border-neon-purple/30',
      icon: 'text-neon-purple',
      bg: 'bg-neon-purple/10',
      issuer: 'text-neon-purple',
      link: 'text-neon-purple hover:text-neon-cyan border-neon-purple/50 bg-neon-purple/10 hover:bg-neon-cyan/10 hover:border-neon-cyan/50',
    },
  };

  const c = colorMap[glow];

  return (
    <FloatingCard
      glow={glow}
      delay={index * 0.1}
      className={`border ${c.border}`}
    >
      <div className="flex gap-5 items-start">
        {/* Icon */}
        <div className={`p-4 ${c.bg} rounded-xl flex-shrink-0`}>
          <Award className={c.icon} size={32} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold font-display text-text-light mb-1.5">
            {cert.title}
          </h3>
          <p className={`font-semibold font-body mb-1 ${c.issuer}`}>{cert.issuer}</p>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={12} className="text-text-muted" />
            <p className="text-text-muted text-xs font-mono">
              Issued: {cert.issueDate}
            </p>
          </div>

          {cert.certificateId && (
            <p className="text-xs font-mono text-text-muted mb-4 truncate">
              ID: <span className="text-text-light/60">{cert.certificateId.slice(0, 20)}…</span>
            </p>
          )}

          {cert.verificationUrl && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-mono transition-all duration-300 ${c.link}`}
            >
              <ExternalLink size={14} /> Verify Certificate
            </motion.a>
          )}
        </div>
      </div>
    </FloatingCard>
  );
}
