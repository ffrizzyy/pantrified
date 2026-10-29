export function Ring({
  value,
  max,
  size = 96,
  stroke = 8,
  over = false,
  label,
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  over?: boolean;
  label: string;
}) {
  const ratio = max <= 0 ? 1 : Math.min(1, Math.max(0, value / max));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const color = over ? "var(--danger)" : "var(--primary)";
  const center = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="ring"
      role="img"
      aria-label={label}
    >
      <circle cx={center} cy={center} r={r} fill="none" stroke="var(--border-subtle)" strokeWidth={stroke} />
      <circle
        cx={center}
        cy={center}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - ratio)}
        transform={`rotate(-90 ${center} ${center})`}
        className="ring-fill"
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="central"
        className="ring-label"
        fill={over ? "var(--danger)" : "var(--ink)"}
      >
        {Math.round(ratio * 100)}%
      </text>
    </svg>
  );
}
