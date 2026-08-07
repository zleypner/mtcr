import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, BookOpen, Clock, HeartHandshake, CheckCircle2, 
  ChevronRight, CalendarDays, Compass, HelpCircle
} from "lucide-react";
import { guidesData } from "@/lib/data/guides";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(guidesData).map((key) => ({
    slug: key,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = guidesData[slug];

  if (!data) {
    return {
      title: "Guide Not Found",
    };
  }

  return helperGenerateMetadata({
    title: `${data.title} | Patient Resources`,
    description: data.description,
    path: `/guides/${slug}`,
  });
}

export default async function GuideSlugPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const data = guidesData[slug];

  if (!data) {
    notFound();
  }

  const breadcrumbsItems = [
    { label: "Guides", href: "/guides" },
    { label: data.title, href: `/guides/${slug}` },
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
            href="/guides"
            className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Guides Index
          </Link>

          <header className="mb-10">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 mb-3 uppercase tracking-wider">
              Educational Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              {data.description}
            </p>
          </header>

          <div className="space-y-8 prose prose-slate max-w-none">
            <p className="text-gray-600 leading-relaxed text-base">
              {data.content}
            </p>

            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Key Steps / Guidelines</h3>
            <div className="space-y-6">
              {data.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border bg-slate-50/50">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-xs">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{step.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <MedicalDisclaimer />

            <div className="border-t pt-8 text-center bg-slate-50 rounded-2xl p-6 border">
              <h3 className="text-base font-bold text-gray-900 mb-2">Need Guidance Regarding Your Trip?</h3>
              <p className="text-xs text-gray-500 mb-4 max-w-sm mx-auto">
                Connect with local patient liaisons in Costa Rica to receive credentials and logistics support.
              </p>
              <Link href="/contact" className={buttonVariants()}>
                Submit Inquiry
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
