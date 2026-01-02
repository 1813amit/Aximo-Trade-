'use client';

import { Button } from "./ui/button";
import { HelpCircle, ListChecks, ChevronDown, BookmarkX, Keyboard, Volume2, Crosshair, Settings, Wallet, ListFilter, Flashlight, ListCheck, ListCheckIcon, Zap } from "lucide-react";
import { ChainIcon } from "./icons/ChainIcon";
import Image from "next/image";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";

const QuickBuyButton = ({children, className, active = false}: {children: React.ReactNode, className?: string, active?: boolean}) => (
    <Button 
        variant="ghost"
        className={cn(`group w-[24px] h-[24px] p-0 rounded-[4px]`,
            active ? 'hover:bg-primary-blue-hover/10' : 'hover:bg-primary-stroke/60',
            className
        )}
    >
        <span className={cn(`text-[13px] font-medium`,
            active ? 'text-primary-blue group-hover:text-primary-blue-hover' : 'text-text-secondary'
        )}>{children}</span>
    </Button>
)

const HoverPopup = ({ text, children }: { text: string, children: React.ReactNode }) => (
    <div className="relative group">
        {children}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-[#1a1b26] border border-[#292b37] rounded-md shadow-lg z-30 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all  ">
            <span className="text-xs text-white">{text}</span>
        </div>
    </div>
)

interface PulsePageHeaderProps {
  className?: string;
}


export function PulsePageHeader({ className }: PulsePageHeaderProps) {
    return (
        
        <div className={cn("flex-none flex flex-row w-full h-[32px] justify-start items-center", className)}>
            <div className="flex-1 flex items-center gap-3">
                <span className="text-text-primary text-xl font-medium">Pulse</span>
                <div className="flex items-center gap-1">
                    {/* Solana with Hover */}
                    <HoverPopup text="Solana">
                        <button type="button" className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all   bg-[#1e1f23] scale-110" aria-label="Switch to Solana">
                            <Image alt="SOL" loading="lazy" width="20" height="20" src="/sol-icon.svg" />
                        </button>
                    </HoverPopup>
                    
                    {/* BNB with Hover */}
                    <HoverPopup text="BNB">
                        <button type="button" className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all   hover:bg-primary-stroke/30 opacity-60 hover:opacity-100" aria-label="Switch to BNB">
                            <Image alt="BNB" loading="lazy" width="20" height="20" className="grayscale-[0.3]" src="/bnb-icon.svg" />
                        </button>
                    </HoverPopup>
                </div>
            </div>

            <div className="hidden sm:block lg:hidden pr-2">
                <div className="flex flex-row h-full gap-2 items-center justify-start">
                    <div className="overflow-hidden whitespace-nowrap border-primary-stroke font-normal border-[1px] flex flex-row min-w-[216px] h-8 pl-3 gap-2 justify-start items-center rounded-full  hover:bg-primary-stroke/35 transition-colors  cursor-pointer">
                        <span className="flex text-sm text-text-tertiary font-medium">
                            <Zap className="w-3.5 h-3.5" />
                        </span>
                        <div className="flex flex-1 sm:max-w-[60px] min-w-[0px]">
                            <Input placeholder="0.0" className="text-sm w-full text-text-primary placeholder:text-text-tertiary font-medium outline-none bg-transparent text-left h-auto p-0 border-0 focus-visible:ring-0" type="text" defaultValue="0"/>
                        </div>
                        <Image alt="SOL" loading="lazy" width="16" height="16" src="/sol-icon.svg"/>
                        <div className="border-primary-stroke border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-1.5 justify-center items-center cursor-pointer">
                            <QuickBuyButton active>P1</QuickBuyButton>
                            <QuickBuyButton>P2</QuickBuyButton>
                            <QuickBuyButton className="rounded-r-full rounded-l-[4px]">P3</QuickBuyButton>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row gap-4 items-center">
                {/* HelpCircle with Filter Setting */}
                <HoverPopup text="Help + Filter Setting">
                    <Button variant="ghost" size="icon" className="w-6 h-6">
                        <HelpCircle className="w-5 h-5 text-text-tertiary hover:text-white transition-all   ease-in-out"/>
                    </Button>
                </HoverPopup>
                
                {/* Display Button */}
                <Button className="bg-[#1e1f23] flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full 
                    hover:bg-[#27272a] transition-color ease-in-out
                ">
                    <ListCheckIcon className="w-[18px] h-[18px] text-text-primary"/>
                    <div className="whitespace-nowrap flex flex-row gap-1 justify-start items-center ">
                        <span className="text-sm font-bold text-text-primary">Display</span>
                    </div>
                    <ChevronDown className="w-[18px] h-[18px] text-text-primary"/>
                </Button>
                
                {/* BookmarkX - Blacklist/Handle/Keywords */}
                <HoverPopup text="Blacklist / Handle / Keywords">
                    <Button variant="ghost" size="icon" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-[#1e1f23] transition-colors relative rounded-full">
                        <BookmarkX className="w-4 h-4 text-text-secondary hover:text-white" />
                    </Button>
                </HoverPopup>
                
                {/* Keyboard - Pulse Hotkey */}
                <HoverPopup text="Pulse Hotkey">
                    <Button variant="ghost" size="icon" className="-mr-[5px] group flex items-center justify-center w-8 h-8 relative rounded-full hover:bg-[#1e1f23] bg-transparent transition-all  ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <Keyboard className="text-[16px] w-4 h-4 text-text-secondary hover:text-white"/>
                    </Button>
                </HoverPopup>
                
                {/* Volume2 - Alert */}
                <HoverPopup text="Alert">
                    <Button variant="ghost" size="icon" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-[#1e1f23] transition-colors relative rounded-full">
                        <Volume2 className="text-[16px] w-4 h-4 text-text-secondary hover:text-white transition-colors   ease-in-out"/>
                    </Button>
                </HoverPopup>
                
                {/* Crosshair - Snipe Settings */}
                <HoverPopup text="Snipe Settings">
                    <Button variant="ghost" size="icon" className="group flex items-center justify-center w-8 h-8 bg-background hover:bg-[#1e1f23] transition-colors relative rounded-full">
                        <Crosshair className="text-text-secondary hover:text-white text-[16px] w-4 h-4"/>
                        <Settings className="text-[12px] w-3 h-3 text-text-secondary hover:text-white absolute bottom-0 right-0"/>
                    </Button>
                </HoverPopup>
                
                {/* Wallet - Active Wallets */}
                <HoverPopup text="Active Wallets">
                    <Button variant="ghost" className="flex border border-primary-stroke group flex-row p-1 pr-3 pl-3 h-8 gap-2 justify-center items-center hover:bg-primary-stroke/35 transition-colors  cursor-pointer rounded-full">
                        <div className="flex flex-row gap-1 justify-center items-center">
                            <Wallet className="w-[18px] h-[18px] text-text-secondary hover:text-white transition-colors  ease-in-out cursor-pointer"/>
                            <span className="text-sm text-text-secondary font-medium hover:text-white transition-colors  ease-in-out cursor-pointer">1</span>
                        </div>
                        <div className="flex flex-row gap-1 justify-center items-center">
                            <Image alt="SOL" loading="lazy" width="16" height="16" src="/sol-icon.svg"/>
                            <span className="text-sm text-text-primary font-medium hover:text-white transition-colors   ease-in-out cursor-pointer"><span>0</span></span>
                        </div>
                        <ChevronDown className="w-[18px] h-[18px] text-text-secondary hover:text-white transition-colors   ease-in-out cursor-pointer"/>
                    </Button>
                </HoverPopup>
            </div>
        </div>
    )
}