import { socials } from "../data/socials.js";

export default function SocialLinks({ compact = false }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="group inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.04] px-3 py-3 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan/10"
            aria-label={social.label}
          >
            <Icon className="text-lg text-cyan transition group-hover:text-sky-200" />
            {!compact && <span className="text-sm font-semibold">{social.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
