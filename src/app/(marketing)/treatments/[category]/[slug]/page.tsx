import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { 
  ArrowLeft, Calendar, ShieldAlert, Award, DollarSign, Clock, 
  HeartHandshake, ChevronRight, ClipboardCheck, Info 
} from "lucide-react";

import { treatmentsData } from "@/lib/data/treatments";
import { getTreatmentBySlug } from "@/lib/content-parser";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { 
  QuickFacts, CostComparison, Callout, RecoveryTimeline, CTABox, ClinicGrid 
} from "@/components/content";

interface ProcedurePageProps {
  params: Promise<{ category: string; slug: string }>;
}

// Generate static params for existing MDX files & structural dictionary items
export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  
  // 1. From dictionary
  Object.keys(treatmentsData).forEach((catKey) => {
    treatmentsData[catKey].procedures.forEach((proc) => {
      params.push({ category: catKey, slug: proc.slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  
  // Check MDX first
  const parsed = getTreatmentBySlug(category, slug);
  if (parsed) {
    return helperGenerateMetadata({
      title: parsed.frontmatter.title,
      description: parsed.frontmatter.description,
      path: `/treatments/${category}/${slug}`,
    });
  }

  // Check Dictionary
  const catData = treatmentsData[category];
  const procData = catData?.procedures.find((p) => p.slug === slug);
  
  if (!procData) {
    return {
      title: "Procedure Not Found",
    };
  }

  return helperGenerateMetadata({
    title: `${procData.name} in Costa Rica | Costs & Patient Guide`,
    description: `${procData.name} in Costa Rica: typical costs, credential requirements, recovery timeline, and choosing a specialist.`,
    path: `/treatments/${category}/${slug}`,
  });
}

// MDX Components Registry
const mdxComponents = {
  QuickFacts,
  CostComparison,
  Callout,
  RecoveryTimeline,
  CTABox,
  ClinicGrid,
};

export default async function ProcedurePage({ params }: ProcedurePageProps) {
  const { category, slug } = await params;
  
  const breadcrumbsItems = [
    { label: "Treatments", href: "/treatments" },
  ];

  // 1. Attempt to load MDX content
  const parsedMdx = getTreatmentBySlug(category, slug);
  if (parsedMdx) {
    const catData = treatmentsData[category];
    if (catData) {
      breadcrumbsItems.push({ label: catData.name, href: `/treatments/${category}` });
    }
    breadcrumbsItems.push({ label: parsedMdx.frontmatter.title.split(":")[0], href: `/treatments/${category}/${slug}` });

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
              href={`/treatments/${category}`}
              className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {catData?.name || "Treatments"}
            </Link>

            {/* Render MDX using RSC remote component */}
            <div className="prose prose-blue max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h1:tracking-tight prose-a:text-primary hover:prose-a:underline">
              <MDXRemote source={parsedMdx.content} components={mdxComponents} />
            </div>
          </div>
        </article>
      </>
    );
  }

  // 2. Fallback to dictionary metadata if MDX file not written yet
  const catData = treatmentsData[category];
  const procData = catData?.procedures.find((p) => p.slug === slug);

  if (!procData) {
    notFound();
  }

  breadcrumbsItems.push({ label: catData.name, href: `/treatments/${category}` });
  breadcrumbsItems.push({ label: procData.name, href: `/treatments/${category}/${slug}` });

  // Fallback template rendering
  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="container max-w-4xl">
          <Link 
            href={`/treatments/${category}`}
            className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {catData.name}
          </Link>

          <header className="mb-10">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 mb-3">
              Procedure Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {procData.name} in Costa Rica
            </h1>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Understand typical costs, credential requirements, recovery timeline, and how to plan for your {procData.name.toLowerCase()} in Costa Rica.
            </p>
          </header>

          {/* Quick Facts */}
          <QuickFacts 
            procedure={procData.name}
            duration={procData.slug === "dental-implants" ? "1-2 hours per post" : "1-3 hours"}
            recovery={procData.recovery}
            hospital={procData.hospitalStay}
            savings="40-70%"
          />

          <div className="space-y-10 prose prose-slate max-w-none">
            
            {/* What is Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What is {procData.name}?</h2>
              <p className="text-gray-600 leading-relaxed text-base">{procData.description}</p>
            </section>

            {/* Why Choose Costa Rica */}
            <section className="bg-slate-50 rounded-xl border p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Costa Rica for this Procedure?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Costa Rica has established itself as a primary medical destination for patients from the US and Canada. 
                Private clinics in Escazú and San José use modern medical technologies, operate under strict hygiene boards, 
                and feature bilingual teams.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="flex items-center gap-2 text-gray-700">
                  <ClipboardCheck className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Credentialed Specialists</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Typical Savings of 40-70%</span>
                </div>
              </div>
            </section>

            {/* Cost Comparison */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Estimated Pricing</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The actual price of {procData.name.toLowerCase()} depends on the specifics of the clinic, materials chosen, and patient details. Below is an approximate comparison:
              </p>
              {procData.slug === "dental-implants" ? (
                <CostComparison treatment="dental-implants" usaCost={4500} costaRicaCost={1200} />
              ) : procData.slug === "rhinoplasty" ? (
                <CostComparison treatment="rhinoplasty" usaCost={9000} costaRicaCost={4500} />
              ) : (
                <div className="my-6 rounded-lg border bg-slate-50 p-4 text-sm text-slate-700">
                  <strong>Estimated Costa Rica Cost:</strong> {procData.costRange} vs typical US costs which can be 2x to 3x higher.
                </div>
              )}
            </section>

            {/* Choosing & Planning */}
            <section className="grid gap-6 sm:grid-cols-2 border-t pt-8">
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-2">Choosing a Specialist</h4>
                <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600">
                  <li>Verify membership in national and international medical boards.</li>
                  <li>Inquire about the doctor&apos;s experience specific to this procedure.</li>
                  <li>Confirm that facility accreditations are active and verify local permits.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-2">Questions to Ask Your Doctor</h4>
                <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600">
                  <li>How many procedures of this type do you perform annually?</li>
                  <li>What is the recovery period, and when is it safe to travel home?</li>
                  <li>What are the contingency plans in case of emergency or revisions?</li>
                </ul>
              </div>
            </section>

            {/* CTABox */}
            <CTABox 
              title={`Inquire About ${procData.name} in Costa Rica`}
              description="Connect with coordinators to receive details about credentials, clinic certifications, and planning resources."
            />

            {/* Medical Disclaimer */}
            <MedicalDisclaimer />

          </div>
        </div>
      </div>
    </>
  );
}
