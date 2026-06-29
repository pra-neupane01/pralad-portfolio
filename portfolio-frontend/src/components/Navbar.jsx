import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiArrowDownTray, HiBars3, HiXMark } from "react-icons/hi2";
import { profile, resumePath } from "../data/socials.js";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "Playground", to: "/playground" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }) =>
  `rounded-xl px-3 py-2 text-sm font-bold transition ${
    isActive
      ? "bg-cyan/10 text-cyan"
      : "text-slate-300 hover:bg-white/[0.055] hover:text-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/75 backdrop-blur-2xl">
      <nav className="page-container flex min-h-20 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan/40 bg-cyan/10 text-sm font-black text-cyan">
            PN
          </span>
          <span>
            <strong className="brand-font block text-base font-black tracking-wide text-white">
              {profile.brand}
            </strong>
            <small className="block text-xs font-semibold text-slate-400">{profile.title}</small>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={resumePath} download className="hidden sm:inline-flex secondary-button">
            <HiArrowDownTray />
            Resume
          </a>
          <button
            className="inline-grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-slate-100 lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {open ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="page-container pb-4 lg:hidden">
          <div className="glass-panel grid gap-1 rounded-2xl p-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a href={resumePath} download className="secondary-button mt-2">
              <HiArrowDownTray />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
