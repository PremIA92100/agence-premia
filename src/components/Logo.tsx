interface LogoProps {
  variant?: "navbar" | "footer" | "full";
  className?: string;
}

function PremiaIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wireframe P -- network/circuit style */}
      <line x1="10" y1="6" x2="10" y2="34" stroke="#00D4FF" strokeWidth="2" />
      <line x1="10" y1="6" x2="26" y2="6" stroke="#00D4FF" strokeWidth="2" />
      <line x1="26" y1="6" x2="30" y2="10" stroke="#00D4FF" strokeWidth="2" />
      <line x1="30" y1="10" x2="30" y2="16" stroke="#00D4FF" strokeWidth="2" />
      <line x1="30" y1="16" x2="26" y2="20" stroke="#00D4FF" strokeWidth="2" />
      <line x1="10" y1="20" x2="26" y2="20" stroke="#00D4FF" strokeWidth="2" />

      {/* Internal network lines */}
      <line x1="10" y1="6" x2="20" y2="13" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
      <line x1="26" y1="6" x2="20" y2="13" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
      <line x1="30" y1="10" x2="20" y2="13" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
      <line x1="30" y1="16" x2="20" y2="13" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
      <line x1="26" y1="20" x2="20" y2="13" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
      <line x1="10" y1="20" x2="20" y2="13" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />

      {/* Network nodes */}
      <circle cx="10" cy="6" r="2.5" fill="#00D4FF" />
      <circle cx="26" cy="6" r="2" fill="#00D4FF" />
      <circle cx="30" cy="10" r="2" fill="#00D4FF" />
      <circle cx="30" cy="16" r="2" fill="#00D4FF" />
      <circle cx="26" cy="20" r="2" fill="#00D4FF" />
      <circle cx="10" cy="20" r="2.5" fill="#00D4FF" />
      <circle cx="10" cy="34" r="2.5" fill="#00D4FF" />
      <circle cx="20" cy="13" r="2" fill="#00D4FF" opacity="0.7" />
      <circle cx="10" cy="27" r="1.5" fill="#00D4FF" opacity="0.4" />
    </svg>
  );
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center gap-1.5 ${className}`}>
        <div className="flex items-center gap-2.5">
          <PremiaIcon className="h-9 w-9" />
          <span className="text-xl font-black tracking-tight text-white">
            Prem&apos;IA
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text-dim)]">
          Agence Digitale IA
        </span>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        <div className="flex items-center gap-2.5">
          <PremiaIcon className="h-8 w-8" />
          <span className="text-lg font-black tracking-tight text-white">
            Prem&apos;IA
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-text-dim)]">
          Agence Digitale IA
        </span>
      </div>
    );
  }

  // navbar (default)
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <PremiaIcon className="h-8 w-8" />
      <span className="text-lg font-black tracking-tight text-white">
        Prem&apos;IA
      </span>
    </div>
  );
}
