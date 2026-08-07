import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, ShieldCheck, HelpCircle, CheckCircle2, ChevronRight, 
  MapPin, Stethoscope, FileSearch, ArrowRight
} from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Hospitals in Costa Rica | Evaluation & Quality Guide",
  description: "Learn how to evaluate international hospitals. Understand JCI accreditation, safety standards, and view our review guidelines for medical facilities.",
  path: "/hospitals",
});

const evaluationCriteria = [
  {
    title: "International Accreditation",
    description: "Look for JCI (Joint Commission International) or equivalents. This ensures the hospital operates under strict patient safety standards.",
  },
  {
    title: "Emergency Backup Facilities",
    description: "Confirm the facility is a full-service hospital equipped with an on-site Intensive Care Unit (ICU) and 24/7 emergency support.",
  },
  {
    title: "Bilingual Coordination Departments",
    description: "Verify the presence of a dedicated international patient department with English-speaking coordinators.",
  },
  {
    title: "Infection Control Rates",
    description: "Reputable hospitals track and report clinical indicator metrics, including post-surgical infection rates.",
  }
];

export default function HospitalsPage() {
  const breadcrumbsItems = [
    { label: "Providers", href: "/hospitals" },
    { label: "Hospitals", href: "/hospitals" },
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
          <Building2 className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Evaluating International Hospitals
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A comprehensive guide to understanding facility standards, JCI credentials, 
            and safety indicators for medical travel in Costa Rica and Latin America.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Evaluate an International Hospital</h2>
              <p className="text-gray-600 leading-relaxed">
                When traveling abroad for medical care, distinguishing between credentialed medical centers 
                and outpatient clinics is a fundamental step. Major surgical procedures should typically be 
                conducted in a licensed, full-service hospital that offers comprehensive inpatient support, 
                advanced emergency response, and diagnostic imaging.
              </p>
            </section>

            {/* Criteria Grid */}
            <section className="grid gap-6 sm:grid-cols-2">
              {evaluationCriteria.map((item, idx) => (
                <div key={idx} className="rounded-xl border p-5 bg-white shadow-xs">
                  <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </section>

            {/* Empty State Directory */}
            <section className="rounded-2xl border-2 border-dashed bg-slate-50/50 p-8 text-center">
              <Building2 className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Hospital Profiles Under Review</h3>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-medium">
                Verified hospital profiles will be added as they complete our review process. 
                We independently review Ministry of Health filings, JCI status, and clinical 
                records before publication.
              </p>
              <div className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700 border">
                Verification Protocol Active
              </div>
            </section>

            {/* Accreditation details */}
            <section className="border-t pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Institutional vs Individual Credentials</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4 font-medium">
                Accreditation can apply to either the physical hospital facility (like JCI) or the individual practicing physician 
                (such as board certifications and licenses). An internationally accredited facility ensures that standard nursing protocols, 
                sterile fields, emergency preparedness, and pharmaceutical compliance are strictly monitored.
              </p>
            </section>

            <MedicalDisclaimer />
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-xl border bg-slate-50 p-6 sticky top-24 space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                  Quality Assurance
                </h4>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  We recommend that all patients verify credentials independently with the Joint Commission International directory
                  or the respective national health boards.
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Helpful Inquiries</h4>
                <p className="text-base text-slate-600 leading-relaxed mb-4 font-medium">
                  Ask these questions when discussing services with any facility coordinator:
                </p>
                <ul className="space-y-2 text-base text-gray-700 list-disc pl-4 font-medium">
                  <li>Is the medical facility accredited by JCI or a comparable board?</li>
                  <li>Are emergency services and ICU located on-site?</li>
                  <li>How do you coordinate follow-up care with my doctor at home?</li>
                </ul>
              </div>
                          </div>
          </div>

        </div>
      </div>
    </>
  );
}
