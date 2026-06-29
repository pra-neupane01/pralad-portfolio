import { motion } from "framer-motion";
import {
  HiArrowDownTray,
  HiCircleStack,
  HiCodeBracketSquare,
  HiCpuChip,
  HiServerStack,
  HiShieldCheck,
} from "react-icons/hi2";
import ExperienceCard from "../components/ExperienceCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import { profile, resumePath } from "../data/socials.js";

const timeline = [
  {
    label: "2025 - Present",
    title: "BSc (Hons) Computing - Itahari International College",
    description:
      "Studying computing through the London Metropolitan University pathway while converting classroom concepts into working software projects.",
  },
  {
    label: "2022 - 2024",
    title: "+2 Science - Bright Future Secondary School",
    description:
      "Built analytical thinking, problem-solving discipline, and the technical base that supports my computing path.",
  },
  {
    label: "Projects",
    title: "Java, Spring Boot, APIs, databases, and clean architecture",
    description:
      "Building systems such as SajiloYatra, TrustMart, Restaurant-App, and Java OOP management applications to sharpen backend design.",
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

const developerDna = [
  {
    title: "Object-first thinking",
    description: "I like turning real-world workflows into clear models, services, and responsibilities.",
    icon: HiCodeBracketSquare,
  },
  {
    title: "Reliable APIs",
    description: "My direction is backend systems that are predictable, documented, and easy to extend.",
    icon: HiServerStack,
  },
  {
    title: "Data discipline",
    description: "I care about clean schemas, relationships, validation, and keeping application data trustworthy.",
    icon: HiCircleStack,
  },
  {
    title: "Security mindset",
    description: "Authentication, authorization, networking fundamentals, and safe access patterns interest me.",
    icon: HiShieldCheck,
  },
];

export default function About() {
  return (
    <>
      <section className="page-container py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="About"
              title="A Java-focused developer building toward scalable backend engineering."
              description={`I am ${profile.displayName}, also known as ${profile.alternateName}. I am pursuing ${profile.degree} at ${profile.college}, affiliated with ${profile.university}.`}
            />
            <p className="mt-6 leading-8 text-slate-400">
              My goal is to become a skilled Java developer who builds efficient, scalable, and
              reliable software. I focus on Java, Spring Boot, REST APIs, databases, OOP,
              networking fundamentals, and clean code because those are the foundations of systems
              that can grow without becoming fragile.
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
            title="Education and technical direction."
            description="A focused view of where I am studying and the engineering path I am building."
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
              title="Developer DNA."
              description="The habits and technical instincts I want my portfolio to communicate clearly."
            />
            <div className="mt-8 grid gap-4">
              {developerDna.map((item) => (
                <div key={item.title} className="soft-card flex gap-4">
                  <item.icon className="mt-1 shrink-0 text-2xl text-cyan" />
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                </div>
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
            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((focus) => (
                <SkillBadge key={focus}>{focus}</SkillBadge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
