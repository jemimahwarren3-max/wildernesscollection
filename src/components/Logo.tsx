export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="13" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 34 L15 18 L21 27 L26 20 L33 30.5 L37 25 L44 34"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="3" y1="38" x2="45" y2="38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
