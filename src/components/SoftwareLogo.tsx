import React from 'react';
import { ToolItem } from '../types';

interface SoftwareLogoProps {
  type: ToolItem['logoType'];
  className?: string;
  size?: number;
}

export const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ type, className = '', size = 36 }) => {
  switch (type) {
    case 'premiere':
      // Adobe Premiere Pro (Pr) Official Style: Deep Purple/Indigo with Pr
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-purple-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#00005B" />
            <rect width="100" height="100" rx="20" fill="url(#pr-gradient)" opacity="0.3" />
            <defs>
              <linearGradient id="pr-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9999FF" />
                <stop offset="1" stopColor="#00005B" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#9999FF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="48"
              fontWeight="900"
              letterSpacing="-2"
            >
              Pr
            </text>
          </svg>
        </div>
      );

    case 'aftereffects':
      // Adobe After Effects (Ae) Official Style: Deep Indigo/Magenta with Ae
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-indigo-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#00005B" />
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#9999FF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="48"
              fontWeight="900"
              letterSpacing="-2"
            >
              Ae
            </text>
          </svg>
        </div>
      );

    case 'capcut':
      // CapCut official iconic logo (two overlapping horizontal trapezoids / bow-tie geometry)
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-slate-700/60 flex-shrink-0 bg-black p-1.5 transition-transform ${className}`}
        >
          <svg
            viewBox="0 0 25 24"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case 'photoshop':
      // Adobe Photoshop (Ps) Official Style: Deep Blue with Ps
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-sky-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#001E36" />
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#31A8FF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="48"
              fontWeight="900"
              letterSpacing="-2"
            >
              Ps
            </text>
          </svg>
        </div>
      );

    case 'illustrator':
      // Adobe Illustrator (Ai) Official Style: Deep Brown/Gold with Ai
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-amber-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#330000" />
            <text
              x="50%"
              y="56%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FF9A00"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="48"
              fontWeight="900"
              letterSpacing="-2"
            >
              Ai
            </text>
          </svg>
        </div>
      );

    case 'canva':
      // Canva official signature gradient (Cyan to Royal Purple) with custom smooth script "C"
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-cyan-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <defs>
              <linearGradient id="canva-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C4CC" />
                <stop offset="50%" stopColor="#2E69FF" />
                <stop offset="100%" stopColor="#7D2AE8" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill="url(#canva-gradient)" />
            {/* Signature Canva Script 'C' */}
            <path
              d="M68 36 C64 26 53 23 43 25 C31 28 22 40 22 56 C22 72 32 80 46 80 C56 80 65 74 69 66 C70 63 68 61 65 62 C60 66 53 70 45 70 C35 70 29 64 30 54 C31 43 38 33 48 32 C54 31 59 33 62 37 C64 39 67 39 68 36 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case 'word':
      // Microsoft Word Official Blue with Document Icon & W
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-blue-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#185ABD" />
            {/* Sheet shadow accent */}
            <path d="M40 20 L80 20 C85 20 88 24 88 28 L88 72 C88 76 85 80 80 80 L40 80 Z" fill="#2B7CD3" opacity="0.8" />
            <rect x="12" y="24" width="48" height="52" rx="10" fill="#103F91" />
            <text
              x="36"
              y="56"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="34"
              fontWeight="900"
            >
              W
            </text>
          </svg>
        </div>
      );

    case 'excel':
      // Microsoft Excel Official Green with Spreadsheet Accent & X
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-emerald-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#107C41" />
            {/* Sheet shadow accent */}
            <path d="M40 20 L80 20 C85 20 88 24 88 28 L88 72 C88 76 85 80 80 80 L40 80 Z" fill="#185C37" opacity="0.8" />
            <rect x="12" y="24" width="48" height="52" rx="10" fill="#0E4A28" />
            <text
              x="36"
              y="56"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="34"
              fontWeight="900"
            >
              X
            </text>
          </svg>
        </div>
      );

    case 'powerpoint':
      // Microsoft PowerPoint Official Red/Orange with Presentation Accent & P
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-orange-400/30 flex-shrink-0 transition-transform ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <rect width="100" height="100" rx="20" fill="#D83B01" />
            {/* Chart shadow accent */}
            <path d="M40 20 L80 20 C85 20 88 24 88 28 L88 72 C88 76 85 80 80 80 L40 80 Z" fill="#ED5C2B" opacity="0.8" />
            <rect x="12" y="24" width="48" height="52" rx="10" fill="#A82800" />
            <text
              x="36"
              y="56"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="34"
              fontWeight="900"
            >
              P
            </text>
          </svg>
        </div>
      );

    case 'ai-tools':
      // Modern Futuristic AI Sparkle / Neural Chip Glowing Badge
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl flex items-center justify-center font-black select-none shadow-md border border-purple-400/40 flex-shrink-0 bg-gradient-to-tr from-indigo-950 via-purple-900 to-pink-600 p-1.5 ${className}`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="ai-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
            {/* 4-point star / sparkles */}
            <path
              d="M50 8 C52 32 68 48 92 50 C68 52 52 68 50 92 C48 68 32 52 8 50 C32 48 48 32 50 8 Z"
              fill="url(#ai-glow)"
            />
            <circle cx="50" cy="50" r="10" fill="#ffffff" opacity="0.9" />
            <path
              d="M24 16 C25 24 31 30 39 31 C31 32 25 38 24 46 C23 38 17 32 9 31 C17 30 23 24 24 16 Z"
              fill="#FDE047"
              opacity="0.8"
            />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
