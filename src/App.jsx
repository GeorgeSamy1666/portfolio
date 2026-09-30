import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import { translations } from './translations.js';
import { Routes, Route, useLocation } from 'react-router-dom';

import PageLoader from './components/PageLoader';
import DeferredSpaceBackground from './components/DeferredSpaceBackground';
import HomePage from './components/HomePage';
import { useScrollReveal } from './hooks/useScrollReveal';

import ScrollToTop from './components/ScrollToTop';

const AllProjects = lazy(() => import('./components/AllProjects'));

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [shellReady, setShellReady] = useState(false);

  useScrollReveal([location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    let cancelled = false;

    const finish = () => {
      if (!cancelled) setShellReady(true);
    };

    const minDisplay = new Promise((resolve) => setTimeout(resolve,3000 ));
    const fontsReady =
      typeof document !== 'undefined' && document.fonts?.ready
        ? Promise.race([
            document.fonts.ready.catch(() => undefined),
            new Promise((resolve) => setTimeout(resolve, 1200)),
          ])
        : Promise.resolve();

    Promise.all([minDisplay, fontsReady]).then(finish);

    const hardCap = setTimeout(finish, 2500);

    return () => {
      cancelled = true;
      clearTimeout(hardCap);
    };
  }, []);

  useEffect(() => {
    const preload = () => import('./components/AllProjects');
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(preload, { timeout: 5000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(preload, 3000);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const t = translations.en;

  return (
    <div className={`App${shellReady ? ' app-shell-ready' : ''}`}>
      {!shellReady && <PageLoader />}

      <DeferredSpaceBackground />

      <Routes>
        <Route
          path="/"
          element={<HomePage t={t} theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/all-projects"
          element={
            <Suspense fallback={<PageLoader />}>
              <AllProjects t={t} theme={theme} toggleTheme={toggleTheme} />
            </Suspense>
          }
        />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
