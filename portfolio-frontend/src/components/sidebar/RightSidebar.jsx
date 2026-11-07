import { ExternalLink, Github } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { projectsData } from '../../data/projects';
import { profile } from '../../data/profile';

export default function RightSidebar() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Skills */}
      <div className="card" style={{ padding: '16px' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 12px',
          }}
        >
          Skills
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {allSkills.map((skill) => (
            <span className="chip" key={skill.name}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="card" style={{ padding: '16px' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 12px',
          }}
        >
          Featured Projects
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {featuredProjects.map((p) => (
            <a
              key={p.id}
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--color-text)',
                transition: 'background var(--transition-fast)',
              }}
              className="hover:bg-[var(--color-card-hover)]"
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                }}
              >
                {p.title.charAt(0)}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                  {p.category} • {p.period}
                </div>
              </div>
              <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.4, flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text)',
          textDecoration: 'none',
        }}
      >
        <Github size={18} />
        View GitHub Profile
      </a>
    </div>
  );
}
