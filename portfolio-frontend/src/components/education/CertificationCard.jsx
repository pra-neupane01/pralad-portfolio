import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Hash, 
  Sparkles, 
  Maximize2, 
  X, 
  Download,
  FileCheck,
  ZoomIn
} from 'lucide-react';

// Helper to resolve public image URLs cleanly across environments (Vite local dev + Vercel deployment)
const resolveImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

export default function CertificationCard({ cert, index }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const rawCertImage = cert.image || cert.imageUrl || cert.badgeUrl;
  const certImage = resolveImageUrl(rawCertImage);

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
        {/* Shimmer accent line at top */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <div>
          {/* Certificate Image Showcase Header (Structured landscape aspect ratio 16:10) */}
          {certImage && !imgError ? (
            <div 
              onClick={() => setIsPreviewOpen(true)}
              className="relative aspect-[16/10] w-full bg-terminal-bg/90 overflow-hidden cursor-pointer border-b border-terminal-border group/img p-2 flex items-center justify-center"
            >
              <img
                src={certImage}
                alt={`${cert.title} Certificate`}
                onError={() => setImgError(true)}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/img:scale-105 rounded border border-terminal-border/30 shadow-md"
              />
              
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-terminal-bg/75 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-terminal-green backdrop-blur-[2px]">
                <div className="p-3 rounded-full bg-terminal-surface border border-terminal-green/40 text-terminal-green shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={22} />
                </div>
                <span className="text-xs font-mono font-medium tracking-wide">
                  Click to View Full Certificate
                </span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-terminal-bg/90 text-[10px] font-mono text-terminal-green border border-terminal-green/30 backdrop-blur-sm">
                Full Certificate
              </div>
            </div>
          ) : (
            <div 
              onClick={() => setIsPreviewOpen(true)}
              className="relative aspect-[16/10] w-full bg-terminal-surfaceLight border-b border-terminal-border flex flex-col items-center justify-center gap-2 cursor-pointer text-terminal-textMuted hover:text-terminal-green transition-colors group/placeholder p-4"
            >
              <div className="w-12 h-12 rounded-full bg-terminal-bg border border-terminal-border flex items-center justify-center group-hover/placeholder:border-terminal-green/40 transition-colors">
                <FileCheck size={24} />
              </div>
              <span className="text-xs font-mono text-terminal-textDim text-center">
                {certImage ? 'Image load error' : 'Click to view details'}
              </span>
            </div>
          )}

          {/* Card Body */}
          <div className="p-6">
            {/* Issuer & Title */}
            <div className="mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-terminal-green mb-1.5">
                <Award size={14} className="shrink-0" />
                <span className="font-semibold uppercase tracking-wider">{cert.issuer}</span>
              </div>
              <h3 
                onClick={() => setIsPreviewOpen(true)}
                className="text-lg font-display font-semibold text-terminal-text hover:text-terminal-green transition-colors cursor-pointer leading-snug"
              >
                {cert.title}
              </h3>
            </div>

            {/* Date & Credential ID */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-terminal-textDim mb-4">
              {cert.date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} className="text-terminal-green/70" />
                  {cert.date}
                </span>
              )}
              {cert.credentialId && (
                <span className="inline-flex items-center gap-1.5 truncate max-w-[240px]" title={cert.credentialId}>
                  <Hash size={12} className="text-terminal-green/70 shrink-0" />
                  <span className="truncate">ID: {cert.credentialId}</span>
                </span>
              )}
            </div>

            {/* Description */}
            {cert.description && (
              <p className="text-xs text-terminal-textMuted leading-relaxed mb-4 line-clamp-2">
                {cert.description}
              </p>
            )}

            {/* Skills Badges */}
            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2">
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
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-terminal-border/40 gap-2 mt-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-textMuted hover:text-terminal-green transition-colors"
          >
            <Maximize2 size={13} /> View Full Image
          </button>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-green hover:underline group/link"
            >
              <Sparkles size={12} className="text-terminal-green/70" />
              Verify
              <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </motion.div>

      {/* ===== Full-Screen Certificate Modal Lightbox ===== */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
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
              {/* Modal Top Header */}
              <div className="px-6 py-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surfaceLight shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-terminal-bg border border-terminal-border flex items-center justify-center text-terminal-green shrink-0">
                    <Award size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-display font-semibold text-terminal-text truncate">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-terminal-textMuted">
                      Issued by <span className="text-terminal-green font-medium">{cert.issuer}</span> {cert.date ? `• ${cert.date}` : ''}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 text-terminal-textMuted hover:text-terminal-text hover:bg-terminal-bg rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body: Full Resolution Certificate Display */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-terminal-bg/80 flex items-center justify-center min-h-[350px]">
                {certImage && !imgError ? (
                  <div className="relative max-w-full max-h-full flex items-center justify-center">
                    <img
                      src={certImage}
                      alt={cert.title}
                      className="max-w-full max-h-[65vh] w-auto h-auto object-contain rounded-lg border border-terminal-border shadow-2xl"
                    />
                  </div>
                ) : (
                  <div className="text-center p-8 max-w-md">
                    <Award size={48} className="mx-auto mb-3 text-terminal-textDim" />
                    <p className="text-sm text-terminal-textMuted mb-2">
                      Certificate image preview
                    </p>
                    <code className="text-xs font-mono text-terminal-green bg-terminal-surfaceLight px-2.5 py-1 rounded border border-terminal-border block truncate">
                      {rawCertImage}
                    </code>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-terminal-border bg-terminal-surfaceLight flex flex-wrap items-center justify-between gap-4 shrink-0">
                {/* Left: Credential ID & Skills */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-terminal-textMuted min-w-0">
                  {cert.credentialId && (
                    <span className="bg-terminal-bg px-2.5 py-1 rounded border border-terminal-border text-[11px] truncate max-w-xs" title={cert.credentialId}>
                      ID: {cert.credentialId}
                    </span>
                  )}
                  {cert.skills && (
                    <div className="hidden sm:flex items-center gap-1.5">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="tech-badge text-[10px] py-0.5 px-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Action Buttons */}
                <div className="flex items-center gap-3 ml-auto">
                  {certImage && !imgError && (
                    <>
                      <a
                        href={certImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-terminal-bg border border-terminal-border text-terminal-text hover:text-terminal-green hover:border-terminal-green/50 transition-colors"
                      >
                        <ExternalLink size={13} /> Open Image
                      </a>

                      <a
                        href={certImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-terminal-bg border border-terminal-border text-terminal-text hover:text-terminal-green hover:border-terminal-green/50 transition-colors"
                      >
                        <Download size={13} /> Download
                      </a>
                    </>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded bg-terminal-green text-terminal-bg font-semibold hover:bg-terminal-green/90 transition-colors"
                    >
                      <Sparkles size={13} /> Verify Credential
                    </a>
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
