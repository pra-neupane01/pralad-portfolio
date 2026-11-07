import { useState, useCallback } from 'react';
import { X } from 'lucide-react';
import { awardsData } from '../data/awards';
import { certificationsData } from '../data/certifications';

export default function PhotosTab() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const allImages = [
    ...awardsData.map((a) => ({ src: a.image, alt: a.title, id: `award-${a.id}` })),
    ...certificationsData.map((c) => ({ src: c.image, alt: c.title, id: `cert-${c.id}` })),
  ];

  const closeLightbox = useCallback(() => setLightboxImg(null), []);

  return (
    <div>
      <div className="card" style={{ padding: '16px' }}>
        <h2
          style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            margin: '0 0 16px',
            color: 'var(--color-text)',
          }}
        >
          Photos
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '4px',
          }}
        >
          {allImages.map((img) => (
            <button
              key={img.id}
              onClick={() => setLightboxImg(img)}
              style={{
                padding: 0,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: 'var(--radius-sm)',
                aspectRatio: '1',
                position: 'relative',
              }}
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={300}
                height={300}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform var(--transition-slow)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </button>
          ))}
        </div>

        {allImages.length === 0 && (
          <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', padding: '24px' }}>
            No photos yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === 'Escape' && closeLightbox()}
          role="dialog"
          aria-label={`Viewing: ${lightboxImg.alt}`}
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(0,0,0,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              zIndex: 101,
            }}
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImg.src}
            alt={lightboxImg.alt}
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: 'default' }}
          />
        </div>
      )}
    </div>
  );
}
