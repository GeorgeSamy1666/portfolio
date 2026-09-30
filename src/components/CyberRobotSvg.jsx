import React from 'react';

const CyberRobotSvg = () => (
  <svg className="svg-cyber-robot" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="armorDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#18162a" />
        <stop offset="100%" stopColor="#06060c" />
      </linearGradient>
      <linearGradient id="armorMid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2e2b42" />
        <stop offset="100%" stopColor="#151320" />
      </linearGradient>
      <linearGradient id="armorHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4a4668" />
        <stop offset="100%" stopColor="#2e2b42" />
      </linearGradient>
      <radialGradient id="energyCore" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="35%" stopColor="#fda4af" />
        <stop offset="75%" stopColor="#e11d48" />
        <stop offset="100%" stopColor="#881337" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="energySoft" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fda4af" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#881337" />
        <stop offset="30%" stopColor="#e11d48" />
        <stop offset="50%" stopColor="#fda4af" />
        <stop offset="70%" stopColor="#e11d48" />
        <stop offset="100%" stopColor="#881337" />
      </linearGradient>
      <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e11d48" stopOpacity="0" />
        <stop offset="50%" stopColor="#fda4af" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <filter id="robotGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <circle cx="100" cy="140" r="60" fill="url(#energySoft)" className="robot-aura" opacity="0.15" />

    <g className="robot-arm-left">
      <circle cx="48" cy="95" r="10" fill="url(#armorMid)" stroke="#e11d48" strokeWidth="1.5" />
      <circle cx="48" cy="95" r="4" fill="#e11d48" opacity="0.6" />
      <circle cx="48" cy="95" r="2" fill="#ffffff" opacity="0.9" />
      <polygon points="15,78 48,68 55,95 28,102" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1.5" />
      <line x1="22" y1="85" x2="50" y2="78" stroke="#fda4af" strokeWidth="0.8" opacity="0.3" />
      <circle cx="35" cy="82" r="1.5" fill="#e11d48" opacity="0.5" />
      <polygon points="30,105 50,100 46,142 26,145" fill="url(#armorDark)" stroke="#e11d48" strokeWidth="0.8" />
      <line x1="35" y1="112" x2="48" y2="108" stroke="#fda4af" strokeWidth="0.5" opacity="0.25" />
      <circle cx="38" cy="148" r="7" fill="url(#armorMid)" stroke="#fda4af" strokeWidth="1" />
      <circle cx="38" cy="148" r="2.5" fill="#e11d48" opacity="0.8" />
      <polygon points="28,155 48,155 44,195 24,192" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1" />
      <line x1="30" y1="168" x2="46" y2="168" stroke="#fda4af" strokeWidth="0.6" opacity="0.4" />
      <line x1="29" y1="178" x2="45" y2="178" stroke="#fda4af" strokeWidth="0.6" opacity="0.3" />
      <rect x="33" y="160" width="8" height="2" rx="1" fill="#e11d48" opacity="0.4" className="energy-line" />
      <polygon points="24,195 44,198 40,210 22,206" fill="url(#armorMid)" stroke="#fda4af" strokeWidth="0.8" />
      <line x1="28" y1="200" x2="26" y2="207" stroke="#fda4af" strokeWidth="0.5" opacity="0.4" />
      <line x1="33" y1="202" x2="32" y2="209" stroke="#fda4af" strokeWidth="0.5" opacity="0.4" />
      <line x1="38" y1="203" x2="37" y2="210" stroke="#fda4af" strokeWidth="0.5" opacity="0.4" />
    </g>

    <g className="robot-arm-right">
      <circle cx="152" cy="95" r="10" fill="url(#armorMid)" stroke="#e11d48" strokeWidth="1.5" />
      <circle cx="152" cy="95" r="4" fill="#e11d48" opacity="0.6" />
      <circle cx="152" cy="95" r="2" fill="#ffffff" opacity="0.9" />
      <polygon points="185,78 152,68 145,95 172,102" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1.5" />
      <line x1="178" y1="85" x2="150" y2="78" stroke="#fda4af" strokeWidth="0.8" opacity="0.3" />
      <circle cx="165" cy="82" r="1.5" fill="#e11d48" opacity="0.5" />
      <polygon points="170,105 150,100 154,142 174,145" fill="url(#armorDark)" stroke="#e11d48" strokeWidth="0.8" />
      <line x1="165" y1="112" x2="152" y2="108" stroke="#fda4af" strokeWidth="0.5" opacity="0.25" />
      <circle cx="162" cy="148" r="7" fill="url(#armorMid)" stroke="#fda4af" strokeWidth="1" />
      <circle cx="162" cy="148" r="2.5" fill="#e11d48" opacity="0.8" />
      <polygon points="172,155 152,155 156,195 176,192" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1" />
      <line x1="170" y1="168" x2="154" y2="168" stroke="#fda4af" strokeWidth="0.6" opacity="0.4" />
      <line x1="171" y1="178" x2="155" y2="178" stroke="#fda4af" strokeWidth="0.6" opacity="0.3" />
      <rect x="159" y="160" width="8" height="2" rx="1" fill="#e11d48" opacity="0.4" className="energy-line" />
      <polygon points="176,195 156,198 160,210 178,206" fill="url(#armorMid)" stroke="#fda4af" strokeWidth="0.8" />
      <line x1="172" y1="200" x2="174" y2="207" stroke="#fda4af" strokeWidth="0.5" opacity="0.4" />
      <line x1="167" y1="202" x2="168" y2="209" stroke="#fda4af" strokeWidth="0.5" opacity="0.4" />
      <line x1="162" y1="203" x2="163" y2="210" stroke="#fda4af" strokeWidth="0.5" opacity="0.4" />
    </g>

    <g className="robot-leg-left">
      <circle cx="78" cy="190" r="8" fill="url(#armorMid)" stroke="#e11d48" strokeWidth="1" />
      <polygon points="65,198 90,195 86,240 60,245" fill="url(#armorDark)" stroke="#e11d48" strokeWidth="1.2" />
      <circle cx="73" cy="248" r="6" fill="url(#armorMid)" stroke="#fda4af" strokeWidth="1" />
      <circle cx="73" cy="248" r="2" fill="#e11d48" />
      <polygon points="60,255 85,252 82,285 56,282" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1" />
      <polygon points="50,285 88,282 92,295 46,295" fill="url(#armorMid)" stroke="#e11d48" strokeWidth="1.5" />
    </g>

    <g className="robot-leg-right">
      <circle cx="122" cy="190" r="8" fill="url(#armorMid)" stroke="#e11d48" strokeWidth="1" />
      <polygon points="135,198 110,195 114,240 140,245" fill="url(#armorDark)" stroke="#e11d48" strokeWidth="1.2" />
      <circle cx="127" cy="248" r="6" fill="url(#armorMid)" stroke="#fda4af" strokeWidth="1" />
      <circle cx="127" cy="248" r="2" fill="#e11d48" />
      <polygon points="140,255 115,252 118,285 144,282" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1" />
      <polygon points="150,285 112,282 108,295 154,295" fill="url(#armorMid)" stroke="#e11d48" strokeWidth="1.5" />
    </g>

    <polygon points="55,70 145,70 158,115 135,195 65,195 42,115" fill="url(#armorDark)" stroke="#e11d48" strokeWidth="2" />
    <polygon points="65,80 135,80 145,112 125,182 75,182 55,112" fill="url(#armorMid)" />
    <polygon points="82,85 92,80 102,85 102,95 92,100 82,95" fill="none" stroke="#e11d48" strokeWidth="0.6" opacity="0.2" />
    <polygon points="98,85 108,80 118,85 118,95 108,100 98,95" fill="none" stroke="#e11d48" strokeWidth="0.6" opacity="0.2" />
    <line x1="68" y1="90" x2="132" y2="90" stroke="#fda4af" strokeWidth="0.8" opacity="0.3" />
    <line x1="70" y1="100" x2="130" y2="100" stroke="#fda4af" strokeWidth="0.6" opacity="0.2" />
    <line x1="60" y1="105" x2="140" y2="105" stroke="url(#edgeGlow)" strokeWidth="1" />
    <circle cx="100" cy="120" r="22" fill="none" stroke="#e11d48" strokeWidth="0.8" opacity="0.3" className="energy-line" />
    <circle cx="100" cy="120" r="20" fill="url(#energyCore)" className="robot-core-pulse" filter="url(#robotGlow)" />
    <circle cx="100" cy="120" r="14" fill="none" stroke="#fda4af" strokeWidth="0.5" opacity="0.35" />
    <circle cx="100" cy="120" r="10" fill="none" stroke="#fda4af" strokeWidth="1.5" opacity="0.6" />
    <circle cx="100" cy="120" r="5" fill="#ffffff" />
    <line x1="100" y1="98" x2="100" y2="102" stroke="#fda4af" strokeWidth="1" opacity="0.5" />
    <line x1="100" y1="138" x2="100" y2="142" stroke="#fda4af" strokeWidth="1" opacity="0.5" />
    <line x1="78" y1="120" x2="82" y2="120" stroke="#fda4af" strokeWidth="1" opacity="0.5" />
    <line x1="118" y1="120" x2="122" y2="120" stroke="#fda4af" strokeWidth="1" opacity="0.5" />
    <line x1="80" y1="120" x2="58" y2="110" stroke="#e11d48" strokeWidth="1" opacity="0.5" className="energy-line" />
    <line x1="120" y1="120" x2="142" y2="110" stroke="#e11d48" strokeWidth="1" opacity="0.5" className="energy-line" />
    <line x1="100" y1="140" x2="100" y2="175" stroke="#e11d48" strokeWidth="1" opacity="0.4" className="energy-line" />
    <line x1="72" y1="160" x2="128" y2="160" stroke="#fda4af" strokeWidth="1" opacity="0.35" />
    <line x1="70" y1="170" x2="130" y2="170" stroke="#fda4af" strokeWidth="0.8" opacity="0.25" />
    <circle cx="68" cy="110" r="1.5" fill="#e11d48" opacity="0.4" />
    <circle cx="132" cy="110" r="1.5" fill="#e11d48" opacity="0.4" />
    <polygon points="62,185 138,185 135,198 65,198" fill="url(#armorHighlight)" stroke="#e11d48" strokeWidth="1.5" />

    <rect x="88" y="50" width="24" height="22" rx="3" fill="url(#armorMid)" />
    <line x1="92" y1="58" x2="108" y2="58" stroke="#e11d48" strokeWidth="0.8" opacity="0.5" />

    <path d="M 65,25 Q 65,5 100,2 Q 135,5 135,25 L 140,55 Q 100,65 60,55 Z" fill="url(#armorDark)" stroke="#e11d48" strokeWidth="2" />
    <path d="M 72,22 Q 72,10 100,8 Q 128,10 128,22 L 132,48 Q 100,56 68,48 Z" fill="url(#armorMid)" />
    <path d="M 68,30 L 100,45 L 132,30 L 128,38 L 100,50 L 72,38 Z" fill="url(#visorGrad)" className="robot-visor-pulse" filter="url(#robotGlow)" />
    <line x1="100" y1="5" x2="100" y2="28" stroke="#e11d48" strokeWidth="2" opacity="0.6" />
    <line x1="68" y1="18" x2="78" y2="22" stroke="#fda4af" strokeWidth="0.8" opacity="0.4" />
    <line x1="132" y1="18" x2="122" y2="22" stroke="#fda4af" strokeWidth="0.8" opacity="0.4" />
    <line x1="66" y1="24" x2="76" y2="27" stroke="#fda4af" strokeWidth="0.6" opacity="0.3" />
    <line x1="134" y1="24" x2="124" y2="27" stroke="#fda4af" strokeWidth="0.6" opacity="0.3" />

    <line x1="85" y1="5" x2="78" y2="-8" stroke="#e11d48" strokeWidth="2" />
    <circle cx="78" cy="-8" r="3" fill="#fda4af" className="robot-sensor-blink" />
    <line x1="115" y1="5" x2="122" y2="-8" stroke="#e11d48" strokeWidth="2" />
    <circle cx="122" cy="-8" r="3" fill="#fda4af" className="robot-sensor-blink" style={{ animationDelay: '0.75s' }} />
  </svg>
);

export default CyberRobotSvg;
