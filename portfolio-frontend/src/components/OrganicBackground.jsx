import { useEffect, useRef } from 'react';

export default function OrganicBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create organic blob shapes
    const blobs = [
      {
        size: 300,
        top: '10%',
        left: '10%',
        delay: 0,
        duration: 15,
      },
      {
        size: 200,
        top: '60%',
        left: '80%',
        delay: 2,
        duration: 18,
      },
      {
        size: 250,
        top: '70%',
        left: '5%',
        delay: 4,
        duration: 20,
      },
    ];

    blobs.forEach((blob) => {
      const el = document.createElement('div');
      el.className = 'absolute rounded-full opacity-5 pointer-events-none';
      el.style.width = blob.size + 'px';
      el.style.height = blob.size + 'px';
      el.style.top = blob.top;
      el.style.left = blob.left;
      el.style.background = 'linear-gradient(135deg, #2d9b7f, #4fb3a3)';
      el.style.filter = 'blur(40px)';
      el.style.animation = `gentleDrift ${blob.duration}s ease-in-out ${blob.delay}s infinite`;

      container.appendChild(el);
    });

    return () => {
      container.querySelectorAll('div').forEach((el) => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-dark-bg overflow-hidden"
    />
  );
}
