
import type { Token, StatRowKey, StatProgress } from './types';

// Seeded pseudo-random number generator
let seed = 12345;
function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function generateId(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(random() * chars.length));
    }
    return result;
}

function generateTruncatedPump(): string {
    return `${generateId(4)}...${generateId(4)}`;
}

const chains: Token['chain'][] = ['sol', 'eth', 'base'];
const firstNames = ['Aiko', 'Elara', 'Kai', 'Liam', 'Nia', 'Ryu'];
const lastNames = ['OS', 'Net', 'Sys', 'Core', 'Ware', 'Dev'];

const names = [
    'Aiko', 'SolanaGems', 'EtherRise', 'BaseBuilders', 'QuantumLeap', 'CyberNexus',
    'Moonshot', 'GalaxyFold', 'Momentum', 'ApexCoin', 'Zenith', 'Climax', 'Oracle',
    'Pinnacle', 'LegacyCoin', 'ChainShift', 'BridgeToken', 'Ported', 'Aether', 'Serenity',
    'Nova', 'Helios', 'Orion', 'Lyra', 'Draco', 'Pegasus', 'Andromeda', 'Cassiopeia', 'Cygnus',
    'Faze Down', 'FEAR', 'taco', 'RS3 Bond', 'Moby Dih', 'RuneStone', 'GigaChad', 'Zorp',
    'ZynCoin', 'DogWifCat', 'Pepe', 'Bonk', 'Slerf', 'WIF', 'Jeo Boden', 'Popcat'
];
const symbols = names.map(n => n.replace(/\s+/g, '').substring(0, 5).toUpperCase());
const statRowKeys: StatRowKey[] = ['holders', 'website', 'search', 'trophy', 'crown', 'views', 'socials'];
const dynamicProgressIcons: StatProgress['icon'][] = ['star', 'chef', 'clover', 'leaf', 'send'];
const staticProgressIcons: StatProgress['icon'][] = ['target', 'ghost'];


let idCounter = 0;

const createSampleToken = (category: string): Token => {
    idCounter++;
    const nameIndex = Math.floor(random() * names.length);
    const name = names[nameIndex];
    const creator = firstNames[Math.floor(random() * firstNames.length)] + lastNames[Math.floor(random() * lastNames.length)];
    const symbol = symbols[nameIndex];
    
    const marketCap = 1000 + random() * 10_000_000;
    const holders = 10 + Math.floor(random() * 25000);
    const createdDate = new Date(Date.now() - random() * 30 * 24 * 60 * 60 * 1000); // within last 30 days
    
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

    const rowStats: Token['stats']['row'] = {
        holders: holders,
        website: random() > 0.5,
        search: random() > 0.2,
        socials: random() > 0.3,
        trophy: Math.floor(random() * 5),
        crown: { 
            current: Math.floor(random() * 12), 
            total: 11,
            color: random() > 0.5 ? 'yellow' : 'white'
        },
        views: Math.floor(random() * 20),
    };
    
    const progressStats: StatProgress[] = [
        ...dynamicProgressIcons.map((icon, index) => ({
            icon: icon,
            value: Math.floor(random() * 101),
            variant: random() > 0.5 ? 'red' : 'green',
            timeframe: index === 1 ? ['5m', '1h', '2m', '10m', '23h'][Math.floor(random() * 5)] : undefined,
        })),
        ...staticProgressIcons.map((icon) => ({
            icon: icon,
            value: Math.floor(random() * 101),
            variant: random() > 0.5 ? 'red' : 'green',
            timeframe: undefined,
        }))
    ].sort(() => 0.5 - random()).slice(0, 5);

    const txBuy = Math.floor(random() * 1000);
    const txSell = Math.floor(random() * 1000);

    return {
        id: `token-${idCounter}-${generateId(4)}`,
        name,
        creator: creator,
        symbol,
        chain: chains[Math.floor(random() * chains.length)],
        price: 0, // Will be calculated in the hook
        priceChange24h: (random() - 0.5) * 20,
        liquidity: marketCap / (5 + random() * 10),
        marketCap,
        volume: marketCap * (0.1 + random()),
        created: formatTimeAgo(createdDate),
        f: random(),
        tx: {
            buy: txBuy,
            sell: txSell,
            total: txBuy + txSell
        },
        isGold: random() > 0.95,
        pump: generateTruncatedPump(),
        image: `https://picsum.photos/seed/${generateId(5)}/68/68`,
        stats: {
            row: rowStats,
            progress: progressStats,
            bar: [
                { percentage: 20, color: 'bg-green-500' },
                { percentage: 30, color: 'bg-yellow-500' },
                { percentage: 50, color: 'bg-red-500' },
            ],
        },
        category: category,
    };
};

const generateTokens = (category: string, count: number): Token[] => {
    return Array.from({ length: count }, () => createSampleToken(category));
}

export const NEW_PAIRS_DATA: Token[] = generateTokens('New Pair', 30);
export const FINAL_STRETCH_DATA: Token[] = generateTokens('Final Stretch', 30);
export const MIGRATED_DATA: Token[] = generateTokens('Migrated', 30);
