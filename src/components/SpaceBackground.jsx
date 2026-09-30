import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDeferredMount } from '../hooks/useDeferredMount';

const CyberRobotSvg = lazy(() => import('./CyberRobotSvg'));

function computeRobotTransform(metrics) {
  const { scrollPercent, width, height, footerHeight, isMobile } = metrics;
  const progress = scrollPercent / 100;
  const robotHeight = isMobile ? 160 : 260;
  const maxRobotY = height - robotHeight - footerHeight;
  const rawRobotY = 200 + progress * (height * 0.8);
  const freeRobotY = Math.min(rawRobotY, maxRobotY);
  const robotRotate = isMobile
    ? Math.cos(progress * Math.PI) * 3
    : Math.cos(progress * Math.PI) * 6;

  const settleStart = isMobile ? 0.58 : 0.68;
  const settleT = Math.max(0, Math.min(1, (progress - settleStart) / (1 - settleStart)));
  const easeSettle = settleT * settleT * (3 - 2 * settleT);
  const robotY = freeRobotY * (1 - easeSettle) + maxRobotY * easeSettle;

  const mobileRobotWidth = 110;
  const smoothProgress = progress * progress * (3 - 2 * progress);
  const mobileStartX = Math.max(0, width - mobileRobotWidth);
  const mobileX = mobileStartX * (1 - smoothProgress);

  const desktopFreeX = width * 0.5 + Math.sin(progress * Math.PI) * (width * 0.25);
  const desktopX = desktopFreeX * (1 - easeSettle);

  const robotX = isMobile ? mobileX : desktopX;
  const mobileFacing = -smoothProgress * 8;
  const rotateDeg = isMobile
    ? mobileFacing + robotRotate * (1 - easeSettle)
    : robotRotate * (1 - easeSettle);

  return `translate3d(${robotX}px, ${robotY}px, 0) rotate(${rotateDeg}deg)`;
}

const SpaceBackground = () => {
  const location = useLocation();
  const showRobot = location.pathname !== '/all-projects';
  const robotRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 768
  );
  const metricsRef = useRef({
    scrollPercent: 0,
    totalScroll: 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    footerHeight: 96,
    isMobile: typeof window !== 'undefined' ? window.innerWidth <= 768 : false,
  });
  const decorationsReady = useDeferredMount({ delay: 400, timeout: 4000 });
  const robotReady = useDeferredMount({ delay: 600, timeout: 4500 });

  useEffect(() => {
    const measureFooter = () => {
      const footer = document.querySelector('.footer');
      metricsRef.current.footerHeight = footer?.offsetHeight ?? 96;
    };

    const measureScrollRange = () => {
      metricsRef.current.totalScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
    };

    const measureLayout = () => {
      measureFooter();
      measureScrollRange();
    };

    const applyRobot = () => {
      const el = robotRef.current;
      if (el) {
        el.style.transform = computeRobotTransform(metricsRef.current);
      }
    };

    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = metricsRef.current.totalScroll;
      metricsRef.current.scrollPercent =
        totalScroll > 0 ? Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)) : 0;
      applyRobot();
    };

    const updateSize = () => {
      metricsRef.current.width = window.innerWidth;
      metricsRef.current.height = window.innerHeight;
      const mobile = window.innerWidth <= 768;
      metricsRef.current.isMobile = mobile;
      setIsMobile(mobile);
      measureLayout();
      applyRobot();
    };

    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        updateScroll();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateSize, { passive: true });
    const footer = document.querySelector('.footer');
    measureLayout();
    const layoutObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measureLayout)
      : null;
    if (document.body) layoutObserver?.observe(document.body);
    if (footer) layoutObserver?.observe(footer);
    updateSize();
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSize);
      layoutObserver?.disconnect();
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (robotReady && robotRef.current) {
      robotRef.current.style.transform = computeRobotTransform(metricsRef.current);
    }
  }, [robotReady, location.pathname]);

  const techChips = [
    { label: 'React.js', icon: 'fab fa-react', top: '8%', left: '2%', delay: '0s' },
    { label: 'JavaScript ES6+', icon: 'fab fa-js-square', top: '14%', right: '2%', delay: '0.8s' },
    { label: '<Component />', icon: 'fas fa-code', top: '28%', left: '1.5%', delay: '1.6s' },
    { label: 'HTML5 / CSS3', icon: 'fab fa-html5', top: '42%', right: '1.5%', delay: '2.4s' },
    { label: 'npm run dev', icon: 'fas fa-terminal', top: '58%', left: '2%', delay: '3.2s' },
    { label: 'Git & GitHub', icon: 'fab fa-git-alt', top: '72%', right: '2%', delay: '4s' },
  ];

  const codeSnippets = [
    { code: "const dev = 'George Sami';", top: '22%', right: '3%', delay: '0.5s' },
    { code: 'await buildAwesomeUI();', top: '50%', left: '2%', delay: '2.1s' },
    { code: 'export default Portfolio;', top: '78%', right: '2%', delay: '3.5s' },
  ];

  const showFloatingDecor = decorationsReady && !isMobile;

  return (
    <div className="space-background" aria-hidden="true">
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />

      {showFloatingDecor && (
        <div className="pro-bg-container">
          {techChips.map((chip, index) => (
            <div
              key={index}
              className="pro-tech-chip"
              style={{
                top: chip.top,
                ...(chip.left != null ? { left: chip.left } : {}),
                ...(chip.right != null ? { right: chip.right } : {}),
                animationDelay: chip.delay,
              }}
            >
              <i className={chip.icon} />
              <span>{chip.label}</span>
            </div>
          ))}

          {codeSnippets.map((snippet, index) => (
            <div
              key={`code-${index}`}
              className="pro-code-snippet"
              style={{
                top: snippet.top,
                ...(snippet.left != null ? { left: snippet.left } : {}),
                ...(snippet.right != null ? { right: snippet.right } : {}),
                animationDelay: snippet.delay,
              }}
            >
              <code>{snippet.code}</code>
            </div>
          ))}
        </div>
      )}

      {showRobot && robotReady && (
        <div
          ref={robotRef}
          className={`cyber-robot-wrapper${isMobile ? ' cyber-robot-mobile' : ''}`}
          aria-hidden="true"
        >
          <Suspense fallback={null}>
            <CyberRobotSvg />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default SpaceBackground;
