/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx}",
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          "deep-navy": "#1a1a2e",
          "dark-purple": "#16213e",
          "light-gray": "#e0e0e0",
          "teal-accent": "#0fabbc",
          "teal-light": "#08d9d6",
          "green-positive": "#00cc88",
          "red-negative": "#ff4d4f",
        },
      },
    },
    plugins: [],
  };