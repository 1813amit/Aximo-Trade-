
'use client';

import { Button } from "./ui/button";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ChainIcon } from "./icons/ChainIcon";
import { Input } from "./ui/input";

export function MobileSettings() {
    return (
        <div className="py-4 space-y-4">
            <div className="flex justify-between items-center gap-2">
                <Button variant="outline" className="h-9 flex-1 justify-between border-primary-stroke bg-primary/50">
                    Display
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 border border-primary-stroke bg-primary/50">
                    <i className="icon-bookmark-x text-text-secondary" style={{ fontSize: '16px' }}></i>
                </Button>
                 <Button variant="ghost" size="icon" className="h-9 w-9 border border-primary-stroke bg-primary/50">
                    <i className="ri-crosshair-2-line text-text-secondary" style={{ fontSize: '16px' }}></i>
                 </Button>
            </div>
            <div className="flex justify-between items-center gap-2">
                 <Button variant="outline" className="h-9 flex-1 justify-between border-primary-stroke bg-primary/50">
                    <div className="flex items-center gap-1">
                        <i className="ri-wallet-line text-[18px] text-text-secondary"></i>
                        <span>1</span>
                        <ChainIcon chain="sol" className="w-4 h-4"/>
                        <span>0</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
                 <Button variant="outline" className="h-9 flex-1 justify-between border-primary-stroke bg-primary/50">
                     <div className="flex items-center gap-2">
                        <SlidersHorizontal className="text-text-secondary w-4 h-4"/>
                        Filter
                     </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
            </div>
             <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <i className="ri-flashlight-fill text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"></i>
                    <Input placeholder="0.0" className="h-9 bg-primary/50 border-primary-stroke pl-8" defaultValue="0" />
                </div>
                 <Button className="bg-primary-blue hover:bg-primary-blue-hover text-white font-bold h-9">
                    Quick Buy
                 </Button>
            </div>
        </div>
    );
}
