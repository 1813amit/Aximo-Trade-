import { cn } from "../../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export type Stat = {
    percentage: number;
    color: string;
};

export const StatsBar = ({ stats }: { stats: Stat[] }) => {
    return (
        <div className="flex w-full h-1.5 rounded-full overflow-hidden mt-2" >
            {stats.map((stat, index) => (
                <Tooltip key={index} >
                    <TooltipTrigger asChild>
                        <div
                            className={cn("h-full", stat.color)}
                            style={{ width: `${stat.percentage}%` }}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{stat.percentage}%</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
};
