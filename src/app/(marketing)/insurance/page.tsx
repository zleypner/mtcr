import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, AlertCircle, FileSearch, ArrowRight, 
  HelpCircle, CheckCircle2, ClipboardList
} from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Insurance Coverage for Medical Tourism | Guides",
  description: "Understand insurance policies, coverage parameters, pre-authorizations, travel insurance, and medical complications coverage for travel abroad.",
  path: "/insurance",
});

export default function InsurancePage() {
  const breadcrumbsItems = [
    { label: "Resources", href: "/faq" },
    { label: "Insurance Guide", href: "/insurance" },
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
          <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Insurance & Medical Travel
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            An educational guide to understanding domestic policy limitations, pre-authorization 
            options, travel medical policies, and complications coverage.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Does Standard Insurance Cover Treatment Abroad?</h2>
              <p className="text-gray-600 leading-relaxed">
                Generally, domestic health insurance policies in the United States and Canada do not cover elective 
                procedures performed outside national borders. This includes cosmetic surgery, dental veneers, and elective 
                orthopedic joint replacements. However, there are specific scenarios and specialized coverage types that 
                medical travelers should review prior to booking.
              </p>
            </section>

            {/* Insurance Options */}
            <section className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Types of Insurance to Consider</h3>
              
              <div className="space-y-4">
                <div className="rounded-xl border p-5 bg-white">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">1. Employer-Sponsored Medical Travel Plans</h4>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    Some corporate health benefit plans include cross-border medical travel incentives, especially for major 
                    orthopedic or bariatric surgeries. Under these programs, insurers cover surgery and travel expenses 
                    to JCI-accredited centers because the total cost is significantly lower than domestic treatments. 
                    Check with your human resources department to verify if your plan includes this rider.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">2. Medical Tourism Complications Insurance</h4>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    Standard travel insurance typically excludes coverage for any issues arising from scheduled medical treatments. 
                    Therefore, medical travelers are strongly advised to purchase a specialized <strong>Medical Complications Policy</strong>. 
                    These third-party policies provide coverage for emergency revisions, unexpected hospital readmissions, 
                    and extended travel lodging if complications arise during recovery.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">3. General Travel Medical Insurance</h4>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    This coverage protects against non-treatment medical emergencies (like slipping at the hotel, food poisoning, 
                    or travel delays) during your stay. It is separate from the surgical procedure itself but acts as an essential 
                    financial safety net during international travel.
                  </p>
                </div>
              </div>
            </section>

            {/* Pre-authorizations & claims */}
            <section className="border-t pt-8 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Pre-Authorizations and Claims Process</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If your insurer has agreed to cover a procedure (typically for medically necessary treatments like spine surgery or diagnostics), 
                you must complete the following steps before traveling:
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-medium list-disc pl-4">
                <li>Obtain written pre-authorization approval detailing covered codes and reimbursement caps.</li>
                <li>Ensure all clinic bills and surgeon records are provided in English with standard ICD code sets.</li>
                <li>Request itemized receipts showing clinical fees separate from hotel/travel line items.</li>
              </ul>
            </section>

            <MedicalDisclaimer />
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-xl border bg-slate-50 p-6 sticky top-24 space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                  Independent Audit Advice
                </h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  Always confirm coverage details in writing directly with your insurance coordinator. Do not assume coverage without written approvals.
                </p>
              </div>
              <div className="border-t pt-4">
                <Link href="/contact" className={cn(buttonVariants(), "w-full text-center")}>
                  Submit Inquiry
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
