import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="card"
      style={{
        padding: '60px 24px',
        textAlign: 'center',
        margin: '32px auto',
        maxWidth: '560px',
      }}
    >
      <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, margin: '16px 0 8px', color: 'var(--color-text)' }}>
        This page isn't available
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)', margin: '0 0 24px' }}>
        The link you followed may be broken, or the page may have been removed.
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'var(--color-primary)',
            color: '#fff',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: 'var(--font-size-sm)',
            minHeight: '44px',
          }}
          className="btn-press"
        >
          <Home size={18} /> Return to Feed
        </Link>
      </div>
    </div>
  );
}
