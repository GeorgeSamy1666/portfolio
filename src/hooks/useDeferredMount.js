import { useEffect, useState } from 'react';

/**
 * Mount heavy UI after the browser is idle (or after timeout) so first paint stays fast.
 */
export function useDeferredMount({ delay = 0, timeout = 2000 } = {}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId;
    let delayId;
    let fallbackId;

    const run = () => {
      if (!cancelled) setReady(true);
    };

    const scheduleIdle = () => {
      if (typeof requestIdleCallback === 'function') {
        idleId = requestIdleCallback(run, { timeout });
      } else {
        fallbackId = window.setTimeout(run, Math.min(timeout, 800));
      }
    };

    if (delay > 0) {
      delayId = window.setTimeout(scheduleIdle, delay);
    } else {
      scheduleIdle();
    }

    return () => {
      cancelled = true;
      if (delayId) clearTimeout(delayId);
      if (fallbackId) clearTimeout(fallbackId);
      if (idleId && typeof cancelIdleCallback === 'function') {
        cancelIdleCallback(idleId);
      }
    };
  }, [delay, timeout]);

  return ready;
}
