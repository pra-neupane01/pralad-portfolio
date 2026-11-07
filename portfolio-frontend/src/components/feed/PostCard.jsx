import { useState, useCallback } from 'react';
import { ThumbsUp, MessageCircle, Share2, ExternalLink, Copy, Check, Code } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function PostCard({ post }) {
  const { showToast } = useToast();
  const storageKey = `like_${post.id}`;
  const [liked, setLiked] = useState(() => localStorage.getItem(storageKey) === '1');
  const [isPopping, setIsPopping] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const [likeCount, setLikeCount] = useState(() => {
    const base = post.baseLikes || Math.floor(Math.random() * 15) + 3;
    return liked ? base + 1 : base;
  });

  const toggleLike = useCallback(() => {
    setLiked((prev) => {
      const next = !prev;
      if (next) {
        localStorage.setItem(storageKey, '1');
        setLikeCount((c) => c + 1);
        setIsPopping(true);
        setTimeout(() => setIsPopping(false), 350);
      } else {
        localStorage.removeItem(storageKey);
        setLikeCount((c) => c - 1);
      }
      return next;
    });
  }, [storageKey]);

  const handleComment = useCallback(() => {
    window.location.href = `mailto:praladneupane01@gmail.com?subject=Comment on: ${encodeURIComponent(post.title)}`;
  }, [post.title]);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Link copied to clipboard!');
    }
  }, [post.title, post.description, showToast]);

  const handleCopyCode = useCallback((codeSnippet) => {
    navigator.clipboard?.writeText(codeSnippet);
    setCopiedCode(true);
    showToast('Code snippet copied!');
    setTimeout(() => setCopiedCode(false), 2000);
  }, [showToast]);

  return (
    <article className="card card-hover reveal-init" style={{ overflow: 'hidden' }}>
      {/* Author row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '14px 16px',
        }}
      >
        <img
          src="/pralad-profile.jpeg"
          alt="Pralad Neupane"
          width={40}
          height={40}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            aspectRatio: '1 / 1',
            border: '1px solid var(--color-border-light)',
          }}
          loading="lazy"
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
            Pralad Neupane
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            {post.date || post.period} • {post.category}
          </div>
        </div>
        {post.githubUrl && (
          <a
            href={post.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${post.title} on GitHub`}
            style={{
              color: 'var(--color-text-secondary)',
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
            }}
            className="hover:bg-[var(--color-comment)]"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Content description */}
      <div style={{ padding: '0 16px 12px' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 700,
            margin: '0 0 8px',
            color: 'var(--color-text)',
          }}
        >
          {post.highlight && (
            <span
              style={{
                fontSize: 'var(--font-size-xs)',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: 600,
                marginRight: '8px',
                verticalAlign: 'middle',
              }}
            >
              {post.highlight}
            </span>
          )}
          {post.title}
        </h3>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            margin: '0 0 12px',
            lineHeight: 1.55,
          }}
        >
          {post.description}
        </p>

        {/* Tech stack chips */}
        {post.techStack && post.techStack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {post.techStack.map((tech) => (
              <span className="chip" key={tech} style={{ fontSize: '11px', padding: '2px 9px' }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Award/Cert tags */}
        {post.tags && post.tags.length > 0 && !post.techStack && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {post.tags.map((tag) => (
              <span className="chip" key={tag} style={{ fontSize: '11px', padding: '2px 9px' }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Code Snippet Box (if post is code-snippet type) */}
      {post.codeSnippet && (
        <div
          style={{
            background: 'var(--color-code-bg)',
            margin: '0 16px 12px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Code Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 14px',
              background: 'var(--color-code-header)',
              fontSize: '11px',
              color: '#A6ADC8',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code size={14} style={{ color: 'var(--color-primary)' }} />
              <span>{post.codeFileName || 'SampleController.java'}</span>
            </div>
            <button
              onClick={() => handleCopyCode(post.codeSnippet)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: 'transparent',
                border: 'none',
                color: copiedCode ? '#A6E3A1' : '#CDD6F4',
                cursor: 'pointer',
                fontSize: '11px',
              }}
              title="Copy code"
            >
              {copiedCode ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Syntax Code block */}
          <pre
            style={{
              padding: '14px',
              margin: 0,
              fontSize: '12.5px',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.5,
              color: 'var(--color-code-text)',
              overflowX: 'auto',
            }}
          >
            <code>{post.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Image with explicit aspect-ratio to prevent layout shift (CLS < 0.05) */}
      {post.image && (
        <div style={{ width: '100%', overflow: 'hidden', aspectRatio: '16 / 10', background: 'var(--color-comment)' }}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            width={600}
            height={375}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform var(--transition-normal)',
            }}
            className="hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Like count */}
      <div
        style={{
          padding: '10px 16px 2px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-secondary)',
        }}
      >
        <span>{likeCount} likes</span>
      </div>

      {/* Action Buttons with Haptic Press & Like Pop */}
      <div
        style={{
          borderTop: '1px solid var(--color-border-light)',
          margin: '8px 16px 0',
          padding: '4px 0',
          display: 'flex',
        }}
      >
        <ActionButton
          icon={ThumbsUp}
          label="Like"
          active={liked}
          isPopping={isPopping}
          onClick={toggleLike}
          activeColor="var(--color-primary)"
        />
        <ActionButton
          icon={MessageCircle}
          label="Comment"
          onClick={handleComment}
        />
        <ActionButton
          icon={Share2}
          label="Share"
          onClick={handleShare}
        />
      </div>
    </article>
  );
}

function ActionButton({ icon: Icon, label, active, isPopping, onClick, activeColor }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '10px 4px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: active ? 600 : 400,
        color: active ? activeColor : 'var(--color-text-secondary)',
        transition: 'background var(--transition-fast), color var(--transition-fast)',
        minHeight: '44px', // WCAG target
      }}
      className="hover:bg-[var(--color-card-hover)] btn-press"
    >
      <Icon
        size={18}
        fill={active ? activeColor : 'none'}
        className={isPopping ? 'like-pop' : ''}
      />
      <span>{label}</span>
    </button>
  );
}
