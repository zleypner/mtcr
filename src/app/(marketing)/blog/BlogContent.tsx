"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { CategoryFilter, BlogCard, FeaturedArticle } from "@/components/blog";
import type { CategoryOption } from "@/components/blog";
import type { ParsedMDX } from "@/lib/content-parser";

interface BlogContentProps {
  articles: ParsedMDX[];
  categories: CategoryOption[];
}

export function BlogContent({ articles, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    let result = articles;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter(
        (article) => article.frontmatter.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((article) => {
        const title = article.frontmatter.title?.toLowerCase() || "";
        const description = article.frontmatter.description?.toLowerCase() || "";
        const tags = article.frontmatter.tags?.join(" ").toLowerCase() || "";
        return (
          title.includes(query) ||
          description.includes(query) ||
          tags.includes(query)
        );
      });
    }

    return result;
  }, [articles, activeCategory, searchQuery]);

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  const clearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <section className="py-8 sm:py-10">
      <div className="container max-w-6xl">
        {/* Filters Row */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Pills */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Search Input */}
          <div className="relative shrink-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:w-56"
            />
          </div>
        </div>

        {/* Results */}
        {filteredArticles.length === 0 ? (
          <EmptyState onClear={clearFilters} />
        ) : (
          <div className="space-y-10">
            {/* Featured Article */}
            {featuredArticle && (
              <FeaturedArticle article={featuredArticle} />
            )}

            {/* Articles Grid */}
            {otherArticles.length > 0 && (
              <div>
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  {activeCategory === "all" ? "Latest Articles" : "More Articles"}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otherArticles.map((article) => (
                    <BlogCard
                      key={article.frontmatter.slug}
                      article={article}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-slate-50/50 p-12 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Search className="h-6 w-6 text-gray-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">No Articles Found</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm font-medium text-gray-500">
        No articles match your current filters. Try adjusting your search or
        category.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-4 text-sm font-semibold text-primary hover:underline"
      >
        Clear all filters
      </button>
    </div>
  );
}
