"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CryptoList from "../components/cryptoList";
import SearchBar from "../components/searchBar";
import { useState } from "react";

const queryClient = new QueryClient();

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByChange, setSortByChange] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-teal-accent">
            Crypto Price Tracker
          </h1>
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            <SearchBar onSearch={setSearchTerm} />
            <button
              onClick={() => setSortByChange(!sortByChange)}
              className="bg-gradient-to-r from-teal-accent to-teal-light text-deep-navy px-4 py-2 rounded-lg hover:from-teal-light hover:to-teal-accent transition-colors duration-200"
            >
              Sort by 24h Change {sortByChange ? "↓" : "↑"}
            </button>
          </div>
          <CryptoList searchTerm={searchTerm} sortByChange={sortByChange} />
        </div>
      </main>
    </QueryClientProvider>
  );
}