import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, User, Clock, ShieldAlert } from "lucide-react";

import { getBlogArticleBySlug, getAllBlogArticles } from "@/lib/content-parser";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllBlogArticles();
  return articles.map((article) => ({
    slug: article.frontmatter.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = getBlogArticleBySlug(slug);

  if (!parsed) {
    return {
      title: "Article Not Found",
    };
  }

  return helperGenerateMetadata({
    title: parsed.frontmatter.title,
    description: parsed.frontmatter.description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: parsed.frontmatter.publishedAt || parsed.frontmatter.updatedAt,
    modifiedTime: parsed.frontmatter.updatedAt,
    authors: [parsed.frontmatter.author || "Editorial Team"],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const parsed = getBlogArticleBySlug(slug);

  if (!parsed) {
    notFound();
  }

  const breadcrumbsItems = [
    { label: "Blog", href: "/blog" },
    { label: parsed.frontmatter.title.split(":")[0], href: `/blog/${slug}` },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="container max-w-3xl">
          <Link 
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog Index
          </Link>

          <header className="mb-10 pb-8 border-b">
            {parsed.frontmatter.category && (
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">
                {parsed.frontmatter.category.replace("-", " ")}
              </span>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              {parsed.frontmatter.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
              <span className="flex items-center">
                <User className="mr-1.5 h-4 w-4 text-slate-300" />
                By {parsed.frontmatter.author || "Editorial Team"}
              </span>
              
              {parsed.frontmatter.updatedAt && (
                <span className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4 text-slate-300" />
                  Last Updated: {parsed.frontmatter.updatedAt}
                </span>
              )}

              {parsed.frontmatter.medicalReviewer && (
                <span className="flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700 font-semibold border border-blue-100">
                  <ShieldAlert className="mr-1 h-3.5 w-3.5 text-blue-600" />
                  Medically Reviewed
                </span>
              )}
            </div>
          </header>

          {/* Render MDX contents directly */}
          <div className="prose prose-blue max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-li:text-gray-600">
            <MDXRemote source={parsed.content} />
          </div>

          <MedicalDisclaimer />
        </div>
      </article>
    </>
  );
}
