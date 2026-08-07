import type { Metadata } from "next";
import { getAllBlogArticles, getBlogCategories } from "@/lib/content-parser";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Tourism Blog & Articles | Costa Rica",
  description:
    "Browse educational articles, safety guides, cost comparisons, and travel planning resources for medical tourism in Costa Rica.",
  path: "/blog",
});

// Category mapping for display
const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  guides: "Guides",
  dental: "Dental",
  gastroenterology: "Gastroenterology",
  "weight-loss": "Weight Loss",
  "medical-tourism": "Medical Tourism",
  "patient-safety": "Patient Safety",
  "cost-comparison": "Costs & Planning",
  tips: "Tips",
  news: "News",
  "patient-experience": "Patient Stories",
  industry: "Industry",
  destination: "Destinations",
};

function getCategoryOptions(articles: ReturnType<typeof getAllBlogArticles>) {
  const categoryCounts: Record<string, number> = { all: articles.length };

  for (const article of articles) {
    const cat = article.frontmatter.category;
    if (cat) {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    }
  }

  const options = [{ value: "all", label: "All", count: articles.length }];

  // Add categories that have articles
  const existingCategories = getBlogCategories();
  for (const cat of existingCategories) {
    if (CATEGORY_LABELS[cat]) {
      options.push({
        value: cat,
        label: CATEGORY_LABELS[cat],
        count: categoryCounts[cat] || 0,
      });
    }
  }

  return options;
}

export default function BlogPage() {
  const articles = getAllBlogArticles();
  const categoryOptions = getCategoryOptions(articles);

  return (
    <main>
      {/* Hero Section - Compact */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white py-10 sm:py-12">
        <div className="container max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Smart Medical Tourism Blog
            </h1>
            <p className="mt-3 text-base font-medium leading-relaxed text-gray-600 sm:text-lg">
              Expert articles on patient safety, cost guides, and travel
              planning for medical tourism in Costa Rica.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content with Filters */}
      <BlogContent articles={articles} categories={categoryOptions} />
    </main>
  );
}
