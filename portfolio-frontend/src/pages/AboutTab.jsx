import { Briefcase, GraduationCap, MapPin, Heart, Zap, Server, Database, Layout, Bug } from 'lucide-react';
import { profile } from '../data/profile';
import { educationData } from '../data/education';
import { servicesData } from '../data/services';

const serviceIcons = { Server, Zap, Database, Layout, Bug };

export default function AboutTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Overview */}
      <section className="card" style={{ padding: '16px' }}>
        <h2 style={sectionTitle}>Overview</h2>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
          {profile.aboutSummary}
        </p>
      </section>

      {/* Career Objective */}
      <section className="card" style={{ padding: '16px' }}>
        <h2 style={sectionTitle}>
          <Heart size={20} style={{ color: 'var(--color-primary)' }} />
          Career Objective
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
          {profile.careerObjective}
        </p>
      </section>

      {/* Work & Location */}
      <section className="card" style={{ padding: '16px' }}>
        <h2 style={sectionTitle}>Details</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <DetailRow icon={Briefcase} label={profile.title} />
          <DetailRow icon={MapPin} label={`Lives in ${profile.location}`} />
          <DetailRow
            icon={GraduationCap}
            label={`Studying ${educationData[0].degree}`}
            sub={`at ${educationData[0].institution} (${educationData[0].partner})`}
          />
        </div>
      </section>

      {/* Education */}
      <section className="card" style={{ padding: '16px' }}>
        <h2 style={sectionTitle}>
          <GraduationCap size={20} style={{ color: 'var(--color-primary)' }} />
          Education
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {educationData.map((edu) => (
            <div key={edu.id}>
              <h3 style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', margin: '0 0 4px', color: 'var(--color-text)' }}>
                {edu.degree}
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: '0 0 2px' }}>
                {edu.institution}
                {edu.partner && ` • ${edu.partner}`}
              </p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', margin: '0 0 4px' }}>
                {edu.period} • {edu.location} • {edu.status}
              </p>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do / Services */}
      <section className="card" style={{ padding: '16px' }}>
        <h2 style={sectionTitle}>
          <Zap size={20} style={{ color: 'var(--color-primary)' }} />
          What I Do
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {servicesData.map((svc) => {
            const IconComp = serviceIcons[svc.icon] || Zap;
            return (
              <div
                key={svc.id}
                style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-comment)',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <IconComp size={18} style={{ color: 'var(--color-primary)' }} />
                  <h3 style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', margin: 0, color: 'var(--color-text)' }}>
                    {svc.title}
                  </h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.4 }}>
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Info */}
      <section className="card" style={{ padding: '16px' }}>
        <h2 style={sectionTitle}>Contact Info</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow label="GitHub" value="pra-neupane01" href={profile.social.github} external />
          <ContactRow label="LinkedIn" value="Pralad Neupane" href={profile.social.linkedin} external />
          <ContactRow label="Instagram" value="@praka5h_n" href={profile.social.instagram} external />
        </div>
      </section>
    </div>
  );
}

const sectionTitle = {
  fontSize: 'var(--font-size-xl)',
  fontWeight: 700,
  margin: '0 0 12px',
  color: 'var(--color-text)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

function DetailRow({ icon: Icon, label, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
      <Icon size={18} style={{ color: 'var(--color-text-tertiary)', marginTop: '2px', flexShrink: 0 }} />
      <div>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>{label}</span>
        {sub && (
          <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}

function ContactRow({ label, value, href, external }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)' }}>
      <span style={{ fontWeight: 600, color: 'var(--color-text-secondary)', minWidth: '80px' }}>{label}</span>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{ color: 'var(--color-primary)' }}
      >
        {value}
      </a>
    </div>
  );
}
