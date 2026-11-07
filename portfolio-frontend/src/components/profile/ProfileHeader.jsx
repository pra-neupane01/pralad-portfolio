import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, UserPlus, FileText, Check, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { useToast } from '../../context/ToastContext';

// Animated Taglines to cycle through with realistic typing effect
const TYPING_TAGLINES = [
  'Java Backend Developer | Spring Boot | REST APIs',
  'PostgreSQL · MySQL · Clean Modular Architectures',
  'AI/ML Learner · TensorFlow · Librosa · Audio ML',
  'Building reliable microservices & full-stack web apps',
];

export default function ProfileHeader() {
  const { showToast } = useToast();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Parallax subtle offset on cover
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 400) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Typing effect machine
  useEffect(() => {
    // If user prefers reduced motion, simply show first tagline statically
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(TYPING_TAGLINES[0]);
      return;
    }

    const currentFullText = TYPING_TAGLINES[taglineIndex];
    let timer;

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % TYPING_TAGLINES.length);
    } else {
      const delta = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  const handleFollow = (e) => {
    e.preventDefault();
    setIsFollowing((prev) => !prev);
    if (!isFollowing) {
      showToast('Following Pralad on GitHub! Redirecting...');
      setTimeout(() => window.open(profile.social.github, '_blank'), 600);
    } else {
      showToast('Unfollowed');
    }
  };

  return (
    <div>
      {/* Cover image with fixed 16:7 / 16:5 aspect ratio and subtle parallax */}
      <div className="cover-wrapper" role="img" aria-label="Cover photo - Java and Backend themed">
        <div
          className="cover-image"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            willChange: 'transform',
          }}
        />
      </div>

      {/* Profile info row */}
      <div
        style={{
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 'calc(-1 * clamp(50px, 8vw, 76px))',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
          className="md:flex-row md:items-end md:gap-5"
        >
          {/* Circular Avatar with explicit 1:1 Aspect Ratio and entrance transition */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/pralad-profile.jpeg"
              alt={`${profile.fullName} profile photo`}
              width={168}
              height={168}
              className="avatar-img md:w-[150px] md:h-[150px] lg:w-[168px] lg:h-[168px]"
              style={{
                width: 'clamp(110px, 24vw, 168px)',
                height: 'clamp(110px, 24vw, 168px)',
              }}
              loading="eager"
              fetchpriority="high"
            />
          </div>

          {/* Name & Animated Typing Tagline */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '10px',
            }}
            className="md:text-left md:mt-0 md:flex-1 md:pb-2"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} className="md:justify-start">
              <h1
                style={{
                  fontSize: 'var(--font-size-3xl)',
                  fontWeight: 800,
                  color: 'var(--color-text)',
                  margin: 0,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {profile.fullName}
              </h1>
              <span
                title="Verified Backend Engineer"
                style={{
                  color: 'var(--color-primary)',
                  display: 'inline-flex',
                }}
              >
                <Sparkles size={20} />
              </span>
            </div>

            {/* Dynamic typing tagline */}
            <div
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                margin: '6px 0 0',
                fontWeight: 500,
                minHeight: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="md:justify-start"
            >
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.1em',
                  background: 'var(--color-primary)',
                  marginLeft: '2px',
                  animation: 'blink 1s infinite',
                }}
              />
            </div>
          </div>

          {/* Action buttons (Message, Follow, Resume) */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
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
                gap: '8px',
                padding: '9px 18px',
                background: 'var(--color-primary)',
                color: '#fff',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                minHeight: '44px',
                transition: 'background var(--transition-fast)',
              }}
              className="btn-press"
            >
              <Mail size={17} /> Message
            </Link>

            <button
              onClick={handleFollow}
              aria-label={isFollowing ? 'Following on GitHub' : 'Follow on GitHub'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                background: isFollowing ? 'var(--color-primary-light)' : 'var(--color-comment)',
                color: isFollowing ? 'var(--color-primary)' : 'var(--color-text)',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                cursor: 'pointer',
                minHeight: '44px',
                transition: 'background var(--transition-fast), color var(--transition-fast)',
              }}
              className="btn-press"
            >
              {isFollowing ? <Check size={17} /> : <UserPlus size={17} />}
              <span>{isFollowing ? 'Following' : 'Follow'}</span>
            </button>

            <a
              href={profile.resumePath || '/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                background: 'var(--color-comment)',
                color: 'var(--color-text)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                minHeight: '44px',
                transition: 'background var(--transition-fast)',
              }}
              className="btn-press"
            >
              <FileText size={17} /> Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
