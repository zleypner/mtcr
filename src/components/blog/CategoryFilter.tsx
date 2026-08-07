"use client";

import { cn } from "@/lib/utils";

export interface CategoryOption {
  value: string;
  label: string;
  count?: number;
}

interface CategoryFilterProps {
  categories: CategoryOption[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
            activeCategory === category.value
              ? "bg-primary text-white shadow-sm"
              : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          )}
        >
          {category.label}
          {category.count !== undefined && category.count > 0 && (
            <span
              className={cn(
                "ml-0.5 text-xs",
                activeCategory === category.value
                  ? "text-white/80"
                  : "text-gray-400"
              )}
            >
              ({category.count})
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
