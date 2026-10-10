import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  ExternalLink,
  Calendar,
  Tag,
  Maximize2,
  X,
  Download,
  Star,
} from 'lucide-react';

const categoryConfig = {
  Scholarship: {
    icon: Star,
    color: 'amber',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  Hackathon: {
    icon: Trophy,
    color: 'emerald',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
};

// Helper to resolve public URLs cleanly
const resolveUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

export default function AwardCard({ award, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const config = categoryConfig[award.category] || categoryConfig.Hackathon;
  const CategoryIcon = config.icon;
  const imageUrl = resolveUrl(award.image);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className="terminal-card group relative flex flex-col justify-between overflow-hidden h-full"
      >
        {/* Shimmer accent line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Header Banner */}
        <div
          onClick={() => setIsModalOpen(true)}
          className={`relative aspect-[16/8] w-full ${config.bg} border-b border-terminal-border flex flex-col items-center justify-center gap-3 cursor-pointer group/banner overflow-hidden`}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />

          <div className={`w-16 h-16 rounded-2xl ${config.bg} border ${config.border} flex items-center justify-center group-hover/banner:scale-110 transition-transform duration-300 relative z-10`}>
            <CategoryIcon size={32} className={config.text} />
          </div>

          <span className={`text-xs font-mono font-semibold uppercase tracking-widest ${config.text} relative z-10`}>
            {award.category}
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-terminal-bg/70 opacity-0 group-hover/banner:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
            <div className="p-3 rounded-full bg-terminal-surface border border-terminal-green/40 text-terminal-green shadow-xl transform translate-y-2 group-hover/banner:translate-y-0 transition-transform duration-300">
              <Maximize2 size={22} />
            </div>
            <span className="text-xs font-mono font-medium tracking-wide text-terminal-green">
              View Certificate
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1">
          <div className="mb-3">
            <div className={`flex items-center gap-2 text-xs font-mono mb-1.5 ${config.text}`}>
              <Trophy size={14} className="shrink-0" />
              <span className="font-semibold uppercase tracking-wider">{award.issuer}</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-terminal-text hover:text-terminal-green transition-colors leading-snug">
              {award.slug ? (
                <Link to={`/education/${award.slug}`} className="hover:underline">
                  {award.title}
                </Link>
              ) : (
                <span onClick={() => setIsModalOpen(true)} className="cursor-pointer">{award.title}</span>
              )}
            </h3>
          </div>

          {/* Date */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-terminal-textDim mb-4">
            {award.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} className="text-terminal-green/70" />
                {award.date}
              </span>
            )}
          </div>

          {/* Description */}
          {award.description && (
            <p className="text-xs text-terminal-textMuted leading-relaxed mb-4 line-clamp-3">
              {award.description}
            </p>
          )}

          {/* Tags */}
          {award.tags && award.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {award.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] py-0.5 px-2 rounded border font-mono ${config.badge}`}
                >
                  <Tag size={9} className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-terminal-border/40 gap-2 mt-auto">
          {award.slug ? (
            <Link
              to={`/education/${award.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold"
            >
              <ExternalLink size={13} /> View Page
            </Link>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-textMuted hover:text-terminal-green transition-colors"
            >
              <Maximize2 size={13} /> View Certificate
            </button>
          )}

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-textMuted hover:text-terminal-green transition-colors"
          >
            <Maximize2 size={13} /> Full Image
          </button>
        </div>
      </motion.div>

      {/* ===== Certificate Modal ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-terminal-bg/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-terminal-surface border border-terminal-border rounded-xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surfaceLight shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-lg ${config.bg} border ${config.border} flex items-center justify-center ${config.text} shrink-0`}>
                    <CategoryIcon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-display font-semibold text-terminal-text truncate">
                      {award.title}
                    </h3>
                    <p className="text-xs font-mono text-terminal-textMuted">
                      Issued by <span className={`${config.text} font-medium`}>{award.issuer}</span>
                      {award.date ? ` • ${award.date}` : ''}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-terminal-textMuted hover:text-terminal-text hover:bg-terminal-bg rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body: Certificate Image */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-terminal-bg/80 flex items-center justify-center min-h-[400px]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={award.title}
                    className="max-w-full max-h-[65vh] w-auto h-auto object-contain rounded-lg border border-terminal-border shadow-2xl"
                  />
                ) : (
                  <div className="text-center p-8 max-w-md">
                    <Trophy size={48} className="mx-auto mb-3 text-terminal-textDim" />
                    <p className="text-sm text-terminal-textMuted mb-2">Certificate preview</p>
                    <p className="text-xs text-terminal-textDim">{award.description}</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-terminal-border bg-terminal-surfaceLight flex flex-wrap items-center justify-between gap-4 shrink-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  {award.tags?.map((tag) => (
                    <span key={tag} className={`text-[10px] py-0.5 px-2 rounded border font-mono ${config.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 ml-auto">
                  {imageUrl && (
                    <>
                      <a
                        href={imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-terminal-bg border border-terminal-border text-terminal-text hover:text-terminal-green hover:border-terminal-green/50 transition-colors"
                      >
                        <ExternalLink size={13} /> Open Image
                      </a>
                      <a
                        href={imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded bg-terminal-green text-terminal-bg font-semibold hover:bg-terminal-green/90 transition-colors"
                      >
                        <Download size={13} /> Download
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
