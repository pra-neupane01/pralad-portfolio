import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.7 + 0.3;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        border-radius: 50%;
        pointer-events: none;
        opacity: ${opacity};
        animation: float ${duration}s ease-in-out ${delay}s infinite;
      `;

      const colors = [
        'rgba(0, 245, 255, 0.8)',
        'rgba(255, 0, 110, 0.7)',
        'rgba(181, 55, 242, 0.6)',
        'rgba(255, 255, 255, 0.5)',
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => {
        if (p.parentNode) p.parentNode.removeChild(p);
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0e27 0%, #0f1229 40%, #080b1e 70%, #0a0e27 100%)',
      }}
    >
      {/* Central radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Top-left pink nebula */}
      <div
        className="absolute -top-32 -left-32 rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,0,110,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Bottom-right purple nebula */}
      <div
        className="absolute -bottom-32 -right-32 rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(181,55,242,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Static star field */}
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['rgba(0,245,255,0.9)', 'rgba(255,0,110,0.7)', 'rgba(181,55,242,0.8)', 'rgba(255,255,255,0.6)'][Math.floor(Math.random() * 4)],
            boxShadow: `0 0 3px currentColor`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `flicker ${Math.random() * 3 + 1}s ease-in-out ${Math.random() * 5}s infinite`,
          }}
        />
      ))}

      {/* Slow-moving large orbiting ring */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          marginLeft: '-350px',
          marginTop: '-350px',
          border: '1px solid rgba(0,245,255,0.05)',
          animation: 'rotateSlow 60s linear infinite',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          marginLeft: '-250px',
          marginTop: '-250px',
          border: '1px solid rgba(255,0,110,0.05)',
          animation: 'rotateSlow 40s linear infinite reverse',
        }}
      />
    </div>
  );
}
