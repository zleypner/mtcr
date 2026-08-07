import type { Metadata } from "next";
import Link from "next/link";
import { Info, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";

export const metadata: Metadata = helperGenerateMetadata({
  title: "About Us | Smart Medical Tourism",
  description: "Learn about Smart Medical Tourism. Read our mission, editorial verification guidelines, and core transparency values.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbsItems = [
    { label: "Company", href: "/about" },
    { label: "About Us", href: "/about" },
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
          <Info className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About Smart Medical Tourism
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are dedicated to providing clear, independent, and credential-focused guides 
            for patients researching medical travel options in Latin America.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-3xl space-y-12">
          
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Navigating healthcare options outside your home country can be challenging and complex. 
              Smart Medical Tourism was founded to bridge the information gap. We supply objective, 
              verifiable directories and planning tools to support independent patient evaluations. 
              Our primary commitment is patient safety and education.
            </p>
          </section>

          {/* Pillars */}
          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border p-5 bg-white">
              <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                Transparency First
              </h4>
              <p className="text-2xs text-gray-500 leading-relaxed">
                We clearly separate educational guides from clinic profiles. We do not edit 
                or alter JCI accreditation statuses or Ministry of Health registrations.
              </p>
            </div>
            <div className="rounded-xl border p-5 bg-white">
              <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                <Heart className="h-4.5 w-4.5 text-primary shrink-0" />
                Safety-First Focus
              </h4>
              <p className="text-2xs text-gray-500 leading-relaxed">
                We emphasize recovery timelines and credential checks. We advise against 
                rushing travel or prioritizing low cost over safety.
              </p>
            </div>
          </section>

          {/* Editorial policy */}
          <section className="border-t pt-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">How We Verify Profiles</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our editorial team independently audits registries before publishing any clinic 
              or specialist record. We verify that medical licenses are active with local boards 
              (such as Colegio de Médicos in Costa Rica) and that facilities hold current sanitary permits.
            </p>
          </section>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
}
