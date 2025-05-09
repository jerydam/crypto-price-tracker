export default function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by name or symbol..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full sm:w-80 px-4 py-2 bg-dark-purple text-gray-200 border border-teal-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-light transition-all duration-200"
      />
    );
  }