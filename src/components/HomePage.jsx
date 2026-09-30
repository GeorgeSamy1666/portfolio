import React, { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import LazySection from './LazySection';

const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Certificates = lazy(() => import('./Certificates'));
const Contact = lazy(() => import('./Contact'));

function HomePage({ t, theme, toggleTheme }) {
  return (
    <>
      <Navbar t={t} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero t={t} />
        <LazySection minHeight="420px">
          <Suspense fallback={null}>
            <About t={t} />
          </Suspense>
        </LazySection>
        <LazySection minHeight="520px">
          <Suspense fallback={null}>
            <Projects t={t} />
          </Suspense>
        </LazySection>
        <LazySection minHeight="480px">
          <Suspense fallback={null}>
            <Skills t={t} />
          </Suspense>
        </LazySection>
        <LazySection minHeight="400px">
          <Suspense fallback={null}>
            <Certificates t={t} />
          </Suspense>
        </LazySection>
        <LazySection minHeight="280px">
          <Suspense fallback={null}>
            <Contact t={t} />
          </Suspense>
        </LazySection>
      </main>
      <Footer t={t} />
    </>
  );
}

export default HomePage;
