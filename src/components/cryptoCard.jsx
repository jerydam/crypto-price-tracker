export default function CryptoCard({ coin }) {
    const priceChange = coin.price_change_percentage_24h;
    const isPositive = priceChange >= 0;
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{coin.name}</h2>
        <p className="text-gray-500 uppercase">{coin.symbol}</p>
        <p className="text-lg font-bold">${coin.current_price.toFixed(2)}</p>
        <p
          className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
        >
          24h: {priceChange.toFixed(2)}%
        </p>
      </div>
    );
  }