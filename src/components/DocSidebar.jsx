"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function DocSidebar({ docs, appSlug, activeArticleSlug }) {
  const [openCategories, setOpenCategories] = useState(() => {
    const initial = {};
    for (const cat of docs.categories) {
      const hasActive = cat.articles.some((a) => a.slug === activeArticleSlug);
      initial[cat.id] = hasActive || cat === docs.categories[0];
    }
    return initial;
  });

  function toggleCategory(catId) {
    setOpenCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 flex-shrink-0">
      <div className="sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto pr-2 pb-8">
        <nav className="py-4 space-y-0.5">
          {docs.categories.map((cat) => {
            const isOpen = openCategories[cat.id];
            const hasActive = cat.articles.some((a) => a.slug === activeArticleSlug);

            return (
              <div key={cat.id}>
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors
                    ${hasActive ? "text-blue-700" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"}`}
                >
                  <span>{cat.title}</span>
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="ml-2 mt-0.5 space-y-0.5 border-l border-gray-200 pl-3">
                    {cat.articles.map((article) => {
                      const isActive = article.slug === activeArticleSlug;
                      return (
                        <Link
                          key={article.slug}
                          href={`/apps/${appSlug}/${article.slug}`}
                          className={`block px-2 py-1.5 text-sm rounded-md transition-all duration-150 ${
                            isActive
                              ? "text-blue-700 font-medium bg-blue-50"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {article.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
