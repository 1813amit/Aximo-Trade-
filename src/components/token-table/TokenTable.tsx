
"use client";

import React from 'react';
import type { Token } from '../../lib/types';
import { TokenRow } from './TokenRow';
import { useTokenUpdates } from '../../hooks/use-token-updates';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { SlidersHorizontal, Flashlight, Zap } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { ScrollArea } from '../ui/scroll-area';
import { ChainIcon } from '../icons/ChainIcon';
import { cn } from '../../lib/utils';
import { Skeleton } from '../ui/skeleton';
import { useIsMobile } from '../../hooks/useIsMobile';

interface TokenTableProps {
  dataSource: Token[];
  title: string;
  isMigratedTable?: boolean;
  isFinalStretchTable?: boolean;
}

const QuickBuyButton = ({children, className, active = false}: {children: React.ReactNode, className?: string, active?: boolean}) => (
    <Button 
        variant="ghost"
        className={cn(`group w-[22px] h-[22px] p-0 rounded-[4px]`,
            active ? 'hover:bg-primary-blue-hover/10' : 'hover:bg-primary-stroke/60',
            className
        )}
    >
        <span className={cn(`text-[12px] font-medium`,
            active ? 'text-primary-blue group-hover:text-primary-blue-hover' : 'text-text-secondary'
        )}>{children}</span>
    </Button>
)


export function TokenTable({ dataSource, title, isMigratedTable = false, isFinalStretchTable = false }: TokenTableProps) {
  const { tokens } = useTokenUpdates(dataSource);
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div className="bg-card rounded-lg border border-border">
          <div className="divide-y divide-border/50">
              {tokens.length > 0 ? (
                tokens.map((token) => (
                  <TokenRow key={token.id} token={token} isMigratedTable={isMigratedTable} isFinalStretchTable={isFinalStretchTable} />
                ))
              ) : (
                <div className="p-3 space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <Skeleton className="h-[68px] w-[68px] rounded-sm" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#101114] min-h-0">
       <div className="flex sticky top-0 z-10 whitespace-nowrap flex-row w-full gap-[12px] min-h-[48px] justify-between items-center pr-[12px] pl-[12px] border-b-[1px] border-primary-stroke bg-[#101114]">
          <span className="text-text-primary text-[16px] font-medium flex-1 whitespace-nowrap">{title}</span>

          <div className="hidden lg:flex overflow-hidden whitespace-nowrap border-primary-stroke font-normal border-[1px] flex-row h-[28px] pl-[4px] gap-[6px] justify-start items-center rounded-full hover:bg-primary-stroke/35 transition-colors cursor-pointer">
              <span className="flex text-[14px] text-text-tertiary font-medium">
                  <Zap className="w-3.5 h-3.5" />
              </span>
              <div className="flex flex-1 sm:max-w-[32px] min-w-[0px]">
                  <Input placeholder="0.0" className="text-[12px] w-full text-text-primary placeholder:text-text-tertiary font-medium outline-none bg-transparent text-left h-auto p-0 border-0 focus-visible:ring-0" defaultValue="0" />
              </div>
              <ChainIcon chain="sol" className="w-[14px] h-[14px]" />
              <div className="border-primary-stroke border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
                  <div className="flex flex-row items-center gap-[4px]">
                      <QuickBuyButton active>P1</QuickBuyButton>
                      <QuickBuyButton>P2</QuickBuyButton>
                      <QuickBuyButton className="rounded-r-full rounded-l-[4px]">P3</QuickBuyButton>
                  </div>
              </div>
          </div>
          
          <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="group flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity  ease-in-out cursor-pointer rounded-[8px] sm:rounded-[4px] relative hover:bg-primary-stroke/30">
                      <SlidersHorizontal className="text-[16px] text-text-secondary w-4 h-4"/>
                  </Button>
              </TooltipTrigger>
              <TooltipContent>Filters</TooltipContent>
          </Tooltip>
       </div>

        <ScrollArea className="flex-grow min-h-0">
          <div className="divide-y divide-border/50">
              {tokens.length > 0 ? (
                tokens.map((token) => (
                  <TokenRow key={token.id} token={token} isMigratedTable={isMigratedTable} isFinalStretchTable={isFinalStretchTable} />
                ))
              ) : (
                <div className="p-3 space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <Skeleton className="h-[74px] w-[74px] rounded-sm" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </ScrollArea>
    </div>
  );
}
