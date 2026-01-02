
export type StatProgress = {
  icon: 'star' | 'chef' | 'target' | 'ghost' | 'clover' | 'leaf' | 'send';
  value: number | null;
  variant: 'red' | 'green' | 'gray';
  timeframe?: string;
};

type StatValue = {
  current: number;
  total: number;
  color?: 'yellow';
};

export type StatRowKey = 'holders' | 'website' | 'search' | 'trophy' | 'crown' | 'views' | 'socials';

export type Token = {
  id: string;
  name: string;
  creator: string;
  symbol: string;
  chain: 'eth' | 'sol' | 'base';
  price: number;
  priceChange24h: number;
  liquidity: number;
  marketCap: number;
  volume: number;
  created: string;
  f: number;
  tx: {
    buy: number;
    sell: number;
    total: number;
  },
  pump: string;
  isGold?: boolean;
  priceChangeDirection?: 'up' | 'down';
  marketCapColor?: string;
  image: string;
  imageBorderColor?: 'yellow' | 'green' | 'red' | 'pink' | 'purple';
  stats: {
    row: {
      holders: number;
      website: boolean;
      socials: boolean;
      search: boolean;
      trophy: number;
      crown: StatValue;
      views: number;
    },
    progress: StatProgress[];
    bar: { percentage: number; color: string }[];
  };
  category: string;
};
