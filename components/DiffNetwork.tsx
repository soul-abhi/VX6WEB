export default function DiffNetwork({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 800" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="diff-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Faint ambient glow behind coordinates */}
      <circle cx="850" cy="400" r="350" fill="url(#diff-glow)" />

      <g stroke="currentColor" fill="none" strokeWidth="1.5">
        
        {/* Dashed lines representing connections */}
        <g strokeDasharray="4 6" opacity="0.6">
          <path d="M 680,290 L 735,465" />
          <path d="M 680,290 L 800,200" />
          <path d="M 800,200 L 780,310" />
          <path d="M 680,290 L 590,410" />
          <path d="M 680,290 L 610,510" />
          <path d="M 590,410 L 610,510" />
          <path d="M 590,410 L 540,510" />
          <path d="M 610,510 L 540,510" />
          <path d="M 610,510 L 640,550" />
          <path d="M 640,550 L 735,465" />
          <path d="M 735,465 L 800,430" />
          <path d="M 800,430 L 870,440" />
          <path d="M 870,440 L 795,540" />
          <path d="M 795,540 L 640,550" />
          <path d="M 680,630 L 640,550" />
          <path d="M 680,630 L 795,540" />
          
          <path d="M 800,200 L 850,320" />
          <path d="M 850,320 L 870,440" />
          <path d="M 780,310 L 850,320" />
        </g>

        {/* Outer/Ambient large ring faint */}
        <circle cx="950" cy="650" r="100" opacity="0.1" strokeDasharray="10 10" />
        
        {/* Nodes */}
        <g opacity="0.85">
          {/* Top small */}
          <circle cx="680" cy="110" r="18" />
          {/* Connects to the second one (long dotted) */}
          <line x1="680" y1="128" x2="680" y2="290" strokeDasharray="8 8" opacity="0.5" />

          {/* Top right medium-large */}
          <circle cx="800" cy="200" r="35" />
          <circle cx="800" cy="180" r="3" strokeWidth="1" /> {/* tiny detail inner */}

          {/* Center-left node */}
          <circle cx="680" cy="290" r="45" />

          <circle cx="780" cy="310" r="8" />

          {/* Far left small */}
          <circle cx="590" cy="410" r="12" />

          {/* Mid lower left grouping */}
          <circle cx="610" cy="510" r="28" />
          <circle cx="540" cy="510" r="22" />

          {/* Inner focus detail in bottom central */}
          <circle cx="640" cy="550" r="16" />
          <circle cx="640" cy="550" r="2" fill="currentColor" />

          <circle cx="680" cy="630" r="30" />
          <circle cx="680" cy="630" r="3" fill="currentColor" opacity="0.5" />

          {/* Center right central connection */}
          <circle cx="735" cy="465" r="5" />

          <circle cx="850" cy="320" r="45" opacity="0.6" />

          {/* Right edge small */}
          <circle cx="870" cy="440" r="10" />

          {/* Bottom mid right */}
          <circle cx="795" cy="540" r="25" />
          <path d="M 795,515 L 795,530" /> {/* Detailing line down */}
        </g>
      </g>
    </svg>
  );
}
