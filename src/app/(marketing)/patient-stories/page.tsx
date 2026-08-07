import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, ShieldAlert, Award, ArrowRight } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Patient Stories & Travel Reviews | Guides",
  description: "Read about patient travel considerations and check our validation guidelines for patient reviews and testimonies.",
  path: "/patient-stories",
});

export default function PatientStoriesPage() {
  const breadcrumbsItems = [
    { label: "Resources", href: "/faq" },
    { label: "Patient Stories", href: "/patient-stories" },
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
          <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Patient Stories & Reviews
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Guidance on interpreting patient feedback, verifying medical reviews, 
            and understanding our publication consent standards.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-3xl space-y-12">
          
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpreting Medical Travel Reviews</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Online testimonies and reviews are valuable tools for evaluating patient satisfaction. However, 
              because clinical outcomes vary widely based on individual health status, testimonials should 
              never be considered guarantees of medical results. We recommend comparing structured reviews 
              across multiple independent sources.
            </p>
          </section>

          {/* Empty State / Consent Notice */}
          <section className="rounded-2xl border-2 border-dashed bg-slate-50/50 p-8 text-center">
            <ShieldAlert className="mx-auto h-10 w-10 text-slate-400 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">Story Index Under Audits</h3>
            <p className="text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed mb-6">
              To guarantee authenticity and protect patient privacy, we require verified consent 
              audits under HIPAA/PHI regulations before publishing client testimonials. 
              Profiles will be published here once verification is finalized.
            </p>
            <div className="inline-flex rounded-full bg-slate-100 px-3.5 py-1 text-sm font-semibold text-slate-600 border">
              E-E-A-T Protocols Active
            </div>
          </section>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
}
