
"use client";

import React from 'react';
import { cn } from '../../lib/utils';
import type { Token } from '../../lib/types';
import { StatIcon } from './StatIcon';

export const StatItem = React.memo(({ icon, value, className }: { icon: React.ReactNode, value?: React.ReactNode, className?: string }) => (
    <div className={cn("flex items-center gap-1.5 text-muted-foreground", className)}>{icon}{value}</div>
));
StatItem.displayName = 'StatItem';


export const ProgressPill = React.memo(({ stat }: { stat: Token['stats']['progress'][0] }) => {
    const variantClasses = {
        red: 'text-red-400',
        green: 'text-green-400',
        gray: 'text-muted-foreground',
    }
    return (
        <div className={cn(
            "flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-[#101114] border-primary-stroke/50 border-[1px]",
            variantClasses[stat.variant]
        )}>
            <div className="w-[16px] h-[16px] flex items-center justify-center">
                <StatIcon type={stat.icon} className="h-3.5 w-3.5" />
            </div>
            { stat.value !== null && <span className={cn("text-[12px] font-medium")}>{stat.value}%</span> }
            {stat.timeframe && <span className='text-muted-foreground/80 text-[11px]'>{stat.timeframe}</span>}
        </div>
    )
});
ProgressPill.displayName = 'ProgressPill';

export const TxBar = React.memo(({ buy, sell }: { buy: number, sell: number }) => {
  const total = buy + sell;
  if (total === 0) {
    return <div className="flex-1 min-w-[24px] max-w-[24px] h-[2px] rounded-full bg-secondary-stroke overflow-hidden"></div>;
  }
  const buyPercent = (buy / total) * 100;
  
  return (
    <div className="flex flex-row flex-1 min-w-[24px] max-w-[24px] h-[2px] bg-secondary-stroke rounded-full overflow-hidden">
        <div className="h-[3px] bg-green-500" style={{width: `${buyPercent}%`}}></div>
        <div className="h-[3px] bg-red-500" style={{width: `${100 - buyPercent}%`}}></div>
    </div>
  );
});
TxBar.displayName = 'TxBar';
