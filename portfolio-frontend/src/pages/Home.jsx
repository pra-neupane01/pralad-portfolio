import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiArrowDownTray,
  HiArrowRight,
  HiCircleStack,
  HiCodeBracket,
  HiCpuChip,
  HiServerStack,
  HiUserGroup,
} from "react-icons/hi2";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import { projects } from "../data/projects.js";
import { roleTexts, skillGroups } from "../data/skills.js";
import { profile, resumePath } from "../data/socials.js";

const stats = [
  { label: "Projects Built", value: "10+", icon: HiCodeBracket },
  { label: "Technologies Learned", value: "20+", icon: HiCircleStack },
  { label: "Internship Experience", value: "Active", icon: HiServerStack },
  { label: "Open to Collaborate", value: "Yes", icon: HiUserGroup },
];

const philosophy = [
  {
    title: "Clean Architecture",
    description: "I care about code organization, clear responsibilities, and projects that are easy to extend.",
  },
  {
    title: "Scalable APIs",
    description: "My strongest interest is designing backend flows that handle real data and real users.",
  },
  {
    title: "Continuous Learning",
    description: "I am building skill depth through college, internship work, and public repositories.",
  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const featuredProjects = useMemo(() => projects.filter((project) => project.major).slice(0, 3), []);
  const previewSkills = skillGroups.flatMap((group) => group.skills).slice(0, 18);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roleTexts.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <AnimatedBackground />
        <div className="page-container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-black uppercase tracking-[0.28em] text-cyan"
            >
              {profile.location}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            >
              {profile.displayName}
              <span className="block bg-gradient-to-r from-cyan via-blue-200 to-violet bg-clip-text text-transparent">
                {roleTexts[roleIndex]}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-6 max-w-2xl text-lg leading-9 text-slate-300"
            >
              I am a backend developer and undergraduate IT student focused on Java, Spring Boot,
              Node.js, Express, databases, networking fundamentals, and scalable API systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/projects" className="primary-button">
                View Projects
                <HiArrowRight />
              </Link>
              <a href={resumePath} download className="secondary-button">
                <HiArrowDownTray />
                Download Resume
              </a>
              <Link to="/contact" className="secondary-button">
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-8"
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            className="glass-panel rounded-3xl p-5"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-sm font-black text-slate-400">backend.profile</span>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-cyan/30 bg-cyan/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">
                  Currently
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">Intern at {profile.internship}</h2>
                <p className="mt-2 leading-7 text-slate-300">
                  Student at {profile.college}, building stronger backend habits through real
                  projects and internship learning.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="rounded-2xl border border-line bg-white/[0.04] p-4">
                      <Icon className="text-2xl text-cyan" />
                      <strong className="mt-4 block text-2xl font-black text-white">{stat.value}</strong>
                      <span className="text-sm font-semibold text-slate-400">{stat.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-line bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <HiCpuChip className="text-2xl text-violet" />
                  <h3 className="text-lg font-black text-white">Currently Building</h3>
                </div>
                <p className="leading-7 text-slate-400">
                  Spring Boot backend systems, REST APIs, PostgreSQL/MySQL data models, and project
                  architecture that can grow beyond class assignments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-container py-20">
        <SectionTitle
          eyebrow="Featured Work"
          title="Backend-heavy projects with real workflows."
          description="A preview of the strongest systems from my GitHub portfolio."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-slate-950/35 py-20">
        <div className="page-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Backend Toolbox"
            title="Skills I am actively sharpening."
            description="The portfolio is data-driven so these skills can be edited from one place."
          />
          <div className="flex flex-wrap gap-3">
            {previewSkills.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-20">
        <SectionTitle
          eyebrow="Code Philosophy"
          title="How I want my work to feel."
          description="Simple principles I am practicing as I grow into backend engineering."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {philosophy.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="soft-card"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
