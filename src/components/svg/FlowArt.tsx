export function FlowArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      {/* Background container glow */}
      <rect x="15" y="15" width="210" height="120" rx="8" fill="var(--blue)" opacity="0.01" />

      {/* Main browser panel */}
      <rect
        x="15"
        y="15"
        width="210"
        height="120"
        rx="8"
        fill="var(--surface-2)"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />

      {/* Browser header */}
      <rect
        x="15"
        y="15"
        width="210"
        height="18"
        rx="8"
        fill="var(--bg-soft)"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />
      {/* Window dots */}
      <circle cx="27" cy="24" r="2.5" fill="#ff5f56" />
      <circle cx="35" cy="24" r="2.5" fill="#ffbd2e" />
      <circle cx="43" cy="24" r="2.5" fill="#27c93f" />

      {/* Title placeholder */}
      <line
        x1="85"
        y1="24"
        x2="155"
        y2="24"
        stroke="var(--fg-muted)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* --- Column 1: TODO (Left) --- */}
      <g>
        <rect
          x="25"
          y="38"
          width="50"
          height="88"
          rx="4"
          fill="var(--bg-soft)"
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="33"
          y1="46"
          x2="53"
          y2="46"
          stroke="var(--fg-muted)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Static background cards in TODO */}
        <rect
          x="30"
          y="84"
          width="40"
          height="22"
          rx="4"
          fill="var(--surface)"
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1="36"
          y1="92"
          x2="56"
          y2="92"
          stroke="var(--fg-muted)"
          strokeWidth="2"
          opacity="0.3"
        />
        <line
          x1="36"
          y1="98"
          x2="48"
          y2="98"
          stroke="var(--fg-muted)"
          strokeWidth="2"
          opacity="0.3"
        />
      </g>

      {/* --- Column 2: IN PROGRESS (Middle) --- */}
      <g>
        <rect
          x="95"
          y="38"
          width="50"
          height="88"
          rx="4"
          fill="var(--bg-soft)"
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="103"
          y1="46"
          x2="128"
          y2="46"
          stroke="var(--fg-muted)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>

      {/* --- Column 3: DONE (Right) --- */}
      <g>
        <rect
          x="165"
          y="38"
          width="50"
          height="88"
          rx="4"
          fill="var(--bg-soft)"
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="173"
          y1="46"
          x2="193"
          y2="46"
          stroke="var(--fg-muted)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Static completed card in DONE */}
        <g opacity="0.4">
          <rect
            x="170"
            y="84"
            width="40"
            height="22"
            rx="4"
            fill="var(--surface)"
            stroke="var(--blue-soft)"
            strokeWidth="1"
          />
          <path
            d="M 180 95 L 183 97 L 188 92"
            stroke="var(--blue-soft)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </g>

      {/* --- Connecting flow arrow/line behind moving cards --- */}
      <path
        d="M 50 65 H 190"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.5"
      />

      {/* --- The Moving State Card (Moves from left to right) --- */}
      <g>
        {/* Translation Animation (Todo -> Doing -> Done -> Todo) */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 0; 70 0; 70 0; 140 0; 140 0; 0 0"
          keyTimes="0; 0.22; 0.34; 0.57; 0.68; 0.91; 1"
          dur="7s"
          repeatCount="indefinite"
        />

        {/* Card Body with changing fill/stroke/opacity */}
        <rect
          x="30"
          y="54"
          width="40"
          height="22"
          rx="4"
          fill="var(--surface)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        >
          <animate
            attributeName="fill"
            values="var(--surface);var(--surface);var(--surface-2);var(--surface-2);var(--blue);var(--blue);var(--surface)"
            keyTimes="0; 0.22; 0.34; 0.57; 0.68; 0.91; 1"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke"
            values="var(--line-strong);var(--line-strong);var(--gold-2);var(--gold-2);var(--blue-soft);var(--blue-soft);var(--line-strong)"
            keyTimes="0; 0.22; 0.34; 0.57; 0.68; 0.91; 1"
            dur="7s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Card Content: Text Lines (Visible in Todo / Doing, fades in Done) */}
        <g>
          <line
            x1="36"
            y1="61"
            x2="56"
            y2="61"
            stroke="var(--fg)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke"
              values="var(--fg);var(--fg);var(--gold-2);var(--gold-2);transparent;transparent;var(--fg)"
              keyTimes="0; 0.22; 0.34; 0.57; 0.68; 0.91; 1"
              dur="7s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="36"
            y1="67"
            x2="48"
            y2="67"
            stroke="var(--fg-muted)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke"
              values="var(--fg-muted);var(--fg-muted);var(--gold-3);var(--gold-3);transparent;transparent;var(--fg-muted)"
              keyTimes="0; 0.22; 0.34; 0.57; 0.68; 0.91; 1"
              dur="7s"
              repeatCount="indefinite"
            />
          </line>
        </g>

        {/* Card Content: Glowing Checkmark (Fades in when in DONE stage) */}
        <path
          d="M 45 65 L 48 67 L 53 62"
          stroke="var(--gold-1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0"
            keyTimes="0; 0.22; 0.34; 0.57; 0.68; 0.91; 1"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
