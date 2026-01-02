import type { Token } from '../../lib/types';

export function ChainIcon({ chain, className = "h-4 w-4" }: { chain: Token['chain'], className?: string }) {
  const commonClasses = `shrink-0 ${className}`;
  
  switch (chain) {
    case 'eth':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={commonClasses}>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16.3698 5.3482L16.2031 5.759V18.2588L23.4754 14.053L16.3698 5.3482ZM16.2031 20.3207V26.6518L23.5 15.9328L16.2031 20.3207ZM15.8239 5.3482L8.5246 14.053L15.7969 18.2588V5.759L15.8239 5.3482ZM15.7969 20.3207L8.5 15.9328L15.7969 26.6518V20.3207Z" fill="white"/>
        </svg>
      );
    case 'sol':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={commonClasses}>
            <circle cx="16" cy="16" r="16" fill="#7DF9FF"/>
            <path d="M10 16.5H22" stroke="#1E1B2E" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 11.5H19" stroke="#1E1B2E" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 21.5H22" stroke="#1E1B2E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'base':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={commonClasses}>
            <circle cx="16" cy="16" r="16" fill="#0052FF"/>
            <path d="M9.5 15.125V11.875H22.5V15.125H18.25V17.875H13.75V15.125H9.5ZM13.75 17.875H18.25V20.125H13.75V17.875Z" fill="white"/>
        </svg>
      );
    default:
      return null;
  }
}
