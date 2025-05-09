import { useQuery } from "@tanstack/react-query";

export function useCryptoPrices() {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,starknet,solana,matic-network,dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch crypto prices");
      }
      return response.json();
    },
    refetchInterval: 30_000, // Auto-refresh every 30 seconds
  });
}