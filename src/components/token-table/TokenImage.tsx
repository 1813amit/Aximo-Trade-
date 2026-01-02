
"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import type { Token } from '../../lib/types';

import { Button } from '../ui/button';
import { ThumbsUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { TokenTooltip } from './TokenTooltip';
import { EyeSlashIcon } from '../icons/EyeSlashIcon';
import { CameraIcon } from '../icons/CameraIcon';
import { ChefHatIcon } from '../icons/ChefHatIcon';

const borderColorClasses: Record<string, string> = {
    yellow: 'from-yellow-400 via-yellow-200 to-yellow-600',
    green: 'from-green-500 via-green-300 to-green-600',
    red: 'from-red-500 via-red-300 to-red-600',
    pink: 'from-pink-500 via-pink-300 to-pink-600',
    purple: 'from-purple-500 via-purple-300 to-purple-600',
};

const cornerIconBorderColorClasses: Record<string, string> = {
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    pink: 'bg-pink-500',
    purple: 'bg-purple-500',
};

const gradientColors: Record<string, string> = {
  yellow: '#facc15', // yellow-400
  green: '#22c55e',  // green-500
  red: '#ef4444',    // red-500
  pink: '#ec4899',   // pink-500
  purple: '#8b5cf6', // purple-500
};

export const TokenImage = ({ token }: { token: Token }) => {
    const boundingPercentage = token.stats.progress[0]?.value ?? 0;
    const gradientColor = token.imageBorderColor ? gradientColors[token.imageBorderColor] : 'transparent';

    return (
        <div className="relative shrink-0 self-start">
            <Popover trigger="hover" >
                <PopoverTrigger asChild>
                     <div className="relative w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] group/image">
                        <div className={cn(
                            "absolute -inset-[2px] rounded-sm opacity-30 group-hover/image:opacity-60 transition-opacity  p-[0.5px]",
                             token.imageBorderColor && `bg-gradient-to-r ${borderColorClasses[token.imageBorderColor]}`
                        )}></div>
                        
                        {token.imageBorderColor && (
                             <div
                                className="absolute -inset-[2px] rounded-sm bounding-progress p-[2px]"
                                style={{
                                    '--angle': '0deg',
                                    background: `conic-gradient(from var(--angle), ${gradientColor} 0%, ${gradientColor} ${boundingPercentage}%, transparent ${boundingPercentage}%, transparent 100%)`,
                                } as React.CSSProperties}
                            />
                        )}

                        <a href="#" className="absolute inset-[0.5px] rounded-[3px] z-10">
                            <Image
                                src={token.image}
                                alt={token.name}
                                width={74}
                                height={74}
                                className="rounded-[2px] w-full h-full object-cover"
                                unoptimized
                            />
                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger asChild>
                                           <Button variant="ghost" size="icon" className="h-6 w-6 bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card/80">
                                               <EyeSlashIcon className="h-3.5 w-3.5" />
                                           </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="right"><p>Hide Token</p></TooltipContent>
                                    </Tooltip>
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger asChild>
                                           <Button variant="ghost" size="icon" className="h-6 w-6 bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card/80">
                                                <ChefHatIcon className="h-3.5 w-3.5" />
                                            </Button>
                                        </TooltipTrigger>
                                         <TooltipContent side="right"><p>Pro View</p></TooltipContent>
                                    </Tooltip>
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card/80">
                                                <ThumbsUp className="h-3.5 w-3.5" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="right"><p>Vote</p></TooltipContent>
                                    </Tooltip>
                                </div>
                                <CameraIcon className="h-6 w-6 text-white" />
                            </div>
                        </a>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[74px] h-[74px] rounded-[4px] bg-black/30 p-0.5">
                            <div className="bg-card w-full h-full rounded-[3px]"></div>
                        </div>
                        <div className={cn("absolute bottom-[-4px] right-[-4px] p-[1px] w-[16px] h-[16px] flex justify-center items-center rounded-full z-10", token.imageBorderColor ? cornerIconBorderColorClasses[token.imageBorderColor] : 'bg-blue-500' )}>
                            <div className="w-[14px] h-[14px] bg-background rounded-full flex justify-center items-center">
                                <Image alt="Pump V1" width="10" height="10" src="https://axiom.trade/images/pump.svg" />
                            </div>
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="center" className="w-auto p-0 border-border bg-popover shadow-lg mt-2">
                    <TokenTooltip token={token} />
                </PopoverContent>
            </Popover>

            <Button variant="link" className="text-muted-foreground hover:text-primary-blue-hover h-auto p-0 mt-1 max-w-[68px] sm:max-w-[74px] truncate text-xs transition-colors ">
                {token.pump}
            </Button>
        </div>
    );
};
