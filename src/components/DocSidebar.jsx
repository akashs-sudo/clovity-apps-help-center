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
    <aside className="hidden lg:block w-56 xl:w-60 shrink-0">
      <div className="sticky top-[137.6px] h-[calc(100vh-137.6px)] overflow-y-auto py-8 pr-5 pb-12 border-r border-gray-200/90">
        
          <nav className="flex flex-col gap-5">
            {docs.categories.map((cat) => {
              const isOpen = openCategories[cat.id];
              const hasActive = cat.articles.some(
                (a) => a.slug === activeArticleSlug,
              );

              return (
                <div key={cat.id}>
                  {/* Category toggle */}
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className={`w-full text-left flex items-center justify-between mb-1.5 group transition-colors duration-150 cursor-pointer ${
                      hasActive
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    <span className="text-[13px] font-semibold">
                      {cat.title}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-3 h-3 shrink-0 opacity-60" />
                    ) : (
                      <ChevronRight className="w-3 h-3 shrink-0 opacity-60" />
                    )}
                  </button>

                  {/* Article list */}
                  {isOpen && (
                    <ul className="border-l border-gray-200 ml-0.5">
                      {cat.articles.map((article) => {
                        const isActive = article.slug === activeArticleSlug;
                        return (
                          <li key={article.slug}>
                            <Link
                              href={`/apps/${appSlug}/${article.slug}`}
                              className={`relative flex items-start pl-4 pr-1 py-1.5 text-[13px] leading-snug transition-all duration-150 ${
                                isActive
                                  ? "text-blue-700 font-medium"
                                  : "text-gray-500 hover:text-gray-900"
                              }`}
                            >
                              <span
                                className={`absolute -left-px top-0 bottom-0 w-px rounded-full transition-colors duration-150 ${
                                  isActive ? "bg-blue-600" : "bg-transparent"
                                }`}
                              />
                              {article.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
      
      </div>
    </aside>
  );
}
