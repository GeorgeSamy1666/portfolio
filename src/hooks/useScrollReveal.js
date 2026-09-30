import { useEffect } from 'react';

const REVEAL_SELECTORS = [
  '.scroll-reveal',
  '.scroll-reveal-left',
  '.scroll-reveal-right',
  '.scroll-reveal-scale',
  '.section-skills',
  '.reveal-group',
].join(', ');

/**
 * Adds .is-visible when elements enter the viewport. Re-scans when lazy sections mount.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const revealed = new WeakSet();
    const observed = new WeakSet();

    const reveal = (el) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      el.classList.add('is-visible');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
            observed.delete(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    const bindElement = (el) => {
      if (revealed.has(el) || observed.has(el)) return;

      observed.add(el);
      el.classList.remove('is-visible');
      observer.observe(el);

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        reveal(el);
        observer.unobserve(el);
        observed.delete(el);
      }
    };

    const scan = () => {
      document.querySelectorAll(REVEAL_SELECTORS).forEach(bindElement);
    };

    scan();

    let scanRaf = 0;
    const scheduleScan = () => {
      if (scanRaf) return;
      scanRaf = requestAnimationFrame(() => {
        scanRaf = 0;
        scan();
      });
    };

    const mutationObserver = new MutationObserver(scheduleScan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('portfolio:lazy-section', scheduleScan);

    return () => {
      if (scanRaf) cancelAnimationFrame(scanRaf);
      mutationObserver.disconnect();
      window.removeEventListener('portfolio:lazy-section', scheduleScan);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
