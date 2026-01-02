"use client";

import React from 'react';
import { cn } from '../../lib/utils';
import type { Token } from '../../lib/types';
import { Button } from '../ui/button';
import { Copy, Globe, Link, Search, Users } from 'lucide-react';
import { StatIcon } from './StatIcon';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { CreatorTooltip } from './CreatorTooltip';
import { StatItem } from './TokenRowParts';

export const TokenInfo = ({ token }: { token: Token }) => {
    return (
        <div className="flex flex-col w-full gap-[2px] justify-start items-start min-w-0">
            {/* Name Row */}
            <div className="flex flex-row min-h-[18px] w-full gap-[4px] justify-between items-start min-w-0 ">
                <div className="overflow-hidden">
                    <div className=" justify-start items-start " style={{ minWidth: '129px' }}>
                        <div className="flex flex-row gap-[4px] justify-start items-center ">
                            {/* Display Name */}
                            <div 
                                className="min-w-0 whitespace-nowrap overflow-hidden truncate text-foreground text-[16px] font-medium tracking-[-0.02em]"
                                style={{ maxWidth: 'calc(120px)' }}
                            >
                                {token.name?.toUpperCase() || token.name?.toUpperCase()}
                            </div>
                            
                            {/* Token Name with Copy */}
                            <div className="min-w-0 flex-1 overflow-hidden ">
                                <button 
                                    type="button" 
                                    className="flex flex-row gap-[4px] justify-start items-center text-muted-foreground hover:text-primary-blue-hover transition-colors  min-w-0 overflow-hidden"
                                    onClick={() => navigator.clipboard.writeText(token.name)}
                                >
                                    <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] sm:text-[16px] lg:text-[14px] xl:text-[16px] text-left font-medium tracking-[-0.02em] xl:truncate xl:max-w-full block">
                                        {token.name}
                                    </div>
                                    <Copy className="text-inherit w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats and Social Row */}
            <div className="flex flex-row w-full h-[18px] gap-[12px] lg:gap-[8px] xl:gap-[12px] justify-start items-center">
                <div className="flex items-center gap-[8px]">
                    {/* Age/Duration */}
                    <span className="text-green-400 text-[14px] font-medium">
                        {token.created || token.created}
                    </span>
                </div>
                
                {/* Social Icons */}
                <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center">
                    {/* Popover for Users */}
                    <Popover trigger="hover">
                        <PopoverTrigger asChild>
                            <div className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                                <div className="flex items-center gap-[2px]">
                                    <Users className="w-4 h-4" />
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent side="bottom" align="start" className="w-80 p-0 border-border bg-popover shadow-lg mt-1">
                            <CreatorTooltip token={token} />
                        </PopoverContent>
                    </Popover>

                    {/* Website */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Globe className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors " />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Website</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Socials */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Link className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors " />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Socials</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Scan */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Search className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors " />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Scan</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                
                {/* Desktop Stats - Hidden on mobile */}
                <div className="flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex md:hidden lg:hidden xl:flex ">
                    {/* Chart/Views */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                                <div className="flex justify-center items-center min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]">
                                    <StatIcon type="chart" className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <span className="text-foreground text-[12px] font-medium">
                                    {token.stats.row.views}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Chart</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Trophy */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                                <StatIcon type="trophy" className="w-4 h-4 text-muted-foreground" />
                                <span className="text-foreground text-[12px] font-medium">
                                    {token.stats.row.trophy}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Pro Traders</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Crown/KOLs */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                                <StatIcon 
                                    type="crown" 
                                    className={cn(
                                        "w-4 h-4 pb-[1.2px]",
                                        token.stats.row.crown.color === 'yellow' ? 'text-yellow-400' : 'text-muted-foreground'
                                    )}
                                />
                                <span className="text-foreground text-[12px] font-medium">
                                    {token.stats.row.crown.current}/{token.stats.row.crown.total}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>KOLs</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>

            {/* Mobile Stats - Shown on sm:hidden, md:flex, lg:flex, xl:hidden */}
            <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]">
                {/* Chart/Views */}
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                            <div className="flex justify-center items-center min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]">
                                <StatIcon type="chart" className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <span className="text-foreground text-[12px] font-medium">
                                {token.stats.row.views}
                            </span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Chart</p>
                    </TooltipContent>
                </Tooltip>

                {/* Trophy */}
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                            <StatIcon type="trophy" className="w-4 h-4 text-muted-foreground" />
                            <span className="text-foreground text-[12px] font-medium">
                                {token.stats.row.trophy}
                            </span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Pro Traders</p>
                    </TooltipContent>
                </Tooltip>

                {/* Crown/KOLs */}
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                            <StatIcon 
                                type="crown" 
                                className={cn(
                                    "w-4 h-4 pb-[1.2px]",
                                    token.stats.row.crown.color === 'yellow' ? 'text-yellow-400' : 'text-muted-foreground'
                                )}
                            />
                            <span className="text-foreground text-[12px] font-medium">
                                {token.stats.row.crown.current}/{token.stats.row.crown.total}
                            </span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>KOLs</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
};