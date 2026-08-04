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
  FileCheck 
} from 'lucide-react';

export default function CertificationCard({ cert, index }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const certImage = cert.image || cert.imageUrl || cert.badgeUrl;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className="terminal-card group relative flex flex-col justify-between overflow-hidden"
      >
        {/* Shimmer accent line at top */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <div>
          {/* Certificate Image Preview Banner */}
          {certImage && !imgError ? (
            <div 
              onClick={() => setIsPreviewOpen(true)}
              className="relative h-48 w-full bg-terminal-surfaceLight overflow-hidden cursor-pointer border-b border-terminal-border group/img"
            >
              <img
                src={certImage}
                alt={`${cert.title} Certificate`}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              />
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-terminal-bg/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-terminal-green backdrop-blur-[2px]">
                <div className="p-2.5 rounded-full bg-terminal-surface border border-terminal-green/40 text-terminal-green shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={20} />
                </div>
                <span className="text-xs font-mono font-medium tracking-wide">
                  Click to View Certificate
                </span>
              </div>

              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-terminal-bg/80 text-[10px] font-mono text-terminal-textDim border border-terminal-border/50">
                JPG Preview
              </div>
            </div>
          ) : (
            <div 
              onClick={() => setIsPreviewOpen(true)}
              className="relative h-40 w-full bg-terminal-surfaceLight border-b border-terminal-border flex flex-col items-center justify-center gap-2 cursor-pointer text-terminal-textMuted hover:text-terminal-green transition-colors group/placeholder"
            >
              <div className="w-12 h-12 rounded-full bg-terminal-bg border border-terminal-border flex items-center justify-center group-hover/placeholder:border-terminal-green/40 transition-colors">
                <FileCheck size={24} />
              </div>
              <span className="text-xs font-mono text-terminal-textDim">
                {certImage ? 'Image placeholder (Add image file)' : 'Click to view details'}
              </span>
            </div>
          )}

          {/* Card Details */}
          <div className="p-6">
            {/* Header: Title + Issuer */}
            <div className="mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-terminal-green mb-1">
                <Award size={14} />
                <span>{cert.issuer}</span>
              </div>
              <h3 
                onClick={() => setIsPreviewOpen(true)}
                className="text-lg font-display font-semibold text-terminal-text hover:text-terminal-green transition-colors cursor-pointer leading-snug"
              >
                {cert.title}
              </h3>
            </div>

            {/* Date & Credential ID */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-terminal-textDim mb-4">
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

            {/* Description if provided */}
            {cert.description && (
              <p className="text-xs text-terminal-textMuted leading-relaxed mb-4 line-clamp-2">
                {cert.description}
              </p>
            )}

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
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-terminal-border/40 gap-2">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-textMuted hover:text-terminal-green transition-colors"
          >
            <Maximize2 size={13} /> View Full
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute inset-0 bg-terminal-bg/85 backdrop-blur-md"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-terminal-surface border border-terminal-border rounded-xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surfaceLight">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-terminal-bg border border-terminal-border flex items-center justify-center text-terminal-green shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-display font-semibold text-terminal-text truncate">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-terminal-textMuted">
                      Issued by {cert.issuer} {cert.date ? `• ${cert.date}` : ''}
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

              {/* Modal Body: Certificate Image Showcase */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-terminal-bg/50 flex flex-col items-center justify-center min-h-[300px]">
                {certImage && !imgError ? (
                  <div className="relative group max-w-full">
                    <img
                      src={certImage}
                      alt={cert.title}
                      className="max-w-full max-h-[60vh] object-contain rounded-lg border border-terminal-border shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="text-center p-8 max-w-md">
                    <Award size={48} className="mx-auto mb-3 text-terminal-textDim" />
                    <p className="text-sm text-terminal-textMuted mb-2">
                      Certificate image preview will display here once you add the JPG image file to:
                    </p>
                    <code className="text-xs font-mono text-terminal-green bg-terminal-surfaceLight px-2 py-1 rounded border border-terminal-border block truncate">
                      public{cert.image || '/certifications/cert-name.jpg'}
                    </code>
                  </div>
                )}
              </div>

              {/* Modal Footer / Details */}
              <div className="px-6 py-4 border-t border-terminal-border bg-terminal-surfaceLight flex flex-wrap items-center justify-between gap-4">
                {/* Left: Credential ID & Skills */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-terminal-textMuted">
                  {cert.credentialId && (
                    <span className="bg-terminal-bg px-2.5 py-1 rounded border border-terminal-border">
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

                {/* Right: Actions */}
                <div className="flex items-center gap-3 ml-auto">
                  {certImage && !imgError && (
                    <a
                      href={certImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-terminal-bg border border-terminal-border text-terminal-text hover:text-terminal-green hover:border-terminal-green/50 transition-colors"
                    >
                      <Download size={13} /> Download JPG
                    </a>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-terminal-green text-terminal-bg font-semibold hover:bg-terminal-green/90 transition-colors"
                    >
                      <Sparkles size={13} /> Verify Credential
                      <ExternalLink size={12} />
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
