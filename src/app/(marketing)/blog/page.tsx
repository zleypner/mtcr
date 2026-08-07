import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Calendar, User, ChevronRight, ArrowRight } from "lucide-react";
import { getAllBlogArticles } from "@/lib/content-parser";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Tourism Blog & Articles | Costa Rica",
  description: "Browse educational articles, safety guides, cost comparisons, and travel planning logs written by our editorial team.",
  path: "/blog",
});

export default function BlogPage() {
  const articles = getAllBlogArticles();
  
  const breadcrumbsItems = [
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <section className="bg-gradient-to-b from-blue-50/50 to-white py-16 sm:py-24 border-b">
        <div className="container max-w-4xl text-center">
          <Newspaper className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Smart Medical Tourism Blog
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Educational articles and resources covering patient safety, destination comparisons, 
            and cost guides, written by our editorial coordinators.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-5xl">
          {articles.length === 0 ? (
            <div className="text-center rounded-2xl border-2 border-dashed bg-slate-50/50 p-12">
              <Newspaper className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">No Articles Published</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Check back shortly. Verified editorial guides and posts are currently undergoing medical review.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const fm = article.frontmatter;
                return (
                  <article 
                    key={fm.slug}
                    className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
                  >
                    <div>
                      {fm.category && (
                        <span className="text-3xs font-bold text-primary uppercase tracking-widest block mb-2">
                          {fm.category.replace("-", " ")}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                        {fm.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        {fm.description}
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between text-3xs text-slate-400 mb-4">
                        <span className="flex items-center">
                          <User className="mr-1 h-3.5 w-3.5 text-slate-300" />
                          By {fm.author || "Editorial"}
                        </span>
                        {fm.updatedAt && (
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3.5 w-3.5 text-slate-300" />
                            {fm.updatedAt}
                          </span>
                        )}
                      </div>
                      
                      <Link 
                        href={`/blog/${fm.slug}`}
                        className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
