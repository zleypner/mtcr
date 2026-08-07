import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { 
  ArrowLeft, MapPin, Calendar, Building2, ShieldCheck, 
  Plane, Compass, HelpCircle, CheckCircle2, ChevronRight 
} from "lucide-react";

import { getCityBySlug } from "@/lib/content-parser";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "san-jose" },
    { slug: "escazu" }
  ];
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mappedSlug = slug === "san-jose" ? "san-jose-costa-rica" : slug === "escazu" ? "escazu-costa-rica" : slug;
  const parsed = getCityBySlug(mappedSlug);

  if (!parsed) {
    return {
      title: "City Guide Not Found",
    };
  }

  return helperGenerateMetadata({
    title: parsed.frontmatter.title,
    description: parsed.frontmatter.description,
    path: `/cities/${slug}`,
  });
}

export default async function CitySlugPage({ params }: CityPageProps) {
  const { slug } = await params;
  const mappedSlug = slug === "san-jose" ? "san-jose-costa-rica" : slug === "escazu" ? "escazu-costa-rica" : slug;
  
  const parsed = getCityBySlug(mappedSlug);

  if (!parsed) {
    notFound();
  }

  const breadcrumbsItems = [
    { label: "Destinations", href: "/destinations" },
    { label: "Costa Rica", href: "/destinations/costa-rica" },
    { label: parsed.frontmatter.city || parsed.frontmatter.title.split(":")[0], href: `/cities/${slug}` },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="container max-w-4xl">
          <Link 
            href="/destinations"
            className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Link>

          {/* City Header Details Banner */}
          <div className="rounded-2xl border bg-slate-50 p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 mb-2">
                Costa Rica Hub
              </span>
              <h1 className="text-3xl font-extrabold text-gray-900">
                {parsed.frontmatter.city || parsed.frontmatter.title} Guide
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Primary Medical Tourism Zone in Central America
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 text-slate-600">
              {parsed.frontmatter.airport && (
                <div>
                  <span className="block text-slate-400 font-semibold uppercase">Airport</span>
                  <span className="font-semibold text-gray-900">{parsed.frontmatter.airport.split(" ")[0]}</span>
                </div>
              )}
              {parsed.frontmatter.timezone && (
                <div>
                  <span className="block text-slate-400 font-semibold uppercase">Timezone</span>
                  <span className="font-semibold text-gray-900">{parsed.frontmatter.timezone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Render MDX contents directly */}
          <div className="prose prose-blue max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:leading-relaxed prose-li:text-gray-600">
            <MDXRemote source={parsed.content} />
          </div>

          {/* Dynamic Medical Tourism Logistics Boxes */}
          <div className="grid gap-6 sm:grid-cols-2 mt-12 border-t pt-8">
            <div className="rounded-xl border p-5 bg-white shadow-xs">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <Plane className="h-4.5 w-4.5 text-primary" />
                Arrival & Transportation
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Most international patients arrive at Juan Santamaría International Airport (SJO). 
                From SJO, Escazú is a 20-minute drive, and San José downtown is about 25-35 minutes. 
                We recommend booking pre-arranged airport pickups through your clinic coordinator.
              </p>
            </div>

            <div className="rounded-xl border p-5 bg-white shadow-xs">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <Compass className="h-4.5 w-4.5 text-primary" />
                Lodging & Post-Op Recovery
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Choose recovery hotels that feature wide hallways, elevator access, and grab bars. 
                Escazú houses multiple specialized medical recovery retreats offering round-the-clock 
                nursing services, customized soft-food diets, and direct shuttle logistics.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50/50 rounded-2xl border border-blue-100 p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Plan Your Trip to Costa Rica?</h3>
            <p className="text-xs text-gray-600 max-w-md mx-auto mb-4 leading-relaxed">
              Connect with coordinators to query accredited clinics, lodging options, and travel budgets in San José and Escazú.
            </p>
            <Link href="/contact" className={buttonVariants()}>
              Request Costa Rica Travel Details
            </Link>
          </div>

          <MedicalDisclaimer />
        </div>
      </article>
    </>
  );
}
