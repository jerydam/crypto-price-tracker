import { useCryptoPrices } from "../hooks/useCryptoPrice";
import CryptoCard from "./cryptoCard";

export default function CryptoList({ searchTerm, sortByChange }) {
  const { data, isLoading, error } = useCryptoPrices();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  const defaultCoins = ["bitcoin", "ethereum", "solana", "matic-network", "dogecoin"];
  let filteredCoins = data?.filter(
    (coin) =>
      defaultCoins.includes(coin.id) &&
      (coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (sortByChange) {
    filteredCoins = filteredCoins?.sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCoins?.length ? (
        filteredCoins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)
      ) : (
        <div className="col-span-full text-center">No coins found</div>
      )}
    </div>
  );
}