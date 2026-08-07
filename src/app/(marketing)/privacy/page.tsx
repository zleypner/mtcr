import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Privacy Policy | Smart Medical Tourism",
  description: "Read our privacy guidelines, cookie declaration, and data processing information for international patients.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbsItems = [
    { label: "Company", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xs text-slate-400 mb-6">Last Updated: August 6, 2026</p>

          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Smart Medical Tourism is committed to protecting your privacy. This policy outlines how we handle 
            data when you browse our educational guides or submit inquiry forms.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Information We Collect</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            We collect information that you voluntarily submit through our contact forms, including name, email, 
            country of residence, and treatment category of interest. We do NOT collect detailed electronic 
            health records or diagnostic images through this website.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Processing Purpose</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            The data collected is processed exclusively to address your inquiry, connect you with 
            verified coordination services, and provide guide materials. We do not sell your personal 
            contact information to marketing groups.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Cookies and Analytics</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            We utilize basic tracking cookies to monitor page performance, visitor trends, and load speeds. 
            All analytical data is collected in aggregate, anonymized formats.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Data Storage and Contact</h3>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Information is securely stored in cloud databases. If you wish to request deletion of your contact 
            record, please email us directly through our contact portal.
          </p>
        </div>
      </article>
    </>
  );
}
