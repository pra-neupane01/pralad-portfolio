import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import UnlockHero from "../components/UnlockHero.jsx";
import { projects } from "../data/projects.js";
import { skillGroups } from "../data/skills.js";

const identityCards = [
  "Java-focused Developer",
  "Backend & API Builder",
  "BSc Computing Student",
  "Networking Enthusiast",
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const previewSkills = skillGroups.flatMap((group) => group.skills).slice(0, 20);

  return (
    <>
      <div className="relative">
        <AnimatedBackground />
        <UnlockHero />
      </div>

      <section className="page-container py-20">
        <div className="grid gap-4 md:grid-cols-4">
          {identityCards.map((card, index) => (
            <motion.article
              key={card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06 }}
              className="soft-card"
            >
              <span className="mono text-xs font-black uppercase tracking-[0.2em] text-cyan">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-white">{card}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-emerald-950/10 py-20">
        <div className="page-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionTitle
            eyebrow="Skill Preview"
            title="A green stack built around Java and backend systems."
            description="The focus is backend architecture, OOP, REST APIs, databases, clean code, and practical problem solving."
          />
          <div className="flex flex-wrap gap-3">
            {previewSkills.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Featured Project Lab"
            title="Systems that show how I think."
            description="Major projects are shaped around Java/Spring Boot, backend workflows, and real-world data models."
          />
          <Link to="/projects" className="secondary-button w-fit">
            Open Project Lab
            <HiArrowRight />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="page-container pb-20">
        <div className="glass-panel rounded-3xl p-8 text-center">
          <p className="mono text-sm font-black uppercase tracking-[0.24em] text-cyan">
            Open to collaboration
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white md:text-5xl">
            Let&apos;s build reliable APIs, Java systems, and real-world backend projects.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="primary-button">
              Contact Me
            </Link>
            <Link to="/playground" className="secondary-button">
              Try Playground
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
