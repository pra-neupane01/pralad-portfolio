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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
      whileHover={{ y: -5 }}
      className="terminal-card p-5 h-full flex flex-col group transition-all duration-300 hover:border-terminal-green/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)]"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2.5 bg-terminal-surfaceLight dark:bg-terminal-surfaceLight text-terminal-text group-hover:text-terminal-green rounded-lg transition-colors duration-300">
          <Icon size={24} title={skill.name} aria-label={skill.name} />
        </div>
      </div>
      
      <div className="mt-auto space-y-1">
        <h3 className="font-mono text-sm font-semibold text-terminal-text dark:text-terminal-text group-hover:text-terminal-green transition-colors">
          {skill.name}
        </h3>
        <p className="text-[11px] font-mono text-terminal-textDim dark:text-terminal-textDim uppercase tracking-wider">
          {skill.label}
        </p>
      </div>
    </motion.div>
  );
}
