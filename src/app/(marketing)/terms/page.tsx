import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Terms of Service | Smart Medical Tourism",
  description: "Read our terms of service, content limitations, medical liability disclaimer, and external link policies.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumbsItems = [
    { label: "Company", href: "/about" },
    { label: "Terms of Service", href: "/terms" },
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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xs text-slate-400 mb-6">Last Updated: August 6, 2026</p>

          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Please read these Terms of Service carefully before utilizing this website. Accessing this site 
            indicates your agreement to be bound by these terms.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Informational Content Only</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Smart Medical Tourism is an independent, educational directory and planning portal. The content, 
            price ranges, and checklists are provided for general educational purposes only. They do not 
            constitute medical advice, diagnosis, or clinical recommendations.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Medical Liability Disclaimer</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed font-semibold">
            We are not a medical provider, doctor, clinic, or hospital. We do not perform clinical assessments 
            or assume liability for any healthcare decisions, surgeries, or treatment outcomes. The patient 
            assumes all responsibility for selecting, vetting, and booking treatment with any healthcare provider.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. External Links & Clinicians</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Our guides may contain references to external hospitals, clinics, or credentialing directories. 
            We do not control, endorse, or verify the continuous licensing status of these external organizations. 
            Always verify doctor standing directly with registries.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Modifications to Terms</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            We reserve the right to modify these terms at any time. Your continued use of the website 
            represents acceptance of the updated terms.
          </p>
        </div>
      </article>
    </>
  );
}
