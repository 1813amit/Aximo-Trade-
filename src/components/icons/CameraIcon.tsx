
export function CameraIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2 8V20H22V8L18 4H6L2 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>

    );
}
