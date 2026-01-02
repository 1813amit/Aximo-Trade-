
"use client";

import { cn } from "../lib/utils";
import { AxiomIcon } from "./icons/AxiomIcon";
import { BarChart, Book, Bot, Compass, Gift, GitBranch, Globe, History, Home, Layers, MessageSquare, Repeat, Settings, Star, TrendingUp, User, Wallet } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { PulseIcon } from "./icons/PulseIcon";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Twitter } from "lucide-react";

const NavLink = ({ href, children, active = false, tooltip }: { href: string, children: React.ReactNode, active?: boolean, tooltip: string }) => (
    <Tooltip >
        <TooltipTrigger asChild>
             <a href={href} className={cn(
                "flex items-center justify-center h-10 w-10 rounded-lg transition-colors",
                active ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-primary/50'
             )}>
                {children}
            </a>
        </TooltipTrigger>
        <TooltipContent side="right">
            <p>{tooltip}</p>
        </TooltipContent>
    </Tooltip>
);

export function AppSidebar() {
    const isMobile = useIsMobile();

    if (isMobile) {
        return null;
    }

    return (
        <aside className="flex flex-col items-center justify-between w-16 bg-card border-r border-border p-2">
            <div className="flex flex-col items-center gap-2">
                <a href="#" className="flex items-center justify-center h-10 w-10 mb-2">
                    <AxiomIcon className="h-8 w-8 text-foreground" />
                </a>
                <NavLink href="#" tooltip="Home">
                    <Home className="h-5 w-5" />
                </NavLink>
                <NavLink href="#" tooltip="Trending">
                    <TrendingUp className="h-5 w-5" />
                </NavLink>
                <NavLink href="#" tooltip="Discover">
                    <Compass className="h-5 w-5" />
                </NavLink>
                <NavLink href="#" tooltip="Pulse" active>
                    <PulseIcon className="h-5 w-5" />
                </NavLink>
                <NavLink href="#" tooltip="Trackers">
                    <History className="h-5 w-5" />
                </NavLink>
                 <NavLink href="#" tooltip="Perpetuals">
                    <Repeat className="h-5 w-5" />
                </NavLink>
                 <NavLink href="#" tooltip="Yield">
                    <Layers className="h-5 w-5" />
                </NavLink>
            </div>
             <div className="flex flex-col items-center gap-2">
                 <NavLink href="#" tooltip="Wallet">
                    <Wallet className="h-5 w-5" />
                </NavLink>
                 <NavLink href="#" tooltip="Account">
                    <User className="h-5 w-5" />
                </NavLink>
                <NavLink href="#" tooltip="Settings">
                    <Settings className="h-5 w-5" />
                </NavLink>
            </div>
        </aside>
    );
}
