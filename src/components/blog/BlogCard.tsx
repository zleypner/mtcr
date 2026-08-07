import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Frontmatter } from "@/lib/content-parser";

interface BlogCardProps {
  article: {
    frontmatter: Frontmatter;
    content: string;
  };
  className?: string;
}

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function formatAuthor(author: string | undefined): string {
  if (!author) return "Editorial Team";
  return author
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatCategory(category: string | undefined): string {
  if (!category) return "";
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function BlogCard({ article, className }: BlogCardProps) {
  const { frontmatter: fm, content } = article;
  const readingTime = calculateReadingTime(content);
  const formattedDate = formatDate(fm.publishedAt || fm.updatedAt);
  const formattedAuthor = formatAuthor(fm.author);
  const formattedCategory = formatCategory(fm.category);

  return (
    <Link href={`/blog/${fm.slug}`} className={cn("group block", className)}>
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:-translate-y-1">
        {/* Image placeholder - will be shown if featuredImage exists */}
        {fm.featuredImage && (
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
            <Image
              src={fm.featuredImage}
              alt={fm.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          {/* Category */}
          {formattedCategory && (
            <span className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
              {formattedCategory}
            </span>
          )}

          {/* Title */}
          <h2 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
            {fm.title}
          </h2>

          {/* Description */}
          <p className="mb-4 flex-1 text-sm font-medium leading-relaxed text-gray-600 line-clamp-3">
            {fm.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between border-t border-gray-50 pt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-gray-700">{formattedAuthor}</span>
              {formattedDate && (
                <>
                  <span className="text-gray-300">·</span>
                  <time dateTime={fm.publishedAt || fm.updatedAt}>
                    {formattedDate}
                  </time>
                </>
              )}
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* Hover arrow indicator */}
        <div className="absolute bottom-5 right-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
          <ArrowRight className="h-5 w-5 text-primary" />
        </div>
      </article>
    </Link>
  );
}
