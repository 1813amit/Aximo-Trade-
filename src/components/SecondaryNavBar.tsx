"use client";

import { LineChart, Settings, Star } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface SecondaryNavBarProps {
  className?: string;
}

export function SecondaryNavBar({ className }: SecondaryNavBarProps) {
  const TickerItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2 shrink-0">
      <span className="text-xs text-text-secondary">{text}</span>
      <span className="text-xs font-medium text-green-400">+3.4%</span>
    </div>
  );

  return (
    <div className={cn("flex items-center h-7 px-4 border-b border-primary-stroke bg-[#06070b] relative z-20 gap-2", className)}>
      {/* Settings Button with Hover Popup */}
      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-text-tertiary hover:text-text-secondary hover:bg-[#292b37] rounded-[4px]"
        >
          <Settings className="h-3.5 w-3.5" />
        </Button>
        
        <div className="absolute left-0 top-full mt-1 px-3 py-1.5 bg-[#1a1b26] border border-[#292b37] rounded-md shadow-lg z-30 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all   ">
          <span className="text-xs text-text-secondary">Settings</span>
        </div>
      </div>

      <div className="w-px h-4 bg-[#292B37]" />

      {/* Watchlist Button with Hover Popup */}
      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-text-secondary hover:bg-[#292b37] rounded-[4px]"
        >
          <Star className="h-3.5 w-3.5" />
        </Button>
        
        <div className="absolute left-0 top-full mt-1 px-3 py-1.5 bg-[#1a1b26] border border-[#292b37] rounded-md shadow-lg z-30 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all   ">
          <span className="text-xs text-text-secondary">Watchlist</span>
        </div>
      </div>

      {/* Active Positions Button with Hover Popup */}
      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-text-tertiary hover:text-text-secondary hover:bg-[#292b37] rounded-[4px]"
        >
          <LineChart className="h-3.5 w-3.5" />
        </Button>
        
        <div className="absolute left-0 top-full mt-1 px-3 py-1.5 bg-[#1a1b26] border border-[#292b37] rounded-md shadow-lg z-30 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all   ">
          <span className="text-xs text-text-secondary">Active Positions</span>
        </div>
      </div>

      <div className="w-px h-4 bg-[#292B37]" />
      
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-row gap-4 animate-ticker whitespace-nowrap">
          {/* Ticker items were here and have been removed as requested. */}
        </div>
      </div>
    </div>
  );
}