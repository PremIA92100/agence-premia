interface LogoProps {
  variant?: "navbar" | "footer" | "full";
  className?: string;
}

function PremiaIcon({ className = "h-8 w-8", color = "#0891B2" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="10" y1="6" x2="10" y2="34" stroke={color} strokeWidth="2" />
      <line x1="10" y1="6" x2="26" y2="6" stroke={color} strokeWidth="2" />
      <line x1="26" y1="6" x2="30" y2="10" stroke={color} strokeWidth="2" />
      <line x1="30" y1="10" x2="30" y2="16" stroke={color} strokeWidth="2" />
      <line x1="30" y1="16" x2="26" y2="20" stroke={color} strokeWidth="2" />
      <line x1="10" y1="20" x2="26" y2="20" stroke={color} strokeWidth="2" />
      <line x1="10" y1="6" x2="20" y2="13" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="26" y1="6" x2="20" y2="13" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="30" y1="10" x2="20" y2="13" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="30" y1="16" x2="20" y2="13" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="26" y1="20" x2="20" y2="13" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="10" y1="20" x2="20" y2="13" stroke={color} strokeWidth="1" opacity="0.3" />
      <circle cx="10" cy="6" r="2.5" fill={color} />
      <circle cx="26" cy="6" r="2" fill={color} />
      <circle cx="30" cy="10" r="2" fill={color} />
      <circle cx="30" cy="16" r="2" fill={color} />
      <circle cx="26" cy="20" r="2" fill={color} />
      <circle cx="10" cy="20" r="2.5" fill={color} />
      <circle cx="10" cy="34" r="2.5" fill={color} />
      <circle cx="20" cy="13" r="2" fill={color} opacity="0.7" />
      <circle cx="10" cy="27" r="1.5" fill={color} opacity="0.4" />
    </svg>
  );
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  if (variant === "footer") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <PremiaIcon className="h-8 w-8" color="#00D4FF" />
        <span className="text-lg font-black tracking-tight text-white">Prem&apos;IA</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <PremiaIcon className="h-8 w-8" color="#0891B2" />
      <span className="text-lg font-black tracking-tight text-slate-900">Prem&apos;IA</span>
    </div>
  );
}
