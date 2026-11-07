import { MapPin, Briefcase, GraduationCap, ExternalLink, Github, Linkedin, Instagram, Mail as MailIcon } from 'lucide-react';
import { profile } from '../../data/profile';
import { educationData } from '../../data/education';

export default function IntroCard() {
  const edu = educationData[0]; // Current education

  return (
    <div className="card" style={{ padding: '16px' }}>
      <h2
        style={{
          fontSize: 'var(--font-size-xl)',
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
          margin: '0 0 14px',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        {profile.introLine}
      </p>

      <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '12px' }}>
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
          paddingTop: '12px',
          marginTop: '12px',
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

      {/* View Resume */}
      <a
        href={profile.resumePath || '/resume.pdf'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '8px',
          marginTop: '12px',
          background: 'var(--color-comment)',
          borderRadius: 'var(--radius-md)',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text)',
          textDecoration: 'none',
          transition: 'background var(--transition-fast)',
        }}
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
        gap: '10px',
        marginBottom: '10px',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)',
      }}
    >
      <Icon size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-text-tertiary)' }} />
      <div>
        <span>{text}</span>
        {subtext && (
          <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
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
        padding: '6px 8px',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--color-primary)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 500,
        textDecoration: 'none',
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
