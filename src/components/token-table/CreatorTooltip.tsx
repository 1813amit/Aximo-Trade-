
"use client";

import { Token } from "../../lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CalendarDays, CheckCircle } from "lucide-react";
import { XIcon } from "../icons/XIcon";

export function CreatorTooltip({ token }: { token: Token }) {

  return (
    <div className="p-4 bg-popover rounded-lg text-sm w-full">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={token.image} alt={token.creator} />
            <AvatarFallback>{token.creator.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-base text-foreground">{token.creator}</span>
              <CheckCircle className="h-4 w-4 text-blue-500 fill-current" />
            </div>
            <span className="text-muted-foreground">@{token.creator.toLowerCase()}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
            <XIcon className="w-5 h-5 text-foreground"/>
            <span className="text-xs text-muted-foreground mt-1">7h</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-muted-foreground text-sm mt-3">
        <div className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4"/>
            <span>Joined Mar 2022</span>
        </div>
        <span className="font-bold text-foreground">515 <span className="font-normal text-muted-foreground">followers</span></span>
      </div>

      <div className="mt-4 text-foreground text-base space-y-4">
        <p>BRICS nations move toward UNIT - a gold-backed settlement system</p>
        <ul className="list-none space-y-2 pl-2">
            <li><span className="text-orange-400 mr-2">◆</span>40% gold</li>
            <li><span className="text-orange-400 mr-2">◆</span>60% BRICS currency basket</li>
        </ul>
        <p>BRICS represents ~3.3 BILLION people</p>
        <p>The $UNIT enables 30+ countries to trade commodities & precious metals outside</p>
      </div>
    </div>
  );
}
