import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { awardsData } from '../data/awards';
import { certificationsData } from '../data/certifications';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PhotosTab() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const allImages = [
    ...awardsData.map((a) => ({ src: a.image, alt: a.title, id: `award-${a.id}`, title: a.title, issuer: a.issuer })),
    ...certificationsData.map((c) => ({ src: c.image, alt: c.title, id: `cert-${c.id}`, title: c.title, issuer: c.issuer })),
  ];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  }, [allImages.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  }, [allImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState(0);

  useScrollReveal([]);

  return (
    <div>
      <div className="card reveal-init" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 700,
              margin: 0,
              color: 'var(--color-text)',
            }}
          >
            Photos & Credentials
          </h2>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
            {allImages.length} items
          </span>
        </div>

        {/* Responsive Grid with 16:10 Aspect Ratio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(160px, 30vw, 240px), 1fr))',
            gap: '8px',
          }}
        >
          {allImages.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              style={{
                padding: 0,
                border: 'none',
                background: 'var(--color-comment)',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: 'var(--radius-sm)',
                aspectRatio: '16 / 10',
                position: 'relative',
                display: 'block',
                width: '100%',
              }}
              className="btn-press"
              aria-label={`View photo ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={400}
                height={250}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform var(--transition-normal)',
                }}
                className="hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Gestures and Keyboard Controls */}
      {lightboxIndex !== null && (
        <div
          className="modal-overlay"
          onClick={closeLightbox}
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchEnd={(e) => {
            const touchEnd = e.changedTouches[0].clientX;
            if (touchStart - touchEnd > 50) showNext();
            if (touchEnd - touchStart > 50) showPrev();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${allImages[lightboxIndex].alt}`}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(0,0,0,0.65)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              zIndex: 110,
            }}
          >
            <X size={22} />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              zIndex: 110,
            }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              zIndex: 110,
            }}
          >
            <ChevronRight size={26} />
          </button>

          {/* Lightbox content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '85dvh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '75dvh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
              }}
            />
            <div
              style={{
                color: '#fff',
                marginTop: '12px',
                textAlign: 'center',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
              }}
            >
              {allImages[lightboxIndex].title}
              {allImages[lightboxIndex].issuer && ` • ${allImages[lightboxIndex].issuer}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
