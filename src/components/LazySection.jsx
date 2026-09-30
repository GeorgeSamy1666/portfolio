import React, { useEffect, useRef, useState } from 'react';

/**
 * Renders children only when the section is near the viewport — saves initial JS & layout work.
 */
function LazySection({ children, rootMargin = '320px 0px', minHeight = '1px', className = '' }) {
  const placeholderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = placeholderRef.current;
    if (!visible && node) {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight + 400) {
        setVisible(true);
        return undefined;
      }
    }

    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  useEffect(() => {
    if (!visible) return undefined;
    const id = requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('portfolio:lazy-section'));
    });
    return () => cancelAnimationFrame(id);
  }, [visible]);

  return (
    <div ref={placeholderRef} className={className} style={!visible ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  );
}

export default LazySection;
