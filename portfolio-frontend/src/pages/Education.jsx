import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CertificationCard from '../components/education/CertificationCard';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';

export default function Education() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto space-y-16">
      {/* ===== Education Section ===== */}
      <div>
        <SectionHeader 
          title="Education" 
          subtitle="Academic foundation, stream specializations, and qualifications."
        />

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="obsidian-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all shrink-0">
                  <GraduationCap size={24} />
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {item.degree}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-white/[0.04] text-slate-400 border border-white/[0.08] rounded-md uppercase">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-slate-300 font-sans font-semibold text-sm">
                    {item.institution}
                  </p>

                  {item.partner && (
                    <p className="text-slate-400 text-xs font-mono">
                      Partnered with <span className="text-slate-200">{item.partner}</span>
                    </p>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                    <MapPin size={13} className="text-emerald-400" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed max-w-2xl pt-2 font-body">
                    {item.description}
                  </p>

                  {(item.links?.institution || item.links?.partner) && (
                    <div className="flex flex-wrap gap-4 pt-3">
                      {item.links?.institution && (
                        <a 
                          href={item.links.institution}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                        >
                          <ExternalLink size={12} /> College Site
                        </a>
                      )}
                      {item.links?.partner && (
                        <a 
                          href={item.links.partner}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                        >
                          <ExternalLink size={12} /> University Partner
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Certifications Section ===== */}
      <div>
        <SectionHeader
          title="Certifications"
          subtitle="Verified technical credentials and achievements."
        />

        {certificationsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="obsidian-card p-10 text-center max-w-lg mx-auto"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-base font-display font-bold text-slate-100 mb-1">
              Certifications
            </h3>
            <p className="text-xs text-slate-400">
              Professional credentials updated as completed.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

