export function SolIcon({ className }: { className?: string }) {
  const commonClasses = `shrink-0 ${className}`;
  return (
    <svg viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={commonClasses}>
        <path d="M11.666 9.88602L7.48192 17.525C7.04259 18.331 5.95741 18.331 5.51808 17.525L1.33398 9.88602C0.875989 9.04336 1.44268 8 2.41604 8H10.584C11.5573 8 12.124 9.04336 11.666 9.88602Z" fill="currentColor"/>
        <path d="M5.51808 0.474991C5.95741 -0.331009 7.04259 -0.331009 7.48192 0.474991L11.666 8.11397C12.124 8.95663 11.5573 10 10.584 10H2.41604C1.44268 10 0.875989 8.95663 1.33398 8.11397L5.51808 0.474991Z" fill="currentColor"/>
    </svg>
  );
}
