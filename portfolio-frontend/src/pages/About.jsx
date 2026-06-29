import { motion } from "framer-motion";
import { HiArrowDownTray, HiCircleStack, HiCpuChip, HiServerStack } from "react-icons/hi2";
import ExperienceCard from "../components/ExperienceCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import { profile, resumePath } from "../data/socials.js";

const timeline = [
  {
    label: "Education",
    title: "Undergraduate IT Student - Itahari International College",
    description:
      "Studying computing foundations while turning course concepts into practical software projects.",
  },
  {
    label: "Learning",
    title: "Backend Development Learning Journey - Java, Spring Boot, Node.js",
    description:
      "Building a strong foundation in APIs, databases, server-side architecture, and clean project structure.",
  },
  {
    label: "Internship",
    title: "Internship - Sitoula Tech Solutions",
    description:
      "Learning professional development habits, collaboration, debugging, and real-world project flow.",
  },
  {
    label: "Projects",
    title: "Building real-world projects - SajiloYatra, TrustMart, Restaurant-App",
    description:
      "Practicing booking systems, marketplace workflows, restaurant APIs, and database-backed features.",
  },
];

const focusAreas = [
  "Spring Boot backend systems",
  "REST APIs",
  "PostgreSQL/MySQL",
  "Networking fundamentals",
  "Clean code and project architecture",
];

const networkNodes = ["API", "Database", "Auth", "Cloud", "Security", "Network"];

export default function About() {
  return (
    <>
      <section className="page-container py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="About"
              title="Backend developer growing through projects, internship work, and systems thinking."
              description={`I am ${profile.displayName}, also known as ${profile.alternateName}. I am an undergraduate IT student at ${profile.college} and currently doing an internship at ${profile.internship}.`}
            />
            <p className="mt-6 leading-8 text-slate-400">
              My interest is centered on backend development, networking, APIs, databases, and
              scalable systems. I enjoy taking real-world ideas like bus booking, marketplaces, and
              restaurant workflows, then shaping them into structured backend projects.
            </p>
            <a href={resumePath} download className="primary-button mt-8">
              <HiArrowDownTray />
              Download Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-3xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-line bg-white/[0.04] p-5">
                <HiServerStack className="text-3xl text-cyan" />
                <h3 className="mt-5 font-black text-white">Backend</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">APIs, services, architecture.</p>
              </div>
              <div className="rounded-2xl border border-line bg-white/[0.04] p-5">
                <HiCircleStack className="text-3xl text-cyan" />
                <h3 className="mt-5 font-black text-white">Databases</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">PostgreSQL, MySQL, schemas.</p>
              </div>
              <div className="rounded-2xl border border-line bg-white/[0.04] p-5">
                <HiCpuChip className="text-3xl text-cyan" />
                <h3 className="mt-5 font-black text-white">Networking</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">Security and cloud basics.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-slate-950/35 py-20">
        <div className="page-container">
          <SectionTitle
            eyebrow="Timeline"
            title="The path I am building."
            description="A simple view of where I am learning, working, and applying my skills."
          />
          <div className="mt-12 grid gap-8">
            {timeline.map((item, index) => (
              <ExperienceCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Focus Now"
              title="What I am focused on now."
              description="These are the skills and practices I want to keep improving through internship work and projects."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((focus) => (
                <SkillBadge key={focus}>{focus}</SkillBadge>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <h3 className="text-xl font-black text-white">Networking Interest</h3>
            <p className="mt-3 leading-7 text-slate-400">
              I am interested in backend systems that connect clean APIs, secure access, database
              consistency, cloud deployment, and networking fundamentals.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {networkNodes.map((node) => (
                <div
                  key={node}
                  className="rounded-2xl border border-cyan/25 bg-cyan/10 p-4 text-center text-sm font-black text-cyan"
                >
                  {node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
