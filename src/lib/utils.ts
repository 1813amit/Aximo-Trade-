
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (value: number) => {
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
};

export const formatSubscript = (value: number): string => {
    const str = value.toFixed(3);
    const parts = str.split('.');
    if (parts.length < 2) return str;

    let decimals = parts[1];
    let zeroCount = 0;
    for(let i = 0; i < decimals.length; i++) {
        if(decimals[i] === '0') {
            zeroCount++;
        } else {
            break;
        }
    }
    
    if (zeroCount > 0) {
        return `${parts[0]}.0<sub>${zeroCount}</sub>${decimals.substring(zeroCount)}`;
    }
    
    return str;
};
