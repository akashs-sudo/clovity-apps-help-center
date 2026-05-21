"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ className = "" }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="w-full pl-10 pr-28 py-3 text-sm border border-gray-200 rounded-xl
                     bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-transparent text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 leading-[18px] text-xs
                    cursor-pointer font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#0052CC" }}
        >
          Search
        </button>
      </div>
    </form>
  );
}
