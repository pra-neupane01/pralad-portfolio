import { Link } from 'react-router-dom';
import { Mail, UserPlus, FileText } from 'lucide-react';
import { profile } from '../../data/profile';

export default function ProfileHeader() {
  return (
    <div>
      {/* Cover image */}
      <div className="cover-image" role="img" aria-label="Cover photo - code and backend development themed" />

      {/* Profile info row */}
      <div
        style={{
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '-48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Responsive header layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
          className="md:flex-row md:items-end md:gap-5"
        >
          {/* Avatar */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/pralad-profile.jpeg"
              alt={`${profile.fullName} profile photo`}
              width={168}
              height={168}
              style={{
                width: '128px',
                height: '128px',
                borderRadius: '50%',
                border: '4px solid var(--color-card)',
                objectFit: 'cover',
                boxShadow: 'var(--shadow-lg)',
              }}
              className="md:w-[150px] md:h-[150px] lg:w-[168px] lg:h-[168px]"
              loading="eager"
              fetchpriority="high"
            />
          </div>

          {/* Name + tagline */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '10px',
            }}
            className="md:text-left md:mt-0 md:flex-1 md:pb-2"
          >
            <h1
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-text)',
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {profile.fullName}
            </h1>
            <p
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                margin: '6px 0 0',
                fontWeight: 500,
              }}
            >
              Java Backend Developer | Spring Boot | REST APIs
            </p>
          </div>

          {/* Action buttons (Right aligned on desktop) */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
            className="md:mt-0 md:mb-2 md:justify-end"
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: 'var(--color-primary)',
                color: '#fff',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'background var(--transition-fast)',
              }}
            >
              <Mail size={16} /> Message
            </Link>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: 'var(--color-comment)',
                color: 'var(--color-text)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'background var(--transition-fast)',
              }}
            >
              <UserPlus size={16} /> Follow
            </a>
            <a
              href={profile.resumePath || '/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: 'var(--color-comment)',
                color: 'var(--color-text)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'background var(--transition-fast)',
              }}
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderBottom: '1px solid var(--color-border)',
          margin: '16px 16px 0',
        }}
      />
    </div>
  );
}
