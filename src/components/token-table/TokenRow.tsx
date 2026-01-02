
// "use client";

// import React from 'react';
// import type { Token } from '@/lib/types';
// import { cn } from '@/lib/utils';
// import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
// import { TokenImage } from './TokenImage';
// import { TokenInfo } from './TokenInfo';
// import { TokenStats } from './TokenStats';

// const TokenRowComponent = ({ token, isMigratedTable, isFinalStretchTable }: { token: Token; isMigratedTable?: boolean; isFinalStretchTable?: boolean; }) => {
//     const boundingPercentage = token.stats.progress[0]?.value ?? 0;
    
//     const textColorClasses: Record<string, string> = {
//         yellow: 'text-yellow-400',
//         green: 'text-green-400',
//         red: 'text-red-400',
//         pink: 'text-pink-400',
//         purple: 'text-purple-400',
//     };
//     const borderColor = token.imageBorderColor || 'transparent';


//     const cardContent = (
//         <div className={cn(
//             "p-3 cursor-pointer transition-colors relative",
//             {
//                 'bg-price-up-flash': token.priceChangeDirection === 'up',
//                 'bg-price-down-flash': token.priceChangeDirection === 'down',
//             }
//         )}>
//             <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap gap-3">
//                 <TokenImage token={token} />
//                 <div className="flex flex-col flex-grow min-w-0 justify-between gap-2">
//                     <div className="flex flex-col md:flex-row flex-grow min-w-0 justify-between gap-3">
//                         <TokenInfo token={token} />
//                         <TokenStats token={token} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
    
//     if (isMigratedTable) {
//         return (
//             <Tooltip>
//                 <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
//                 <TooltipContent>
//                     <p className={cn(textColorClasses[borderColor])}>
//                         virtual card
//                     </p>
//                 </TooltipContent>
//             </Tooltip>
//         );
//     }

//     if (isFinalStretchTable) {
//         return (
//             <Tooltip>
//                 <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
//                 <TooltipContent>
//                     <p className={cn(textColorClasses[borderColor])}>
//                         Bounding: {boundingPercentage}%
//                     </p>
//                 </TooltipContent>
//             </Tooltip>
//         );
//     }
    
//     // Default for New Pairs
//     return (
//         <Tooltip>
//             <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
//             <TooltipContent>
//                 <p className={cn(textColorClasses[borderColor])}>
//                     Bounding: {boundingPercentage}%
//                 </p>
//             </TooltipContent>
//         </Tooltip>
//     );
// };

// export const TokenRow = React.memo(TokenRowComponent);


"use client";

import React from 'react';
import type { Token } from '../../lib/types';
import { cn } from '../../lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { TokenImage } from './TokenImage';
import { TokenInfo } from './TokenInfo';
import { TokenStats } from './TokenStats';
import { ProgressPill } from './TokenRowParts';

const TokenRowComponent = ({ 
  token, 
  isMigratedTable, 
  isFinalStretchTable 
}: { 
  token: Token; 
  isMigratedTable?: boolean; 
  isFinalStretchTable?: boolean; 
}) => {
  const boundingPercentage = token.stats.progress[0]?.value ?? 0;
  
  const textColorClasses: Record<string, string> = {
    yellow: 'text-yellow-400',
    green: 'text-green-400',
    red: 'text-red-400',
    pink: 'text-pink-400',
    purple: 'text-purple-400',
  };
  
  const borderColor = token.imageBorderColor || 'transparent';

  const cardContent = (
    <div className={cn(
      "flex flex-col lg:flex-row w-full gap-3 px-3 pt-3 pb-0.5 justify-start items-start lg:items-center group/row hover:bg-accent/5 transition-colors  relative",
      {
        'bg-price-up-flash': token.priceChangeDirection === 'up',
        'bg-price-down-flash': token.priceChangeDirection === 'down',
      }
    )}>
      {/* TOP SECTION - Image, Info, and Stats on mobile */}
      <div className="flex flex-row w-full gap-3 justify-between items-start lg:items-center">
        {/* LEFT SIDE - Image & Address */}
        

        {/* MIDDLE SECTION - Token Info */}
        <div className="flex flex-row flex-1 w-full gap-2 justify-start items-start overflow-hidden ">
        <TokenImage token={token} />
         <div className = "flex flex-col md:flex-col flex-grow min-w-0 justify-between gap-3 w-full">
          <TokenInfo token={token} />
          <div className="flex flex-wrap gap-1 justify-start items-center
                /* Default: below 760px */
                w-full
                
                /* Custom range: 760px to 1025px */
                max-[580px]:w-[400px] max-[580px]:mt-10 max-[580px]:-ml-20 
                
                /* Above 1025px */
                min-[1026px]:w-auto min-[1026px]:mt-0 min-[1026px]:ml-0">
          {token.stats.progress.map((stat, i) => (
            <ProgressPill key={i} stat={stat} />
          ))}
        </div>
        </div>
        </div>

        {/* RIGHT SIDE - Stats - Now with higher z-index and better positioning */}
        <div className="z-10 shrink-0 lg:absolute lg:right-3 lg:top-3 h-full">
          <TokenStats token={token} />
        </div>
      </div>

      {/* BOTTOM SECTION - Progress Pills - Moves under on small screens */}
      <div className="flex flex-col h-full gap-2 lg:mt-0 mt-2">
        {/* Progress Pills - Always visible, wraps on smaller screens */}
       
      </div>
    </div>
  );
  
  if (isMigratedTable) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
        <TooltipContent>
          <p className={cn(textColorClasses[borderColor])}>
            virtual card
          </p>
        </TooltipContent>
      </Tooltip>
    );
  }

  if (isFinalStretchTable) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
        <TooltipContent>
          <p className={cn(textColorClasses[borderColor])}>
            Bounding: {boundingPercentage}%
          </p>
        </TooltipContent>
      </Tooltip>
    );
  }
  
  // Default for New Pairs
  return (
    <Tooltip>
      <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
      <TooltipContent>
        <p className={cn(textColorClasses[borderColor])}>
          Bounding: {boundingPercentage}%
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export const TokenRow = React.memo(TokenRowComponent)