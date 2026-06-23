export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
        <defs>
          <linearGradient id="lg-mark" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--gold-1)" />
            <stop offset="1" stopColor="var(--gold-3)" />
          </linearGradient>
        </defs>
        <path
          d="M16 2.5 L27.5 9 V23 L16 29.5 L4.5 23 V9 Z"
          stroke="url(#lg-mark)"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="16" cy="16" r="3.4" fill="url(#lg-mark)" />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-fg">
        Space<span className="text-gold-2">Builder</span>
      </span>
    </span>
  );
}
