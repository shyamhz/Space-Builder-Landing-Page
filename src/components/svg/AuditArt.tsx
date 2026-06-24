export function AuditArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      {/* Background Grid */}
      <circle cx="60" cy="30" r="1" fill="var(--line-strong)" />
      <circle cx="180" cy="30" r="1" fill="var(--line-strong)" />

      {/* --- Left Side: Business Operations --- */}
      <g>
        <rect
          x="35"
          y="55"
          width="38"
          height="32"
          rx="4"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        />
        <path d="M 54 55 V 87 M 35 71 H 73" stroke="var(--gold-2)" strokeWidth="1.2" />
        <circle cx="54" cy="71" r="3" fill="var(--gold-2)" opacity="0.3" />
      </g>

      {/* --- Right Side: Automation Pipeline --- */}
      <g>
        <rect
          x="165"
          y="51"
          width="40"
          height="40"
          rx="6"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        />
        <ellipse cx="185" cy="61" rx="8" ry="3" fill="none" stroke="var(--blue)" strokeWidth="1" />
        <path d="M 177 61 V 68 A 8 3 0 0 0 193 68 V 61" stroke="var(--blue)" strokeWidth="1" />
        <path d="M 177 68 V 75 A 8 3 0 0 0 193 75 V 68" stroke="var(--blue)" strokeWidth="1" />
      </g>

      {/* --- Center: Audit Scanning & Data Flow --- */}
      <g>
        <path
          d="M 73 71 H 165"
          stroke="var(--line-strong)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* Moving operational data packet */}
        <circle r="3.5" fill="var(--gold-2)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 73 71 H 165" />
        </circle>

        {/* Moving Business Audit searchlight magnifier */}
        <g>
          <circle cx="110" cy="71" r="14" fill="none" stroke="var(--gold-2)" strokeWidth="1.5" />
          <line
            x1="120"
            y1="81"
            x2="128"
            y2="89"
            stroke="var(--gold-2)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-15 0; 25 0; -15 0"
            dur="4s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  );
}
