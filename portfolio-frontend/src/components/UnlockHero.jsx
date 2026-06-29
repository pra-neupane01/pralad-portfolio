import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDownTray, HiArrowRight, HiLockOpen } from "react-icons/hi2";
import Button from "./Button.jsx";
import SkillBadge from "./SkillBadge.jsx";
import { profile, resumePath } from "../data/socials.js";
import { roleTexts, skillGroups } from "../data/skills.js";

const identityCards = [
  "Java-focused Developer",
  "Backend & API Builder",
  "BSc Computing Student",
  "Networking Enthusiast",
];

export default function UnlockHero() {
  const [unlocked, setUnlocked] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const previewSkills = skillGroups.flatMap((group) => group.skills).slice(0, 14);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roleTexts.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="page-container relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono text-sm font-black uppercase tracking-[0.28em] text-cyan"
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
            <span className="block bg-gradient-to-r from-emerald-300 via-lime-200 to-green-500 bg-clip-text text-transparent">
              {roleTexts[roleIndex]}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-6 max-w-2xl text-lg leading-9 text-slate-300"
          >
            Backend-focused developer crafting reliable systems with Java, APIs, databases, and
            clean architecture.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="glass-panel relative overflow-hidden rounded-3xl p-5"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/25 p-5">
            <p className="mono text-xs font-black uppercase tracking-[0.24em] text-cyan">
              secure portfolio gate
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">Unlock technical profile</h2>
            <p className="mt-3 leading-7 text-slate-400">
              A Java-focused computing student building toward efficient, scalable, and reliable
              backend software.
            </p>
            {!unlocked && (
              <button onClick={() => setUnlocked(true)} className="primary-button mt-6 w-full">
                <HiLockOpen />
                Unlock Portfolio
              </button>
            )}
          </div>

          <AnimatePresence>
            {unlocked && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {identityCards.map((card) => (
                    <div key={card} className="rounded-2xl border border-line bg-white/[0.04] p-4">
                      <span className="mono text-xs font-black uppercase tracking-[0.18em] text-cyan">
                        identity
                      </span>
                      <strong className="mt-2 block text-white">{card}</strong>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-line bg-white/[0.04] p-5">
                  <h3 className="text-xl font-black text-white">About preview</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    Currently pursuing {profile.degree} at {profile.college}, affiliated with{" "}
                    {profile.university}. Focused on Java, Spring Boot, REST APIs, OOP, databases,
                    and backend architecture.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {previewSkills.map((skill) => (
                      <SkillBadge key={skill}>{skill}</SkillBadge>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button to="/projects">
                    View Projects
                    <HiArrowRight />
                  </Button>
                  <Button href={resumePath} download variant="secondary">
                    <HiArrowDownTray />
                    Download Resume
                  </Button>
                  <Button to="/contact" variant="secondary">
                    Contact Me
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
