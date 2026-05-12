"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = query.trim()
    ? apps.filter((app) => {
        const q = query.toLowerCase();
        return (
          app.name.toLowerCase().includes(q) ||
          app.description.toLowerCase().includes(q) ||
          app.platform.toLowerCase().includes(q) ||
          app.sections.some(
            (s) =>
              s.title.toLowerCase().includes(q) ||
              s.content.toLowerCase().includes(q),
          )
        );
      })
    : [];

  return (
    <div>
      <div className="mb-8">
        <p className="text-gray-500 text-sm mb-3">
          {query ? (
            <span>
              <span className="font-semibold text-gray-800">
                {results.length}
              </span>{" "}
              result{results.length !== 1 ? "s" : ""} for{" "}
              <span className="font-semibold text-gray-800">"{query}"</span>
            </span>
          ) : (
            "Enter a keyword to search"
          )}
        </p>
        <SearchBar className="max-w-xl" />
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-16">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            No results found
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Try different keywords or{" "}
            <a
              href="https://clovity.com/contact"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              contact support
            </a>
          </p>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to all apps
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-600">Search</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Search Documentation
      </h1>

      <Suspense fallback={<p className="text-gray-400 text-sm">Loading...</p>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
