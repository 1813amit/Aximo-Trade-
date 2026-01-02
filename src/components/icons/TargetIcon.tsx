export function TargetIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
    );
}
