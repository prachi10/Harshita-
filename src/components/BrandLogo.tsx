import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark';
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  theme = 'light',
  size = 'md',
}) => {
  const markSize =
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-20 h-20' : 'w-12 h-12';

  const isLight = theme === 'light';
  const textColor = isLight ? 'text-[#2A0A38]' : 'text-white';
  const subtitleColor = isLight ? 'text-[#7D4A88]' : 'text-[#F3E5AB]';

  const Mark = (
    <div
      className={`relative ${markSize} shrink-0 flex items-center justify-center`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:rotate-6"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E79F" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4D1865" />
            <stop offset="100%" stopColor="#2A0A38" />
          </linearGradient>
          <filter id="goldShine" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#D4AF37" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Circular Floral Embroidery Border */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#goldGradient)"
          strokeWidth="1.8"
          strokeDasharray="3 2"
          opacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#goldGradient)"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* Rich Royal Purple Medallion Base */}
        <circle
          cx="50"
          cy="50"
          r="39"
          fill="url(#purpleGradient)"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
        />

        {/* Blouse Neckline Silhouette curve inside */}
        <path
          d="M 28 32 C 34 38, 44 46, 50 46 C 56 46, 66 38, 72 32 C 67 62, 57 71, 50 71 C 43 71, 33 62, 28 32 Z"
          fill="#3B124D"
          stroke="url(#goldGradient)"
          strokeWidth="0.75"
          opacity="0.75"
        />

        {/* Delicate floral embroidery petals at top & bottom */}
        <circle cx="50" cy="18" r="2" fill="url(#goldGradient)" />
        <circle cx="50" cy="82" r="2" fill="url(#goldGradient)" />
        <circle cx="18" cy="50" r="2" fill="url(#goldGradient)" />
        <circle cx="82" cy="50" r="2" fill="url(#goldGradient)" />

        {/* Polished Golden Sewing Needle positioned diagonally */}
        <g filter="url(#goldShine)">
          {/* Needle Eye */}
          <ellipse
            cx="32"
            cy="27"
            rx="1.5"
            ry="2.8"
            transform="rotate(-40 32 27)"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
          />
          {/* Needle Shaft and Point */}
          <path
            d="M 33 28 L 68 70"
            stroke="url(#goldGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 68 70 L 72 75"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>

        {/* Silk Thread forming the Monogram 'H' & elegant loop */}
        <path
          d="M 31 26 C 25 21, 20 30, 25 38 C 29 44, 38 41, 38 49 C 38 58, 29 65, 36 71 C 42 75, 52 70, 52 60 C 52 48, 62 48, 62 60 C 62 68, 72 73, 76 66 C 80 58, 72 48, 68 40"
          stroke="#F3E5AB"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="60 0"
          fill="none"
          opacity="0.95"
        />

        {/* Center Stylized 'H' Monogram in Gold */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="23"
          fontWeight="700"
          fill="url(#goldGradient)"
          letterSpacing="0.5"
          filter="url(#goldShine)"
        >
          H
        </text>

        {/* Small Golden Stitches Accent */}
        <path
          d="M 42 64 L 46 64 M 54 64 L 58 64"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{Mark}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {Mark}
        <div className="mt-3">
          <span className="block font-playfair font-bold text-xl md:text-2xl tracking-wide text-gold-gradient">
            HARSHITA
          </span>
          <span className="block text-[11px] md:text-xs font-cinzel tracking-[0.25em] text-[#C5A059] uppercase mt-0.5">
            Blouse Creations
          </span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="h-[1px] w-6 bg-[#C5A059]/40" />
            <span className={`text-[10px] uppercase tracking-widest ${subtitleColor}`}>
              Kasba Bawada · Kolhapur
            </span>
            <span className="h-[1px] w-6 bg-[#C5A059]/40" />
          </div>
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Mark}
      <div className="flex flex-col">
        <span
          className={`font-playfair font-bold tracking-tight leading-tight ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg md:text-xl'
          } ${textColor}`}
        >
          Harshita <span className="text-[#B8860B]">Creations</span>
        </span>
        <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-widest leading-none font-cinzel text-[#8A5898]">
          <span>Blouse Boutique</span>
          <span className="text-[#C5A059]">·</span>
          <span>Kolhapur</span>
        </div>
      </div>
    </div>
  );
};
