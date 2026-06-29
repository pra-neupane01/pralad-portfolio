import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { HiArrowDownTray, HiEnvelope, HiMapPin, HiPaperAirplane, HiSignal } from "react-icons/hi2";
import SectionTitle from "../components/SectionTitle.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import { db, isFirebaseConfigured } from "../firebase/firebaseConfig.js";
import { profile, resumePath } from "../data/socials.js";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in every required field." });
      return;
    }

    if (!isFirebaseConfigured || !db) {
      setStatus({
        type: "error",
        message: "Firebase is not configured yet. Add your Vite .env values to enable Firestore messages.",
      });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Sending message..." });
      await addDoc(collection(db, "contactMessages"), {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
        source: "portfolio-contact-page",
      });
      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent. Thank you for reaching out." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "The form could not send right now. Please email me directly.",
      });
    }
  };

  return (
    <section className="page-container py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Contact Console"
            title="Open to collaboration, networking, and backend-focused software ideas."
            description="Send a message for Java, Spring Boot, API, database, or full-stack collaboration. The form is prepared for Firebase Firestore once your project is configured."
          />

          <div className="mt-8 grid gap-4">
            <div className="soft-card">
              <HiEnvelope className="text-2xl text-cyan" />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block text-lg font-black text-white hover:text-cyan"
              >
                {profile.email}
              </a>
            </div>
            <div className="soft-card">
              <HiSignal className="text-2xl text-cyan" />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                Networking
              </p>
              <strong className="mt-2 block text-lg text-white">Open to developer connections</strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Especially around Java, backend systems, databases, and practical software projects.
              </p>
            </div>
            <div className="soft-card">
              <HiMapPin className="text-2xl text-cyan" />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                Region
              </p>
              <strong className="mt-2 block text-lg text-white">{profile.location}</strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">General location only.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <SocialLinks />
            <a href={resumePath} download className="secondary-button">
              <HiArrowDownTray />
              Resume
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-panel rounded-3xl p-5 sm:p-7"
          onSubmit={submitForm}
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-black text-white">Full name</span>
              <input
                name="fullName"
                value={form.fullName}
                onChange={updateForm}
                className="rounded-xl border border-line bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan"
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-white">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateForm}
                className="rounded-xl border border-line bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan"
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-white">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={updateForm}
                className="rounded-xl border border-line bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan"
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-white">Message</span>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={updateForm}
                className="rounded-xl border border-line bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan"
                required
              />
            </label>

            <button
              type="submit"
              className="primary-button w-full"
              disabled={status.type === "loading"}
            >
              <HiPaperAirplane />
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                className={`rounded-xl border px-4 py-3 text-sm font-bold ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                    : status.type === "error"
                      ? "border-red-400/30 bg-red-400/10 text-red-200"
                      : "border-line bg-white/[0.04] text-slate-300"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </motion.form>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-slate-950/60">
        <div className="border-b border-line p-5">
          <h2 className="text-xl font-black text-white">Sundarharaicha / Itahari Region, Nepal</h2>
          <p className="mt-2 text-sm text-slate-400">
            A regional map signal for visitors while keeping the exact home address private.
          </p>
        </div>
        <iframe
          title="Sundarharaicha / Itahari region map"
          className="h-[360px] w-full grayscale invert-[0.9] contrast-75"
          src="https://www.openstreetmap.org/export/embed.html?bbox=87.15%2C26.35%2C87.65%2C26.85&layer=mapnik&marker=26.65%2C87.35"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
