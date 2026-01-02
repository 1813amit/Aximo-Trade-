
"use client";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { AxiomIcon } from "../icons/AxiomIcon";
import { Pencil } from "lucide-react";

export function InsightTooltip() {
  return (
    <div className="w-[280px] p-4 bg-popover rounded-lg text-sm">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" className="h-8 px-3 text-muted-foreground hover:bg-primary/50 hover:text-foreground">
          <Pencil className="h-3 w-3 mr-2" />
          Refresh
        </Button>
        <Badge variant="secondary" className="bg-primary/80 text-muted-foreground">12s ago</Badge>
      </div>
      <div className="relative flex items-center justify-center h-48">
        <div className="absolute w-48 h-48 rounded-full border-2 border-blue-500/50"></div>
        <div className="absolute w-40 h-40 rounded-full border border-blue-500/30"></div>
        {/* Simplified representation of the inner animated graphic */}
        <div className="relative w-8 h-8">
            <div className="absolute w-4 h-4 rounded-full bg-blue-400/80 top-1/2 left-0 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute w-5 h-5 rounded-full border border-blue-400 top-0 right-0 animate-pulse delay-150"></div>
             <div className="absolute w-3 h-3 rounded-full bg-blue-400/60 bottom-0 left-1/4 animate-pulse delay-300"></div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-4">
        <div className="flex items-center gap-2">
            <AxiomIcon className="h-5 w-5 text-foreground" />
            <span className="font-bold text-lg text-foreground">AXIOM</span>
        </div>
        <p className="text-xs text-muted-foreground">Powered by iNSIGHTx</p>
      </div>
    </div>
  );
}
