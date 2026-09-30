import React, { lazy, Suspense } from 'react';
import { useDeferredMount } from '../hooks/useDeferredMount';

const SpaceBackground = lazy(() => import('./SpaceBackground'));

function DeferredSpaceBackground() {
  const ready = useDeferredMount({ delay: 150, timeout: 2500 });

  if (!ready) {
    return <div className="space-background space-background-placeholder" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="space-background space-background-placeholder" aria-hidden="true" />}>
      <SpaceBackground />
    </Suspense>
  );
}

export default DeferredSpaceBackground;
