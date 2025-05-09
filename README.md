# Crypto Price Tracker

A simple web app to track live cryptocurrency prices using the CoinGecko API, built with Next.js, React Query, and Tailwind CSS.

## Features
- Displays prices for Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Polygon (MATIC), and Dogecoin (DOGE).
- Shows name, symbol, current price (USD), and 24-hour price change (%).
- Highlights price changes: green for positive, red for negative.
- Auto-refreshes data every 30 seconds.
- **Bonus**: Search by name/symbol, sort by 24h change, and loading/error states.
- Responsive design for mobile and desktop.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker







# Crypto Price Tracker
A sleek, responsive web app to track live cryptocurrency prices using the CoinGecko API, built with Next.js, React Query, and Tailwind CSS.

## Features
- Tracks Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Polygon (MATIC), and Dogecoin (DOGE).
- Displays name, symbol, current price (USD), and 24-hour price change (%).
- Highlights price changes: green for positive, red for negative.
- Auto-refreshes every 30 seconds.
- Includes search by name/symbol, sort by 24h change, and loading/error states.


## Setup Instructions

Clone the repository
```bash
git clone https://github.com/jerydam/crypto-price-tracker.git
```
cd crypto-price-tracker


Install dependencies
```bash
npm install
```
Run the development server
```bash
npm run dev
```


Open http://localhost:3000 in your browser.

## Project Structure

- app/page.jsx: Main page rendering the tracker UI with search and sort controls.
- components/CryptoList.jsx: Fetches and filters coin data, displays cards in a responsive grid.
- components/CryptoCard.jsx: Renders individual coin details with styled price changes.
- components/SearchBar.jsx: Handles search input for filtering coins.
- hooks/useCryptoPrices.js: Custom React Query hook for fetching and auto-refreshing data.
- app/globals.css & tailwind.config.js: Defines cool color palette and responsive styling.

## Design Decisions

React Query: Simplifies data fetching, caching, and 30-second auto-refresh. Handles loading/error states for robust UX.
Tailwind CSS: Enables rapid, mobile-first styling.
JSX/JavaScript: Uses plain JavaScript for compatibility.
Responsive Design: Grid scales from 1 column (mobile) to 3 columns (desktop). Fluid typography and padding enhance readability.
Modular Code: Separates concerns into components and hooks for maintainability and reusability.
CoinGecko API: Chosen for reliability and free tier. Fetches 5 coins efficiently, with search/sort on client-side.

