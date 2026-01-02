"use client";

import React, { useState, useEffect, useRef } from 'react';
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
    
    // State for animated percentage
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const prevPercentageRef = useRef(0);
    
    // Animate the percentage change
    useEffect(() => {
        // If percentage hasn't changed, don't animate
        if (prevPercentageRef.current === boundingPercentage) {
            setAnimatedPercentage(boundingPercentage);
            return;
        }
        
        const duration = 1500; // 1.5 seconds animation
        const startTime = Date.now();
        const startPercentage = prevPercentageRef.current;
        const endPercentage = boundingPercentage;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            const currentPercentage = startPercentage + (endPercentage - startPercentage) * easeOutQuart;
            setAnimatedPercentage(currentPercentage);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                prevPercentageRef.current = endPercentage;
            }
        };
        
        requestAnimationFrame(animate);
        
        // Update previous percentage for next animation
        return () => {
            prevPercentageRef.current = boundingPercentage;
        };
    }, [boundingPercentage]);

    // CSS for the animation
    const addStyles = `
        @keyframes rotateSlow {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        
        .progress-ring {
            animation: rotateSlow 3s linear infinite;
            transform-origin: center;
        }
        
        @keyframes pulseGlow {
            0%, 100% {
                opacity: 0.7;
            }
            50% {
                opacity: 1;
            }
        }
        
        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
        }
    `;

    return (
        <>
            <style>{addStyles}</style>
            <div className="relative shrink-0 self-start">
                <Popover trigger="hover" >
                    <PopoverTrigger asChild>
                        <div className="relative w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] group/image">
                            <div className={cn(
                                "absolute -inset-[2px] rounded-sm opacity-30 group-hover/image:opacity-60 transition-opacity p-[0.5px]",
                                token.imageBorderColor && `bg-gradient-to-r ${borderColorClasses[token.imageBorderColor]}`
                            )}></div>
                            
                            {token.imageBorderColor && (
                                <div className="absolute -inset-[2px] rounded-sm overflow-hidden p-[2px]">
                                    {/* Animated progress ring */}
                                    <div 
                                        className="absolute inset-0 progress-ring"
                                        style={{
                                            background: `conic-gradient(
                                                ${gradientColor} 0deg, 
                                                ${gradientColor} ${animatedPercentage * 3.6}deg, 
                                                transparent ${animatedPercentage * 3.6}deg, 
                                                transparent 360deg
                                            )`,
                                            transition: 'background 0.1s linear'
                                        } as React.CSSProperties}
                                    />
                                    
                                    {/* Glow effect for the filled portion */}
                                    <div 
                                        className="absolute inset-0 pulse-glow"
                                        style={{
                                            background: `conic-gradient(
                                                transparent 0deg, 
                                                transparent ${Math.max(0, (animatedPercentage * 3.6) - 10)}deg,
                                                ${gradientColor} ${Math.max(0, (animatedPercentage * 3.6) - 10)}deg,
                                                ${gradientColor} ${Math.min(360, (animatedPercentage * 3.6) + 10)}deg,
                                                transparent ${Math.min(360, (animatedPercentage * 3.6) + 10)}deg,
                                                transparent 360deg
                                            )`,
                                            filter: 'blur(2px)',
                                            transition: 'background 0.1s linear'
                                        } as React.CSSProperties}
                                    />
                                </div>
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
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card/80 transition-colors duration-200">
                                                    <EyeSlashIcon className="h-3.5 w-3.5" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="right"><p>Hide Token</p></TooltipContent>
                                        </Tooltip>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card/80 transition-colors duration-200">
                                                    <ChefHatIcon className="h-3.5 w-3.5" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="right"><p>Pro View</p></TooltipContent>
                                        </Tooltip>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:bg-card/80 transition-colors duration-200">
                                                    <ThumbsUp className="h-3.5 w-3.5" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="right"><p>Vote</p></TooltipContent>
                                        </Tooltip>
                                    </div>
                                    <CameraIcon className="h-6 w-6 text-white transition-transform duration-200 group-hover/image:scale-110" />
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

                <Button variant="link" className="text-muted-foreground hover:text-primary-blue-hover h-auto p-0 mt-1 max-w-[68px] sm:max-w-[74px] truncate text-xs transition-colors duration-200">
                    {token.pump}
                </Button>
            </div>
        </>
    );
};