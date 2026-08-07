import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Star } from "lucide-react";
import type { Frontmatter } from "@/lib/content-parser";

interface FeaturedArticleProps {
  article: {
    frontmatter: Frontmatter;
    content: string;
  };
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

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const { frontmatter: fm, content } = article;
  const readingTime = calculateReadingTime(content);
  const formattedDate = formatDate(fm.publishedAt || fm.updatedAt);
  const formattedAuthor = formatAuthor(fm.author);
  const formattedCategory = formatCategory(fm.category);

  return (
    <Link href={`/blog/${fm.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-200">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
            {fm.featuredImage ? (
              <Image
                src={fm.featuredImage}
                alt={fm.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-white/80 flex items-center justify-center mb-3">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary/70">Featured Article</span>
                </div>
              </div>
            )}
            {/* Featured badge */}
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                <Star className="h-3 w-3" />
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 lg:p-8">
            {/* Category */}
            {formattedCategory && (
              <span className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                {formattedCategory}
              </span>
            )}

            {/* Title */}
            <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-primary lg:text-3xl">
              {fm.title}
            </h2>

            {/* Description */}
            <p className="mb-5 text-base font-medium leading-relaxed text-gray-600 line-clamp-3">
              {fm.description}
            </p>

            {/* Metadata */}
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="font-medium text-gray-700">{formattedAuthor}</span>
              {formattedDate && (
                <>
                  <span className="text-gray-300">·</span>
                  <time dateTime={fm.publishedAt || fm.updatedAt}>
                    {formattedDate}
                  </time>
                </>
              )}
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readingTime} min read
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-primary/80">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
