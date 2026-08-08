import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { 
  SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiHibernate, 
  SiSpring, SiApachemaven, SiPostgresql, SiTailwindcss, 
  SiPostman, SiSwagger, SiIntellijidea, SiVercel 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io5';
import { Code } from 'lucide-react';

const iconMap = {
  FaJava: FaJava,
  SiSpringboot: SiSpringboot,
  SiSpringsecurity: SiSpringsecurity,
  TbApi: TbApi,
  SiJsonwebtokens: SiJsonwebtokens,
  SiHibernate: SiHibernate,
  SiSpring: SiSpring,
  SiApachemaven: SiApachemaven,
  SiPostgresql: SiPostgresql,
  GrMysql: GrMysql,
  FaReact: FaReact,
  IoLogoJavascript: IoLogoJavascript,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiTailwindcss: SiTailwindcss,
  FaDocker: FaDocker,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  SiPostman: SiPostman,
  SiSwagger: SiSwagger,
  SiIntellijidea: SiIntellijidea,
  SiVercel: SiVercel,
};

export default function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (index % 10) * 0.04 }}
      whileHover={{ y: -4 }}
      className="obsidian-card p-4 flex items-center gap-3.5 group cursor-default"
    >
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all duration-300 shadow-sm shrink-0">
        <Icon size={22} title={skill.name} aria-label={skill.name} />
      </div>
      
      <div className="overflow-hidden">
        <h3 className="font-sans text-xs sm:text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors truncate">
          {skill.name}
        </h3>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider truncate">
          {skill.label}
        </p>
      </div>
    </motion.div>
  );
}

