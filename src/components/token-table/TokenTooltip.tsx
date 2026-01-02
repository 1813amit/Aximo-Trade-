
"use client";

import { Token } from "../../lib/types";
import { Button } from "../ui/button";
import { BarChart, Copy, ExternalLink, Info } from "lucide-react";
import Image from "next/image";
import { ChainIcon } from "../icons/ChainIcon";
import { Separator } from "../ui/separator";
import { StatsBar } from "./StatsBar";
import { StatIcon } from "./StatIcon";

const ReusedToken = ({ token }: { token: { name: string, image: string, age: string, value: string } }) => (
    <div className="flex items-center justify-between p-2 rounded-md hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-2">
            <Image src={token.image} alt={token.name} width={32} height={32} className="rounded-md" />
            <div>
                <div className="flex items-center gap-1.5">
                    <span className="text-foreground font-medium">{token.name}</span>
                    <span className="text-green-400 text-xs">{token.age}</span>
                </div>
                <div className="text-muted-foreground text-xs">TX: {token.age}</div>
            </div>
        </div>
        <div className="text-blue-400 font-medium">{token.value}</div>
    </div>
);

export function TokenTooltip({ token }: { token: Token }) {

  const reusedTokens = [
    { name: "Google AI", image: token.image, age: "1y", value: "3.44K" },
    { name: "GAD", image: token.image, age: "1y", value: "3.44K" },
  ];

  return (
    <div className="w-64 rounded-lg bg-popover border border-border shadow-2xl text-sm">
        <div className="p-3">
             <Image src={token.image} alt={token.name} width={232} height={232} className="rounded-md w-full aspect-square object-cover" unoptimized />
        </div>
       
        <div className="p-3 pt-0 space-y-2">
            <h3 className="font-medium text-muted-foreground">Reused Image Tokens ({reusedTokens.length})</h3>
            <div className="flex flex-col gap-1">
                {reusedTokens.map((t, i) => (
                    <ReusedToken key={i} token={t} />
                ))}
            </div>
        </div>
    </div>
  );
}
