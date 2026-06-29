import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks.jsx";
import { profile } from "../data/socials.js";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "Playground", to: "/playground" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-slate-950/70 py-10">
      <div className="page-container grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="brand-font text-2xl font-black text-white">{profile.brand}</h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-400">
            Java-focused backend developer building APIs, database-backed systems, and practical
            software projects from Nepal.
          </p>
          <p className="mt-4 text-sm font-semibold text-slate-500">
            Copyright {new Date().getFullYear()} {profile.displayName}. All rights reserved.
          </p>
        </div>
        <div className="grid gap-5 md:justify-items-end">
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-bold text-slate-400 transition hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <SocialLinks compact />
        </div>
      </div>
    </footer>
  );
}
