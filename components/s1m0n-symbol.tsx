interface S1m0nSymbolProps {
  className?: string
  size?: number
}

export function S1m0nSymbol({ className = "", size = 40 }: S1m0nSymbolProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="s1m0n symbol"
    >
      {/* Vertical stroke (the "1") */}
      <path
        d="M52 4 C52 4, 50 80, 50 156"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Upper S curve */}
      <path
        d="M50 28 C20 28, 14 52, 30 68 C46 84, 50 72, 50 72"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lower S curve */}
      <path
        d="M50 72 C50 72, 54 60, 70 76 C86 92, 80 120, 50 120"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
