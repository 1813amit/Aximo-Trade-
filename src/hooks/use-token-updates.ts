
"use client";

import { useState, useEffect } from 'react';
import type { Token, StatProgress, StatRowKey } from '../lib/types';
import { produce } from 'immer';

// const getRandomSubset = (arr: Token[], count: number) => {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// };

const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
};

const statRowKeys: StatRowKey[] = ['holders', 'website', 'search', 'trophy', 'crown', 'views'];
const progressIcons: StatProgress['icon'][] = ['star', 'chef', 'target', 'ghost', 'clover', 'leaf', 'send'];
const marketCapColors = ['text-yellow-400', 'text-red-400', 'text-blue-400'];
const imageBorderColors: (Token['imageBorderColor'])[] = ['yellow', 'green', 'red', 'pink', 'purple'];

function generateId(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export function useTokenUpdates(allMockTokens: Token[], updateInterval = 1500) {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    // Initialize tokens on the client to avoid hydration errors
    setTokens(allMockTokens.map(t => ({...t, price: t.marketCap / (t.liquidity * 100), marketCapColor: 'text-yellow-400'})));
  
  }, [allMockTokens]);

  // This effect simulates real-time updates for various token properties
  useEffect(() => {
    if (tokens.length === 0) return; // Don't run updates until tokens are initialized

    const intervalId = setInterval(() => {
      setTokens(produce(draft => {
        // --- Price & Volume Update ---
        draft.forEach(token => {
          const priceChangePercent = (Math.random() - 0.5) * 0.15; // Max 7.5% change
          const volumeChangePercent = (Math.random() - 0.2) * 0.2; // Can decrease
          const oldPrice = token.price;
          
          let newPrice = oldPrice * (1 + priceChangePercent);
          if (newPrice < 0) newPrice = oldPrice * 0.5; // Prevent negative prices

          let priceChangeDirection: 'up' | 'down' | undefined = undefined;
          if (newPrice > oldPrice) priceChangeDirection = 'up';
          else if (newPrice < oldPrice) priceChangeDirection = 'down';

          token.price = newPrice;
          token.marketCap = token.marketCap * (1 + priceChangePercent);
          token.volume = Math.max(1000, token.volume * (1 + volumeChangePercent));
          token.priceChangeDirection = priceChangeDirection;

          // --- Dynamic Stat Changes ---
          if (Math.random() < 0.1) {
             const randomStatKey = statRowKeys[Math.floor(Math.random() * statRowKeys.length)];
             const currentValue = token.stats.row[randomStatKey];
             if (typeof currentValue === 'number') {
                 (token.stats.row[randomStatKey] as number) = currentValue + Math.floor(Math.random() * 5 - 2);
             } else if (typeof currentValue === 'boolean') {
                 (token.stats.row[randomStatKey] as boolean) = Math.random() > 0.5;
             } else if (typeof currentValue === 'object' && 'current' in currentValue) {
                 token.stats.row.crown.current += Math.random() > 0.6 ? 1 : 0;
                 token.stats.row.crown.color = 'yellow';
             }
          }
          
          // --- Dynamic Visuals ---
          if (Math.random() < 0.05) {
            token.image = `https://picsum.photos/seed/${generateId(5)}/68/68`;
          }
          token.imageBorderColor = imageBorderColors[Math.floor(Math.random() * imageBorderColors.length)];
           if (Math.random() < 0.15) {
            token.marketCapColor = marketCapColors[Math.floor(Math.random() * marketCapColors.length)];
          }

          // Update progress pills
          token.stats.progress.forEach((p, index) => {
              p.value = Math.max(0, Math.min(100, (p.value ?? 0) + Math.floor(Math.random() * 7) - 3));
              if (index < 3 && Math.random() < 0.05) { // Only change first 3 icons
                p.icon = progressIcons[Math.floor(Math.random() * progressIcons.length)];
              }
          });

          // Update TX
          token.tx.total += Math.floor(Math.random() * 3);
          const txChange = Math.floor(Math.random() * 5);
          if (Math.random() > 0.5) {
            token.tx.buy += txChange;
          } else {
            token.tx.sell += txChange;
          }
        });

        // --- Add/Remove a Token ---
        if (Math.random() < 0.05 && draft.length > 5) {
          // Remove a random token
          draft.splice(Math.floor(Math.random() * draft.length), 1);
        } else if (Math.random() < 0.05 && allMockTokens.length > draft.length) {
          // Add a new token that isn't already in the list
          const currentIds = new Set(draft.map(t => t.id));
          const availableTokens = allMockTokens.filter(t => !currentIds.has(t.id));
          if (availableTokens.length > 0) {
             const newToken = availableTokens[Math.floor(Math.random() * availableTokens.length)];
             const createdDate = new Date(Date.now() - Math.random() * 60 * 1000); // within last minute
             draft.unshift({ ...newToken, created: formatTimeAgo(createdDate), price: newToken.marketCap / (newToken.liquidity * 100), marketCapColor: 'text-yellow-400' });
          }
        }
      }));
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateInterval, tokens.length, allMockTokens]);

  // This effect clears the price change indicator after the animation runs
  useEffect(() => {
    const hasUpdate = tokens.some(t => t.priceChangeDirection);
    if (hasUpdate) {
      const timerId = setTimeout(() => {
        setTokens(produce(draft => {
          draft.forEach(token => {
            token.priceChangeDirection = undefined;
          });
        }));
      }, 700); // Corresponds to animation duration

      return () => clearTimeout(timerId);
    }
  }, [tokens]);

  return { tokens };
}
