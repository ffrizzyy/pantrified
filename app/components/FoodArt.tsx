import { useId } from "react";

const PALETTES: [string, string][] = [
  ["#1F4D3A", "#3C7A5B"],
  ["#B45309", "#D98324"],
  ["#3F6B4A", "#7A9A5E"],
  ["#8A3B2A", "#C06442"],
  ["#4A5D3A", "#8A9B52"],
  ["#6B4F2A", "#B08A4F"],
];

const GLYPHS = [
  // bowl
  <>
    <path d="M26 52h68a34 34 0 0 1-68 0z" />
    <path d="M40 38c0-5 4-8 8-8M60 34c0-6 4-9 9-9M80 38c0-5 4-8 8-8" />
  </>,
  // wok
  <>
    <ellipse cx="60" cy="50" rx="32" ry="12" />
    <path d="M28 50c0 12 14 20 32 20s32-8 32-20" />
    <path d="M92 50h12" />
  </>,
  // leaf
  <>
    <path d="M78 24c0 26-14 38-34 38a14 14 0 0 1 0-28c12 0 22-3 34-10z" />
    <path d="M30 76c6-14 16-22 30-28" />
  </>,
  // egg
  <>
    <ellipse cx="60" cy="48" rx="26" ry="30" />
    <circle cx="60" cy="48" r="10" />
  </>,
  // fish
  <>
    <path d="M34 46c10-10 28-14 44-8l14-10v34l-14-10c-16 6-34 2-44-6z" />
    <circle cx="44" cy="44" r="2" />
  </>,
  // rice
  <>
    <path d="M30 62c0-16 13-28 30-28s30 12 30 28z" />
    <path d="M42 46c2-4 5-6 8-7M62 42c3 0 6 2 8 5M54 34c2-3 5-4 8-4" />
  </>,
];

export function FoodArt({
  art,
  className,
  label,
  scale = 0.72,
  cx = 60,
  cy = 34,
}: {
  art: number;
  className?: string;
  label?: string;
  scale?: number;
  cx?: number;
  cy?: number;
}) {
  const id = useId().replace(/:/g, "");
  const [from, to] = PALETTES[art % PALETTES.length];
  const glyph = GLYPHS[art % GLYPHS.length];
  return (
    <svg
      viewBox="0 0 120 90"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="120" height="90" fill={`url(#g-${id})`} />
      <circle cx="100" cy="16" r="26" fill="#FFFFFF" opacity="0.06" />
      <circle cx="18" cy="80" r="22" fill="#000000" opacity="0.06" />
      <g
        fill="none"
        stroke="#FAF7F0"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.94"
        transform={`translate(${cx} ${cy}) scale(${scale}) translate(-60 -45)`}
      >
        {glyph}
      </g>
    </svg>
  );
}


