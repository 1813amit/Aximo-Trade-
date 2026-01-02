"use client";
import * as React from "react";
import { Button } from "../components/ui/button";
import { Book, ChevronUp, MessageSquare, Bell, Layout, Palette, Wifi, Link, ChevronDown } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider} from "./ui/tooltip";
import { useState } from "react";
import Image from "next/image";

// Mobile Navigation Component
const MobileNavLink = ({ href, children, active = false }: { href: string, children: React.ReactNode, active?: boolean }) => (
    <a href={href} className={cn("flex flex-col items-center gap-1.5 p-1 rounded-md w-1/5", active ? 'text-primary' : 'text-muted-foreground')}>
        {children}
    </a>
)

// Desktop Navigation Button Component with Tooltip
const DesktopNavButton = ({ 
  children, 
  icon: Icon, 
  label, 
  hasNotification = false,
  className,
  tooltipContent
}: { 
  children?: React.ReactNode, 
  icon?: any, 
  label?: string, 
  hasNotification?: boolean,
  className?: string,
  tooltipContent?: string
}) => (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button className={cn(
            "group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer",
            "hover:bg-primaryStroke/60 transition-colors ease-in-out border border-transparent hover:border-transparent",
            className
          )}>
            {hasNotification && (
              <div className="absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full border border-background"></div>
            )}
            {Icon && <Icon className="text-[16px] text-[#e5e7eb] group-hover:text-textSecondary transition-colors" />}
            {children}
            {label && (
              <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap group-hover:text-textSecondary">
                {label}
              </span>
            )}
          </button>
        </TooltipTrigger>
        {tooltipContent && (
          <TooltipContent side="top" align="center" className="z-50">
            <p className="text-xs">{tooltipContent}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
)

// Tooltip Button Component
const TooltipButton = ({ 
  children, 
  tooltipContent,
  className = "",
  side = "top" 
}: { 
  children: React.ReactNode, 
  tooltipContent: string,
  className?: string,
  side?: "top" | "right" | "bottom" | "left"
}) => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <div className={cn("inline-block", className)}>
          {children}
        </div>
      </TooltipTrigger>
      <TooltipContent side={side} align="center" className="z-50">
        <p className="text-xs">{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export function AppFooter() {
    const isMobile = useIsMobile();
    const [activePreset, setActivePreset] = useState(1);

    if (isMobile) {
        return (
            <>
            <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-around px-2 py-1.5 border-t border-border bg-[#06070b] z-50">
                <MobileNavLink href="#" active>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                    <span className="text-xs">Trending</span>
                </MobileNavLink>
                <MobileNavLink href="#">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z"/>
                    </svg>
                    <span className="text-xs">Track</span>
                </MobileNavLink>
                <MobileNavLink href="#">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <span className="text-xs">Pulse</span>
                </MobileNavLink>
                <MobileNavLink href="#">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8V4l8 8-8 8v-4H4V8h8z"/>
                    </svg>
                    <span className="text-xs">Perpetuals</span>
                </MobileNavLink>
                <MobileNavLink href="#">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span className="text-xs">Account</span>
                </MobileNavLink>
               
            </footer>
            </>
        )
    }

    return (
      <TooltipProvider>
        <footer className="flex-none flex items-center justify-between px-[24px] py-[6px] border-t border-primaryStroke bg-[#06070b] text-xs">
            {/* Left Section */}
            <div className="flex items-center gap-[16px] min-w-0">
                {/* PRESET Button */}
                <TooltipButton tooltipContent={`PRESET ${activePreset}`}>
                  <button className="text-blue-600 bg-[#151c3c] flex flex-row h-[24px] px-[8px] gap-[4px] justify-start items-center rounded-[4px] hover:bg-primaryBlue/25 transition-colors ease-in-out cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                      </svg>
                      <span className="text-[12px] font-semibold">PRESET {activePreset}</span>
                  </button>
                </TooltipButton>

                {/* Wallet Button */}
                <TooltipButton tooltipContent="Wallet Management">
                  <div className="relative flex">
                      <button className="group/wallets border border-primaryStroke flex flex-row h-[24px] pl-[8px] pr-[5px] gap-[6px] justify-start items-center rounded-full hover:bg-primaryStroke/60 transition-colors ease-in-out cursor-pointer">
                          <div className="flex flex-row gap-[4px] justify-start items-center">
                              <svg className="w-[14px] h-[14px] text-[#e5e7eb] group-hover/wallets:text-textSecondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                              </svg>
                              <span className="text-[12px] group-hover/wallets:text-textSecondary font-medium text-textSecondary transition-colors">1</span>
                          </div>
                          <div className="flex flex-row gap-[4px] justify-start items-center">
                              <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/sol-fill.svg" />
                              <span className="text-[12px] font-medium text-textSecondary">0</span>
                          </div>

                          <ChevronDown className="ml-1 w-3 h-3 text-textSecondary group-hover:text-textPrimary transition-colors" />
                      </button>
                  </div>
                </TooltipButton>

                {/* Divider */}
                <div className="hidden md:flex w-[1px] h-[20px] bg-[#292B37] flex-shrink-0"></div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-[8px]">
                    {/* Settings Button */}
                    <TooltipButton tooltipContent="Settings">
                      <button className="-mr-[4px] min-w-[24px] min-h-[24px] flex items-center justify-center text-[#c8c9d1] hover:bg-[#292B37] transition-colors ease-in-out rounded-[4px]">
                          <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                          </svg>
                      </button>
                    </TooltipButton>

                    {/* Navigation Buttons with Notifications */}
                    <DesktopNavButton 
                        icon={() => (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                        )}
                        label="Wallet"
                        hasNotification
                        tooltipContent="Wallet Management"
                    />
                    
                    <DesktopNavButton 
                        icon={() => (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        )}
                        label="Twitter"
                        hasNotification
                        tooltipContent="Twitter Integration"
                    />
                    
                    <DesktopNavButton 
                        icon={() => (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/>
                            </svg>
                        )}
                        label="Discover"
                        hasNotification
                        tooltipContent="Discover Tokens"
                    />
                    
                    <DesktopNavButton 
                        icon={() => (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                        )}
                        label="Pulse"
                        hasNotification
                        tooltipContent="Market Pulse"
                    />
                    
                    <DesktopNavButton 
                        icon={() => (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                            </svg>
                        )}
                        label="PnL"
                        tooltipContent="Profit and Loss"
                    />

                    <div className="hidden md:flex w-[1px] h-[20px] bg-[#292B37] flex-shrink-0"></div>
                    
                    {/* Gradient Pill Button */}
                    <TooltipButton tooltipContent="Trending Meme Coins">
                      <button className="hidden lg:flex flex-row h-[24px] px-[0px] justify-start items-center hover:brightness-110 transition-all ease-in-out">
                          <div className="relative  ">
                              <div className="relative flex flex-row h-[20px] px-[4px] gap-[4px] justify-start items-center rounded-full opacity-30" 
                                   style={{ background: 'linear-gradient(to right, rgb(83, 211, 142) 0%, rgb(231, 140, 25) 50%, rgb(255, 70, 98) 100%)', width: '40px' }}>
                              </div>
                              <div className="absolute   inset-[2px] bg-background rounded-full flex gap-[0px] justify-center items-center">
                                  <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/pump.svg?dpl=dpl_DGHGbrq9X3HZanPrCgtgzyRg1vWh" />
                                  <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/bonk.svg?dpl=dpl_DGHGbrq9X3HZanPrCgtgzyRg1vWh" />
                                  <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/bags.svg?dpl=dpl_DGHGbrq9X3HZanPrCgtgzyRg1vWh" />
                              </div>
                          </div>
                      </button>
                    </TooltipButton>
                    
                    <div className="hidden md:flex w-[1px] h-[20px] bg-[#292B37] flex-shrink-0"></div>
                </div> 
            </div>

            {/* Center Section - Crypto Prices */}
            <div className="hidden lg:flex items-center gap-[8px] flex-1 w-full justify-start ml-3">
                {/* BTC */}
                <TooltipButton tooltipContent="Bitcoin Price">
                  <button className="text-[#F7931A] hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all ease-in-out">
                    <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/btc-fill.svg?dpl=dpl_DGHGbrq9X3HZanPrCgtgzyRg1vWh" />
                    <span className="text-[12px] font-normal">$87.9K</span>
                  </button>
                </TooltipButton>

                {/* ETH */}
                <TooltipButton tooltipContent="Ethereum Price">
                  <button className="text-[#497493] hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[2px] justify-start items-center hover:brightness-110 transition-all ease-in-out">
                    <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/eth-fill.svg?dpl=dpl_DGHGbrq9X3HZanPrCgtgzyRg1vWh" />
                    <span className="text-[12px] font-normal">$2949</span>
                  </button>
                </TooltipButton>

                {/* SOL */}
                <TooltipButton tooltipContent="Solana Price">
                  <button className="text-[#14F195] hidden lg:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all ease-in-out">
                    <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/sol-fill.svg" />
                    <span className="text-[12px] font-normal">$124.57</span>
                  </button>
                </TooltipButton>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-[8px]">
                {/* Pill Button with $51.2K */}
                <div className="hidden 2xl:flex">
                  <TooltipButton tooltipContent="Total Portfolio Value">
                    <button className="-mr-[8px] group flex items-center gap-[4px] h-[24px] px-2 text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-[#e5e7eb] transition-colors ease-in-out">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Link className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </a>
                      <span className="text-[#e5e7eb] text-[12px] font-normal group-hover:text-textSecondary transition-colors">$51.2K</span>
                    </button>
                  </TooltipButton>
                </div>

                {/* Gas Station */}
                <div className="hidden 2xl:flex items-center gap-[4px]">
                  <TooltipButton tooltipContent="Gas Fee">
                    <div className="flex items-center gap-[4px] h-[24px] min-h-[24px]">
                      <svg className="w-[16px] h-[16px] text-[#e5e7eb]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                      </svg>
                      <span className="text-[#e5e7eb] text-[12px] font-normal">0.0<sub>2</sub>42</span>
                    </div>
                  </TooltipButton>
                </div>

                {/* Coin */}
                <div className="hidden 2xl:flex items-center gap-[4px]">
                  <TooltipButton tooltipContent="Transaction Cost">
                    <div className="flex items-center gap-[4px] h-[24px] min-h-[24px]">
                      <svg className="w-[16px] h-[16px] text-[#e5e7eb]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                      </svg>
                      <span className="text-[#e5e7eb] text-[12px] font-normal">0.003</span>
                    </div>
                  </TooltipButton>
                </div>

                {/* Divider */}
                <div className="hidden 2xl:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

                {/* Connection Status */}
                <TooltipButton tooltipContent="Network Connection Status">
                  <div className="flex items-center h-[24px] xl:px-[8px] gap-[4px] justify-start items-center rounded-[4px] text-[#128c41] bg-[#092923]">
                    <div className="flex items-center gap-[4px]">
                      <div className="bg-[#128c41] w-[12px] h-[12px] rounded-full flex items-center justify-center">
                        <div className="bg-[#128c41] w-[8px] h-[8px] rounded-full"></div>
                      </div>
                    </div>
                    <span className="hidden xl:flex text-[12px] font-medium">Connection is stable</span>
                  </div>
                </TooltipButton>

                {/* GLOBAL Dropdown */}
                <TooltipButton tooltipContent="Global Settings">
                  <div className="relative flex">
                    <button className="flex items-center gap-1 px-2 h-[24px] text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textSecondary transition-colors">
                      <span>GLOBAL</span>
                      <ChevronDown className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </TooltipButton>

                {/* Layout Button */}
                <div className="hidden md:flex w-[1px] h-[20px] bg-[#292B37] flex-shrink-0"></div>
                <TooltipButton tooltipContent="Layout Settings">
                  <button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors ease-in-out text-textSecondary hover:bg-secondaryStroke/40">
                    <Layout className="w-[16px] h-[16px]" />
                  </button>
                </TooltipButton>

                {/* Notification Button */}
                <TooltipButton tooltipContent="Notifications">
                  <button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors ease-in-out text-textSecondary hover:bg-secondaryStroke/40">
                    <Bell className="w-[16px] h-[16px]" />
                  </button>
                </TooltipButton>

                {/* Palette Button */}
                <TooltipButton tooltipContent="Theme Settings">
                  <button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors ease-in-out text-textSecondary hover:bg-secondaryStroke/40">
                    <Palette className="w-[16px] h-[16px]" />
                  </button>
                </TooltipButton>
                    
                {/* Divider */}
                <div className="hidden md:flex w-[1px] h-[20px] bg-[#292B37] flex-shrink-0"></div>

                {/* Social Media */}
                <div className="hidden md:flex items-center gap-[16px]">
                  <TooltipButton tooltipContent="Join Discord Community">
                    <a href="https://discord.gg/axiomtrade" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </a>
                  </TooltipButton>

                  <TooltipButton tooltipContent="Follow on Twitter">
                    <a href="https://x.com/axiomexchange" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </TooltipButton>
                </div>

                {/* Docs Button */}
                <TooltipButton tooltipContent="Documentation">
                  <a href="https://docs.axiom.trade/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-[2px] h-[24px] px-[8px] rounded-[4px] hover:bg-hoverPrimary">
                    <Book className="w-[16px] h-[16px]" />
                    <span className="hidden lg:flex text-[12px] font-normal">Docs</span>
                  </a>
                </TooltipButton>
            </div>
        </footer>
      </TooltipProvider>
    );
}