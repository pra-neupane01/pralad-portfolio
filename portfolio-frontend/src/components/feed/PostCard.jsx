import { useState, useCallback } from 'react';
import { ThumbsUp, MessageCircle, Share2, ExternalLink } from 'lucide-react';

export default function PostCard({ post }) {
  const storageKey = `like_${post.id}`;
  const [liked, setLiked] = useState(() => localStorage.getItem(storageKey) === '1');
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
    }
  }, [post.title, post.description]);

  return (
    <article className="card" style={{ overflow: 'hidden' }}>
      {/* Author row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 16px',
        }}
      >
        <img
          src="/pralad-profile.jpeg"
          alt=""
          width={40}
          height={40}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
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
            style={{ color: 'var(--color-text-secondary)', padding: '4px' }}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '0 16px 10px' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 700,
            margin: '0 0 6px',
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
            margin: '0 0 10px',
            lineHeight: 1.5,
          }}
        >
          {post.description}
        </p>

        {/* Tech stack tags */}
        {post.techStack && post.techStack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {post.techStack.map((tech) => (
              <span className="chip" key={tech} style={{ fontSize: '11px', padding: '2px 8px' }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Award tags */}
        {post.tags && post.tags.length > 0 && !post.techStack && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {post.tags.map((tag) => (
              <span className="chip" key={tag} style={{ fontSize: '11px', padding: '2px 8px' }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post image */}
      {post.image && (
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            width={600}
            height={400}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Like count */}
      <div
        style={{
          padding: '8px 16px 0',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-secondary)',
        }}
      >
        <span>{likeCount} likes</span>
      </div>

      {/* Actions */}
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

function ActionButton({ icon: Icon, label, active, onClick, activeColor }) {
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
        padding: '8px 4px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: active ? 600 : 400,
        color: active ? activeColor : 'var(--color-text-secondary)',
        transition: 'background var(--transition-fast), color var(--transition-fast)',
        fontFamily: 'var(--font-family)',
      }}
      className="hover:bg-[var(--color-card-hover)]"
    >
      <Icon size={18} fill={active ? activeColor : 'none'} />
      {label}
    </button>
  );
}
