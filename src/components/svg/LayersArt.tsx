export function LayersArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      {/* Background Glow */}
      <rect x="10" y="15" width="220" height="120" rx="6" fill="var(--blue)" opacity="0.03" />

      {/* Main browser container */}
      <rect
        x="10"
        y="15"
        width="220"
        height="120"
        rx="6"
        fill="var(--surface-2)"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
      />

      {/* Browser title bar */}
      <rect
        x="10"
        y="15"
        width="220"
        height="16"
        rx="6"
        fill="var(--bg-soft)"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
      />
      {/* Three window controls */}
      <circle cx="20" cy="23" r="2" fill="#ff5f56" />
      <circle cx="26" cy="23" r="2" fill="#ffbd2e" />
      <circle cx="32" cy="23" r="2" fill="#27c93f" />

      {/* Left panel: IDE Editor (Custom software) */}
      <rect
        x="18"
        y="38"
        width="94"
        height="88"
        rx="4"
        fill="#08080a"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />

      {/* Code syntax lines */}
      <line
        x1="26"
        y1="48"
        x2="56"
        y2="48"
        stroke="var(--blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="56"
        x2="76"
        y2="56"
        stroke="var(--gold-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="64"
        x2="66"
        y2="64"
        stroke="var(--blue-soft)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="72"
        x2="86"
        y2="72"
        stroke="var(--gold-1)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="80"
        x2="46"
        y2="80"
        stroke="var(--blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="88"
        x2="60"
        y2="88"
        stroke="var(--gold-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="96"
        x2="50"
        y2="96"
        stroke="var(--gold-1)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Blinking IDE cursor */}
      <rect x="52" y="93" width="1.5" height="6" fill="var(--gold-2)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Right panel: Live Analytics Dashboard */}
      <rect
        x="120"
        y="38"
        width="102"
        height="88"
        rx="4"
        fill="#0c0c0f"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />
      {/* Section title line */}
      <line
        x1="128"
        y1="46"
        x2="168"
        y2="46"
        stroke="var(--fg-muted)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Grid line background */}
      <line x1="128" y1="70" x2="212" y2="70" stroke="var(--line)" strokeWidth="1" />
      <line x1="128" y1="90" x2="212" y2="90" stroke="var(--line)" strokeWidth="1" />

      {/* Growing dynamic line chart */}
      <path
        d="M 128 85 L 148 65 L 168 75 L 188 50 L 212 60 V 90 H 128 Z"
        fill="var(--blue)"
        opacity="0.1"
      />
      <path
        d="M 128 85 L 148 65 L 168 75 L 188 50 L 212 60"
        stroke="var(--blue-soft)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="120"
        strokeDashoffset="120"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="120;0;0;120"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Pulsing bar chart modules */}
      <g>
        <rect x="128" y="100" width="12" height="16" rx="2" fill="var(--gold-2)" />
        <animate attributeName="height" values="4;16;4" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" values="112;100;112" dur="3s" repeatCount="indefinite" />
      </g>
      <g transform="translate(18, 0)">
        <rect x="128" y="96" width="12" height="20" rx="2" fill="var(--gold-3)" />
        <animate
          attributeName="height"
          values="8;20;8"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="108;96;108"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </g>
      <g transform="translate(36, 0)">
        <rect x="128" y="92" width="12" height="24" rx="2" fill="var(--gold-1)" />
        <animate
          attributeName="height"
          values="6;24;6"
          dur="3s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="110;92;110"
          dur="3s"
          begin="1s"
          repeatCount="indefinite"
        />
      </g>

      {/* User profile avatars */}
      <circle cx="195" cy="104" r="6" fill="var(--blue)" opacity="0.8" />
      <circle cx="207" cy="104" r="6" fill="var(--gold-2)" opacity="0.8" />
    </svg>
  );
}
