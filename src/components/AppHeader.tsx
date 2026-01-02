



"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import { useIsMobile } from "../hooks/useIsMobile";
import Image from "next/image";
import { Bell, ChevronDown, Copy, CopyCheckIcon, CopyIcon, Menu, Search, Star, StarOff, StarOffIcon, User } from "lucide-react";
import { AxiomIcon } from "./icons/AxiomIcon";
import { Button } from "./ui/button";


// Navigation Link Component
const NavLink = ({ 
  href, 
  children, 
  active = false,
  onClick 
}: { 
  href: string, 
  children: React.ReactNode, 
  active?: boolean,
  onClick?: () => void
}) => (
  <a href={href} onClick={onClick}>
    <button className={cn(
      "flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] justify-start items-center rounded-[4px] [transition:none] duration-0 hover:bg-primaryBlue/20 hover:text-primaryBlue hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out]",
      active ? 'text-primaryBlue' : 'text-textPrimary'
    )}>
      <span className="text-[14px] font-medium">{children}</span>
    </button>
  </a>
);

// Icon components
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const ChevronDownIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
);

const BellIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
);

const WalletIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const StarIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const SettingsIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

const GlobeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-textPrimary">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

// Axiom Logo SVG component
const AxiomLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[36px] text-textPrimary">
    <g clipPath="url(#clip0_88_28967)">
      <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="currentColor"></path>
      <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="currentColor"></path>
    </g>
    <defs>
      <clipPath id="clip0_88_28967">
        <rect width="26" height="22" fill="white" transform="translate(5 7)"></rect>
      </clipPath>
    </defs>
  </svg>
);

// Axiom Text Logo SVG component
const AxiomTextLogo = () => (
  <svg width="102" height="21" viewBox="0 0 103 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[102px] hidden 2xl:block text-textPrimary">
    <path d="M56.1914 18.3745V1.33447H59.7434L64.8074 15.3265L69.8714 1.33447H73.4234V18.3745H70.8314V5.89447L66.2474 18.3505H63.3674L58.7834 5.89447V18.3745H56.1914Z" fill="currentColor"></path>
    <path d="M45.9362 18.7584C40.9922 18.7584 37.9922 15.3984 37.9922 9.87844C37.9922 4.35844 40.9922 0.950439 45.9362 0.950439C50.9282 0.950439 53.9042 4.35844 53.9042 9.87844C53.9042 15.3984 50.9282 18.7584 45.9362 18.7584ZM45.9362 16.3824C49.2482 16.3824 51.2162 13.9824 51.2162 9.87844C51.2162 5.77444 49.2482 3.32644 45.9362 3.32644C42.6482 3.32644 40.6802 5.77444 40.6802 9.87844C40.6802 13.9824 42.6482 16.3824 45.9362 16.3824Z" fill="currentColor"></path>
    <path d="M33.1055 18.3745V1.33447H35.6975V18.3745H33.1055Z" fill="currentColor"></path>
    <path d="M16.9023 18.3745L22.5663 9.83047L16.9503 1.33447H19.9983L24.1983 7.81447L28.3263 1.33447H31.3503L25.7343 9.78247L31.4223 18.3745H28.3743L24.1503 11.7985L19.9263 18.3745H16.9023Z" fill="currentColor"></path>
    <path d="M0.980469 18.3745L7.12447 1.33447H10.4125L16.5565 18.3745H13.7965L12.2365 13.9345H5.27647L3.74047 18.3745H0.980469ZM6.09247 11.5825H11.4445L8.75647 3.80647L6.09247 11.5825Z" fill="currentColor"></path>
    <path d="M99.2929 18.6624C97.0311 18.6624 95.5703 16.9661 95.5703 14.3116C95.5703 11.6571 97.0311 9.96069 99.2929 9.96069C101.539 9.96069 103 11.6571 103 14.3116C103 16.9661 101.539 18.6624 99.2929 18.6624ZM99.2929 17.6729C100.926 17.6729 101.916 16.4006 101.916 14.3116C101.916 12.2225 100.926 10.9502 99.2929 10.9502C97.6437 10.9502 96.6541 12.2225 96.6541 14.3116C96.6541 16.4006 97.6437 17.6729 99.2929 17.6729Z" fill="currentColor"></path>
    <path d="M90.9961 18.4742V10.1494H91.8914L91.9385 11.7987C92.2684 10.6835 92.9438 10.1494 94.0276 10.1494H94.7501V11.1547H93.9962C92.7396 11.1547 92.0328 12.0186 92.0328 13.4008V18.4742H90.9961Z" fill="currentColor"></path>
    <path d="M81.2461 18.4741V7.32202H85.1572C87.6075 7.32202 89.0525 8.57859 89.0525 10.6519C89.0525 12.7253 87.6075 13.9818 85.1572 13.9818H82.3142V18.4741H81.2461ZM82.3142 12.9452H85.1572C86.9792 12.9452 87.9216 12.1441 87.9216 10.6519C87.9216 9.14405 86.9792 8.35869 85.1572 8.35869H82.3142V12.9452Z" fill="currentColor"></path>
  </svg>
);

interface AppHeaderProps {
  className?: string;
}
export function AppHeader({className}: AppHeaderProps) {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("pulse");

  // Mobile Header
  if (isMobile) {
    return (
      <header className={cn("flex items-center justify-between h-[44px] px-4 border-b border-primary-stroke bg-background", className)}>
        <div className="flex items-center gap-2">
          <AxiomIcon className="h-[18px] w-[18px] text-text-primary" />
        </div>
        <div className="flex items-center gap-1">
          <div className="relative">
            <button className="flex items-center gap-[3px] h-[32px] px-[10px] rounded-full bg-[#1e1f23] hover:bg-secondaryStroke/80 text-textPrimary transition-colors">
             
              <div className="flex items-center gap-1">
                {/* SOL Balance */}
                <div className="flex items-center gap-1">
                   <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/sol-fill.svg" />
                   
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="h-4 w-px bg-[#292B37] mx-1"></div>
                {/* USDC Balance */}
                <div className="flex items-center gap-1">
                  <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/usdc-perps.svg" />
                  <span className="text-sm font-medium">0</span>
                </div>
              </div>
              <ChevronDown size={16} />
            </button>
          </div>
          <Button variant="outline" className="h-[32px] px-[10px] border-primary-stroke rounded-full bg-[#1e1f23] hover:bg-secondary-stroke/80 text-text-primary text-xs">
          <span>
              <Copy size={8} />
            </span>
            Paste CA
            
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-text-primary bg-[#1e1f23] rounded-full hover:bg-secondary-stroke/80">
            <Search className="h-5 w-5" />
          </Button>
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-blue-600 border border-white/10 flex items-center justify-center text-white font-semibold text-[10px]">
            JT
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 bg-[#1e1f23] rounded-full text-text-primary hover:bg-secondary-stroke/80">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>
    );
  }

  // Desktop Header
  return (
    <header className="hidden sm:flex items-center justify-between h-16 px-6 border-b p-5  border-primaryStroke bg-[#06070b]">
      {/* Left Section - Logo and Navigation */}
      <div className="flex items-center gap-6 flex-1 min-w-0">
        {/* Logo */}
        <div className="flex items-center gap-2 2xl:w-[130px]">
          <div className="flex items-center">
            <AxiomLogo />
            <AxiomTextLogo />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center flex-1 min-w-0 relative">
          <div className="flex overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1">
              <NavLink href="#" active={activeTab === "discover"} onClick={() => setActiveTab("discover")}>
                Discover
              </NavLink>
              <NavLink href="#" active={activeTab === "pulse"} onClick={() => setActiveTab("pulse")}>
                Pulse
              </NavLink>
              <NavLink href="#" active={activeTab === "trackers"} onClick={() => setActiveTab("trackers")}>
                Trackers
              </NavLink>
              <NavLink href="#" active={activeTab === "perpetuals"} onClick={() => setActiveTab("perpetuals")}>
                Perpetuals
              </NavLink>
              <NavLink href="#" active={activeTab === "yield"} onClick={() => setActiveTab("yield")}>
                Yield
              </NavLink>
              <NavLink href="#" active={activeTab === "vision"} onClick={() => setActiveTab("vision")}>
                Vision
              </NavLink>
              <NavLink href="#" active={activeTab === "portfolio"} onClick={() => setActiveTab("portfolio")}>
                Portfolio
              </NavLink>
              <NavLink href="#" active={activeTab === "rewards"} onClick={() => setActiveTab("rewards")}>
                Rewards
              </NavLink>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </nav>
      </div>

      {/* Right Section - Updated according to screenshot */}
      <div className="flex items-center gap-5">
        {/* Search Button */}
        <button className="hidden 2xl:flex items-center gap-2 h-8 px-3 rounded-full border border-primaryStroke hover:bg-primaryStroke/35 transition-colors">
          <SearchIcon />
          <span className="text-[10px] text-textTertiary">Search by token or CA...</span>
          <div className="border border-primaryStroke h-5 px-2 rounded-full text-sm">
            <span>/</span>
          </div>
        </button>
        
        {/* Network Button */}
        <button className="flex items-center gap-2 h-8 px-2 rounded-full border-2 border-green-500/20 hover:brightness-110 transition-all active:scale-[0.96]">
          {/* SOL Icon - replace with actual image */}
          <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/sol-fill.svg" />
          <span className="text-sm font-medium">SOL</span>
          <ChevronDownIcon size={16} />
        </button>
        
        {/* Deposit Button */}
        <button className="h-8 px-4 rounded-full bg-blue-500 hover:bg-primaryBlueHover text-background text-sm font-bold transition-colors">
          Deposit
        </button>
        
        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Star Button */}
          <button className="h-8 w-8 rounded-full bg-[#1e1f23]  flex items-center justify-center text-textPrimary transition-colors">
            <Star size={18} />
          </button>
          
          {/* Notification Button */}
          <button className="h-8 w-8 rounded-full bg-[#1e1f23]  flex items-center justify-center text-textPrimary transition-colors">
            <Bell size={18} />
          </button>
          
          {/* Wallet Button with dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 h-8 px-3 rounded-full bg-[#1e1f23] hover:bg-secondaryStroke/80 text-textPrimary transition-colors">
              <WalletIcon size={16} />
              <div className="hidden xl:flex items-center gap-1">
                {/* SOL Balance */}
                <div className="flex items-center gap-1">
                   <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/sol-fill.svg" />
                   
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="h-4 w-px bg-[#292B37] mx-1"></div>
                {/* USDC Balance */}
                <div className="flex items-center gap-1">
                  <Image alt="Solana" width="16" height="16" src="https://axiom.trade/images/usdc-perps.svg" />
                  <span className="text-sm font-medium">0</span>
                </div>
              </div>
              <ChevronDown size={16} />
            </button>
          </div>
          
          {/* User Profile */}
          <div className="relative">
            <button className="h-8 w-8 rounded-full bg-primaryStroke hover:bg-secondaryStroke/80 overflow-hidden relative transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">E7</span>
              </div>
              {/* Connection indicator */}
              <div className="absolute bottom-[-2px] right-[-2px] h-3 w-3 rounded-full bg-background flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              </div>
            </button>
          </div>
          
          {/* Settings Button */}
          <button className="h-8 w-8 rounded-full bg-[#1e1f23] hover:bg-secondaryStroke/80 flex items-center justify-center text-textPrimary transition-colors">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
