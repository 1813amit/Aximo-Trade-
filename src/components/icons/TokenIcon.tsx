export function TokenIcon({ symbol }: { symbol: string }) {
  const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; 
    }
    return hash;
  };

  const hash = getHash(symbol);
  const hue = hash % 360;
  const sat = 50 + (hash % 20);
  const light = 50 + (hash % 10);

  return (
    <div
      className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
      style={{ backgroundColor: `hsl(${hue}, ${sat}%, ${light}%)` }}
    >
      {symbol.charAt(0)}
    </div>
  );
}
