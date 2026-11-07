import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { projectsData } from '../../data/projects';
import { profile } from '../../data/profile';

export default function RightSidebar() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Interactive Skills Chip Matrix */}
      <div className="card reveal-init" style={{ padding: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <h3
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 700,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            Core Skills
          </h3>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
            {allSkills.length} Technologies
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {allSkills.map((skill) => (
            <span className="chip" key={skill.name}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects with GitHub Card Style */}
      <div className="card reveal-init" style={{ padding: '18px' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 14px',
          }}
        >
          Featured Work
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
                gap: '12px',
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--color-text)',
                background: 'var(--color-comment)',
                transition: 'background var(--transition-fast), transform var(--transition-fast)',
                minHeight: '44px',
              }}
              className="hover:bg-[var(--color-card-hover)] hover:-translate-y-0.5"
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                }}
              >
                {p.title.charAt(0)}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                  {p.highlight} • {p.period}
                </div>
              </div>
              <ExternalLink size={15} style={{ opacity: 0.4, flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </div>

      {/* GitHub Profile Stat Card */}
      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="card reveal-init btn-press"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 18px',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text)',
          textDecoration: 'none',
          minHeight: '44px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Github size={20} />
          <span>github.com/pra-neupane01</span>
        </div>
        <ExternalLink size={16} style={{ color: 'var(--color-text-tertiary)' }} />
      </a>
    </div>
  );
}
