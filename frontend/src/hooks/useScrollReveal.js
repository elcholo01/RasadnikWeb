import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          // Stagger delay based on position among siblings
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
            const index = siblings.indexOf(entry.target);
            if (index > 0) {
              entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
          }

          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
