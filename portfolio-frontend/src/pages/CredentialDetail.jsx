import { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Building2,
  Award,
  ShieldCheck,
  ExternalLink,
  Download,
  Share2,
  CheckCircle2,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { certificationsData } from '../data/certifications';
import { awardsData } from '../data/awards';

// Helper to resolve asset URLs
const resolveUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

export default function CredentialDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const credential = useMemo(() => {
    if (!slug) return null;
    const targetSlug = slug.toLowerCase().trim();

    // 1. Search certifications
    const cert = certificationsData.find(
      (c) =>
        c.slug?.toLowerCase() === targetSlug ||
        c.id?.toString() === targetSlug
    );
    if (cert) return { ...cert, isAward: false };

    // 2. Search awards
    const award = awardsData.find(
      (a) =>
        a.slug?.toLowerCase() === targetSlug ||
        a.id?.toString() === targetSlug ||
        (targetSlug === 'aaa-scholarship' && a.slug === 'aaa') ||
        (targetSlug === 'hackathon-winner' && a.slug === 'hackathon')
    );
    if (award) return { ...award, isAward: true };

    return null;
  }, [slug]);

  if (!credential) {
    return (
      <div className="py-20 max-w-3xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
          <Award size={32} />
        </div>
        <h2 className="text-2xl font-display font-bold text-slate-100">
          Credential Not Found
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          No certification or award matched the endpoint <code className="text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">/education/{slug}</code>.
        </p>
        <div className="pt-4">
          <Link
            to="/education"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Education & Recognition
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = resolveUrl(credential.image);
  const isAward = credential.isAward;

  return (
    <div className="py-8 md:py-16 max-w-5xl mx-auto space-y-8 px-4 sm:px-6">
      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center justify-between"
      >
        <button
          onClick={() => navigate('/education')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors bg-white/[0.03] border border-white/[0.08] px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft size={14} /> Back to Education
        </button>

        <span className={`text-xs font-mono px-3 py-1 rounded-full border uppercase tracking-wider ${
          isAward
            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        }`}>
          {isAward ? '🏆 Award / Recognition' : '🛡️ Certification'}
        </span>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column — 5 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="obsidian-card p-6 md:p-8 space-y-6 relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                {isAward ? <Trophy size={16} className="text-amber-400" /> : <ShieldCheck size={16} />}
                <span>{credential.issuer}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-bold text-slate-100 leading-tight">
                {credential.title}
              </h1>
            </div>

            {/* Meta badges */}
            <div className="space-y-3 pt-2 border-t border-white/[0.08]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Calendar size={13} className="text-slate-500" /> Issued Date
                </span>
                <span className="text-slate-200 font-semibold">{credential.date}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Building2 size={13} className="text-slate-500" /> Issuer
                </span>
                <span className="text-slate-200 font-semibold">{credential.issuer}</span>
              </div>

              {credential.category && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono flex items-center gap-1.5">
                    <Sparkles size={13} className="text-slate-500" /> Category
                  </span>
                  <span className="text-emerald-400 font-mono font-medium">{credential.category}</span>
                </div>
              )}

              {credential.credentialId && (
                <div className="pt-2 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono text-slate-500 mb-1">Credential ID:</p>
                  <p className="text-xs font-mono text-slate-300 bg-[#060911] p-2 rounded-lg border border-white/[0.06] break-all">
                    {credential.credentialId}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2 pt-2 border-t border-white/[0.08]">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">// Description</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {credential.description}
              </p>
            </div>

            {/* Skills / Tags */}
            {(credential.skills || credential.tags) && (
              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">// Competencies & Focus</p>
                <div className="flex flex-wrap gap-1.5">
                  {(credential.skills || credential.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
              {imageUrl && (
                <a
                  href={imageUrl}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs font-medium hover:bg-emerald-500/20 transition-all"
                >
                  <Download size={14} /> Download Certificate
                </a>
              )}
              {credential.credentialUrl && credential.credentialUrl !== '#' && (
                <a
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] text-slate-200 border border-white/[0.1] font-mono text-xs font-medium hover:bg-white/[0.1] transition-all"
                >
                  <ExternalLink size={14} /> Verify Online
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Preview Column — 7 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7 space-y-4"
        >
          <div className="obsidian-card p-4 sm:p-6 space-y-4 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Verified Document View
              </span>
              {imageUrl && (
                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  Open Original <ExternalLink size={12} />
                </a>
              )}
            </div>

            {/* Certificate Preview Frame */}
            <div className="relative rounded-xl overflow-hidden bg-[#060911] border border-white/[0.08] min-h-[350px] sm:min-h-[480px] flex items-center justify-center p-2 group">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={credential.title}
                  className="w-full h-auto max-h-[700px] object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              ) : (
                <p className="text-slate-500 text-sm font-mono">No document preview available</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
