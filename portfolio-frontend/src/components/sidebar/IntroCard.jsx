import { useState, useEffect } from 'react';
import { MapPin, Briefcase, GraduationCap, ExternalLink, Github, Linkedin, Instagram, Mail as MailIcon } from 'lucide-react';
import { profile } from '../../data/profile';
import { educationData } from '../../data/education';

export default function IntroCard() {
  const edu = educationData[0];

  // Animated counters for stats
  const [stats, setStats] = useState({ projects: 0, repos: 0, certs: 0 });

  useEffect(() => {
    // If reduced motion, jump to end values
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStats({ projects: 6, repos: 12, certs: 4 });
      return;
    }

    let start = 0;
    const end = { projects: 6, repos: 12, certs: 4 };
    const duration = 1200;
    const stepTime = 40;
    const steps = duration / stepTime;

    const timer = setInterval(() => {
      start++;
      const progress = start / steps;
      setStats({
        projects: Math.min(end.projects, Math.round(end.projects * progress)),
        repos: Math.min(end.repos, Math.round(end.repos * progress)),
        certs: Math.min(end.certs, Math.round(end.certs * progress)),
      });

      if (start >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card reveal-init" style={{ padding: '18px' }}>
      <h2
        style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: 700,
          color: 'var(--color-text)',
          margin: '0 0 12px',
        }}
      >
        Intro
      </h2>

      <p
        style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
          margin: '0 0 16px',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        {profile.introLine}
      </p>

      {/* Animated Quick Stats Counters */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          padding: '12px 0',
          borderTop: '1px solid var(--color-border-light)',
          borderBottom: '1px solid var(--color-border-light)',
          marginBottom: '16px',
          textAlign: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, color: 'var(--color-primary)' }}>
            {stats.projects}+
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Projects</div>
        </div>
        <div>
          <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, color: 'var(--color-primary)' }}>
            {stats.repos}+
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Repositories</div>
        </div>
        <div>
          <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, color: 'var(--color-primary)' }}>
            {stats.certs}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Credentials</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Role */}
        <InfoRow icon={Briefcase} text={profile.title} />

        {/* Location */}
        <InfoRow icon={MapPin} text={profile.location} />

        {/* Education */}
        <InfoRow
          icon={GraduationCap}
          text={`${edu.degree} at ${edu.institution}`}
          subtext={edu.partner ? `(${edu.partner})` : null}
        />
      </div>

      {/* Social links */}
      <div
        style={{
          borderTop: '1px solid var(--color-border-light)',
          paddingTop: '14px',
          marginTop: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <SocialLink icon={Github} href={profile.social.github} label="GitHub" />
        <SocialLink icon={Linkedin} href={profile.social.linkedin} label="LinkedIn" />
        <SocialLink icon={Instagram} href={profile.social.instagram} label="Instagram" />
        <SocialLink icon={MailIcon} href={`mailto:${profile.social.email}`} label="Email" />
      </div>

      {/* View Resume Button */}
      <a
        href={profile.resumePath || '/resume.pdf'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '10px',
          marginTop: '14px',
          background: 'var(--color-comment)',
          borderRadius: 'var(--radius-md)',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text)',
          textDecoration: 'none',
          minHeight: '44px',
          transition: 'background var(--transition-fast)',
        }}
        className="btn-press hover:bg-[var(--color-card-hover)]"
      >
        View Resume
      </a>
    </div>
  );
}

function InfoRow({ icon: Icon, text, subtext }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)',
      }}
    >
      <Icon size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-text-tertiary)' }} />
      <div>
        <span>{text}</span>
        {subtext && (
          <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: '2px' }}>
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 10px',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--color-primary)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 500,
        textDecoration: 'none',
        minHeight: '44px', // Touch target
        transition: 'background var(--transition-fast)',
      }}
      className="hover:bg-[var(--color-card-hover)]"
      aria-label={label}
    >
      <Icon size={18} />
      <span>{label}</span>
      <ExternalLink size={12} style={{ marginLeft: 'auto', opacity: 0.5 }} />
    </a>
  );
}
