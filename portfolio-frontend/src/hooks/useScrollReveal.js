import { useEffect, useRef } from 'react';

/**
 * Hook to apply smooth intersection-based scroll reveal
 * @param {string} selector - target elements to observe
 * @param {Array} dependencies - re-run trigger
 */
export function useScrollReveal(dependencies = []) {
  const observerRef = useRef(null);

  useEffect(() => {
    // If reduced motion is requested, show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-init').forEach((el) => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll('.reveal-init:not(.reveal-visible)');
    elements.forEach((el, index) => {
      // Stagger initial view elements slightly
      if (!el.style.transitionDelay && index < 6) {
        el.style.transitionDelay = `${index * 60}ms`;
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}
