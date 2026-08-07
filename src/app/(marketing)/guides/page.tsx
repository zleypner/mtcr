import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, HelpCircle, ChevronRight, ArrowRight } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";
import { guidesData } from "@/lib/data/guides";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Tourism Patient Guides | Costa Rica",
  description: "Browse step-by-step guides on medical travel, trip planning, travel logistics, safety guidelines, and recovery aftercare.",
  path: "/guides",
});

export default function GuidesPage() {
  const breadcrumbsItems = [
    { label: "Guides", href: "/guides" },
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
          <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Patient Planning Guides
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Browse our comprehensive resources designed to help international patients research 
            credentials, prepare for travel, and recover safely.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-4xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {Object.values(guidesData).map((guide) => (
              <div 
                key={guide.slug}
                className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-2">Resource Guide</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-base text-gray-600 font-medium leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>
                <Link 
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Read Full Guide
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 rounded-xl border p-6 text-center">
            <h3 className="text-base font-bold text-gray-900 mb-2">Have Specific Questions About Planning?</h3>
            <p className="text-base text-gray-600 font-medium mb-4">Read our Frequently Asked Questions section for immediate answers.</p>
            <Link href="/faq" className={buttonVariants({ variant: "outline" })}>
              Visit FAQ Directory
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
