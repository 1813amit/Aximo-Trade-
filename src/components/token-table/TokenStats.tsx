
"use client";

import React from 'react';
import { cn, formatCurrency, formatSubscript } from '../../lib/utils';
import { Flame, Flashlight, Zap, ZapIcon } from 'lucide-react';
import type { Token } from '../../lib/types';
import { Button } from '../ui/button';
import { FlameIcon } from '../icons/FlameIcon';
import { SolIcon } from '../icons/SolIcon';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
    import { ScrollArea, ScrollBar } from '../ui/scroll-area';
    import { ProgressPill, TxBar } from './TokenRowParts';

export const TokenStats = ({ token }: { token: Token }) => {
    return (
        <div className="flex flex-col items-end justify-between gap-2 shrink-0 sm:ml-4">
            <div className="flex flex-col items-end gap-y-1 text-right w-full">
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <div className="flex flex-row h-[18px] gap-[4px] justify-end items-end cursor-pointer">
                            <span className="text-text-tertiary text-[12px] font-medium pb-[1.6px]">MC</span>
                            <span className={cn("text-[16px] font-medium", token.marketCapColor)}>{formatCurrency(token.marketCap)}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>Market Cap</TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className="flex flex-row h-[18px] gap-[4px] justify-end items-end cursor-pointer">
                                <span className="text-text-tertiary text-[12px] font-medium pb-[1.6px]">V</span>
                                <span className="text-[16px] font-medium text-white">{formatCurrency(token.volume)}</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Volume</TooltipContent>
                </Tooltip>
                <div className="relative flex flex-row gap-[8px] justify-start items-start -mt-[2px]">
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20 cursor-pointer">
                                <span className="text-text-tertiary text-[11px] font-medium">F</span>
                                <div className="flex flex-row gap-[2px] items-center">
                                    <SolIcon className="w-[14px] h-[14px] text-purple-400" />
                                    <span className="text-text-primary text-[12px] font-medium" dangerouslySetInnerHTML={{ __html: formatSubscript(token.f) }}></span>
                                </div>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Global Fee Paid</TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20 cursor-pointer">
                                <span className="text-text-tertiary text-[11px] font-medium">TX <span className="text-text-primary text-[11px] font-medium">{token.tx.total}</span></span>
                                <TxBar buy={token.tx.buy} sell={token.tx.sell} />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Transaction</TooltipContent>
                    </Tooltip>
                </div>
            </div>

            <div className="flex flex-col items-end gap-2">
  <button 
    type="button" 
    className="bg-blue-500 hover:bg-blue-600  text-[#090909] flex flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all  relative overflow-hidden group/quickBuyButton"
    style={{ paddingLeft: '6px', paddingRight: '6px' }}
  >
    <Zap className="text-[7px] flex items-center relative z-10 mr-1 " />
    <span className="text-[13px] font-bold relative z-10">0 SOL</span>
  </button>
            </div>
        </div>
    );
};
