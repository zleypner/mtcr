import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Disclaimer | Smart Medical Tourism",
  description: "Read our comprehensive medical disclaimer. All content is for informational and educational purposes only.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const breadcrumbsItems = [
    { label: "Company", href: "/about" },
    { label: "Medical Disclaimer", href: "/disclaimer" },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <article className="py-12 sm:py-16">
        <div className="container max-w-3xl prose prose-slate">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="h-10 w-10 text-amber-600 shrink-0" />
            <h1 className="text-3xl font-extrabold text-gray-900 m-0">Medical Disclaimer</h1>
          </div>
          <p className="text-xs text-slate-400 mb-6">Last Updated: August 6, 2026</p>

          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Smart Medical Tourism is an independent planning and educational resources portal. 
            All information provided across this platform, including text, estimated costs, and guide steps, 
            is intended for general educational purposes and independent research only.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">No Medical Advice</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            The contents of this website do not constitute professional medical advice, clinical diagnosis, 
            or surgical treatment plans. Always consult your primary care doctor or a licensed specialist 
            regarding medical conditions. Never delay seeking medical advice because of something you have 
            read on this platform.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">No Clinician-Patient Relationship</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed font-semibold">
            Use of this website, submission of inquiry forms, or communication with local coordinators 
            does not establish a doctor-patient relationship. Smart Medical Tourism does not perform 
            medical vetting, operate clinics, or employ surgeons.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Contingency & Complications</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Healthcare decisions, including traveling abroad for surgery, involve inherent risks. 
            Smart Medical Tourism assumes no responsibility or liability for treatments, complications, 
            revisions, or clinical outcomes. Every patient is responsible for evaluating their personal 
            readiness and vetting doctors directly.
          </p>
        </div>
      </article>
    </>
  );
}
