import React, { useEffect } from 'react';

let activeLoaders = 0;
let previousOverflow;

function PageLoader() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (activeLoaders === 0) {
      previousOverflow = {
        root: root.style.overflow,
        body: body.style.overflow,
      };
      root.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }

    activeLoaders += 1;

    return () => {
      activeLoaders -= 1;
      if (activeLoaders === 0 && previousOverflow) {
        root.style.overflow = previousOverflow.root;
        body.style.overflow = previousOverflow.body;
        previousOverflow = undefined;
      }
    };
  }, []);

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="page-loader-inner">
        <div className="page-loader-logo">GS</div>
      </div>
    </div>
  );
}

export default PageLoader;
