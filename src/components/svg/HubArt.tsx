export function HubArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      {/* Background Grid */}
      <circle cx="60" cy="30" r="1" fill="var(--line-strong)" />
      <circle cx="120" cy="30" r="1" fill="var(--line-strong)" />
      <circle cx="180" cy="30" r="1" fill="var(--line-strong)" />
      <circle cx="60" cy="120" r="1" fill="var(--line-strong)" />
      <circle cx="120" cy="120" r="1" fill="var(--line-strong)" />
      <circle cx="180" cy="120" r="1" fill="var(--line-strong)" />

      {/* --- Connecting sequential pipeline routing tracks --- */}
      <g stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M 61 75 H 97" />
        <path d="M 143 75 H 160 V 51 H 178" />
        <path d="M 143 75 H 160 V 99 H 178" />
      </g>

      {/* Staggered sequential data packet bursts */}
      {/* packet 1: Trigger to AI Node */}
      <circle r="3" fill="var(--gold-2)">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 61 75 H 97" />
      </circle>
      {/* packet 2a & 2b: AI Node to Database / Chat (fired when packet 1 reaches AI node at 0.8s) */}
      <circle r="3" fill="var(--blue-soft)">
        <animateMotion
          dur="2.4s"
          begin="0.8s"
          repeatCount="indefinite"
          path="M 143 75 H 160 V 51 H 178"
        />
      </circle>
      <circle r="3" fill="var(--blue-soft)">
        <animateMotion
          dur="2.4s"
          begin="0.8s"
          repeatCount="indefinite"
          path="M 143 75 H 160 V 99 H 178"
        />
      </circle>

      {/* --- Block 1: TRIGGER Node (Left - Mail Incoming) --- */}
      <g transform="translate(15, 55)">
        <rect
          x="0"
          y="0"
          width="46"
          height="40"
          rx="6"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        />

        {/* Envelope Icon */}
        <rect
          x="8"
          y="8"
          width="30"
          height="18"
          rx="2"
          stroke="var(--gold-2)"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M 8 8 L 23 19 L 38 8" stroke="var(--gold-2)" strokeWidth="1.2" fill="none" />

        {/* Trigger Pulsing Beacon */}
        <circle cx="23" cy="16" r="3.5" fill="var(--gold-2)">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Bottom Label Line */}
        <line
          x1="8"
          y1="31"
          x2="38"
          y2="31"
          stroke="var(--fg-muted)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* --- Block 2: AI PROCESSOR Node (Center - Brain Chip) --- */}
      <g transform="translate(97, 55)">
        {/* Glowing aura under chip */}
        <rect x="-2" y="-2" width="50" height="44" rx="8" fill="var(--blue)" opacity="0.03" />

        <rect
          x="0"
          y="0"
          width="46"
          height="40"
          rx="6"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        />

        {/* Silicon core */}
        <circle cx="23" cy="20" r="4.5" fill="var(--blue)" />

        {/* Microchip tracks connectors */}
        <line
          x1="-3"
          y1="15"
          x2="11"
          y2="15"
          stroke="var(--blue-soft)"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <line
          x1="-3"
          y1="25"
          x2="11"
          y2="25"
          stroke="var(--blue-soft)"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <line
          x1="35"
          y1="15"
          x2="49"
          y2="15"
          stroke="var(--blue-soft)"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <line
          x1="35"
          y1="25"
          x2="49"
          y2="25"
          stroke="var(--blue-soft)"
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Dynamic center pulse */}
        <circle
          cx="23"
          cy="20"
          r="4.5"
          fill="none"
          stroke="var(--blue)"
          strokeWidth="1.2"
          opacity="0.8"
        >
          <animate
            attributeName="r"
            values="4.5;14;4.5"
            dur="2.4s"
            begin="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0;0.8"
            dur="2.4s"
            begin="0.8s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* --- Block 3: ACTION A Node (Top-Right - Database) --- */}
      <g transform="translate(178, 31)">
        <rect
          x="0"
          y="0"
          width="46"
          height="40"
          rx="6"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        />

        {/* Cylinder Database Icon */}
        <ellipse
          cx="23"
          cy="11"
          rx="7"
          ry="2.8"
          fill="none"
          stroke="var(--gold-2)"
          strokeWidth="1.2"
        />
        <path d="M 16 11 V 17 A 7 2.8 0 0 0 30 17 V 11" stroke="var(--gold-2)" strokeWidth="1.2" />
        <path d="M 16 17 V 23 A 7 2.8 0 0 0 30 23 V 17" stroke="var(--gold-2)" strokeWidth="1.2" />

        {/* Core database action glow */}
        <circle cx="23" cy="17" r="2" fill="var(--gold-1)">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="2.4s"
            begin="1.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Bottom Label Line */}
        <line
          x1="8"
          y1="31"
          x2="38"
          y2="31"
          stroke="var(--fg-muted)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* --- Block 4: ACTION B Node (Bottom-Right - Slack) --- */}
      <g transform="translate(178, 79)">
        <rect
          x="0"
          y="0"
          width="46"
          height="40"
          rx="6"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.2"
        />

        {/* Slack/Chat Bubble Icon */}
        <rect
          x="13"
          y="9"
          width="20"
          height="15"
          rx="3.5"
          stroke="var(--blue-soft)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M 18 24 L 15 28 L 22 24"
          stroke="var(--blue-soft)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Internal text line inside bubble */}
        <line
          x1="18"
          y1="14"
          x2="28"
          y2="14"
          stroke="var(--blue-soft)"
          strokeWidth="1"
          opacity="0.8"
        />
        <line
          x1="18"
          y1="18"
          x2="24"
          y2="18"
          stroke="var(--blue-soft)"
          strokeWidth="1"
          opacity="0.8"
        />

        {/* Core Slack action glow */}
        <circle cx="28" cy="18" r="2" fill="var(--blue-soft)">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="2.4s"
            begin="1.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Bottom Label Line */}
        <line
          x1="8"
          y1="31"
          x2="38"
          y2="31"
          stroke="var(--fg-muted)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
