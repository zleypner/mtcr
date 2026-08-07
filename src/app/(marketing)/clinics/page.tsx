import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, ShieldCheck, HeartHandshake, CheckCircle2, ChevronRight, 
  MapPin, HelpCircle, FileSearch, ArrowRight
} from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Clinics in Costa Rica | Criteria & Verification Guide",
  description: "Learn how to select specialized medical and dental clinics. Compare outpatient procedures, checklists, and view our verification empty state.",
  path: "/clinics",
});

const clinicSpecialties = [
  {
    name: "Dental Clinics",
    desc: "Typically focus on prosthodontics, cosmetic enhancements, and restorative implants. Many house in-house CAD/CAM dental laboratories.",
  },
  {
    name: "Plastic & Cosmetic Clinics",
    desc: "Focus on elective aesthetic procedures. Confirm that major surgeries are performed in a hospital setting rather than small office clinics.",
  },
  {
    name: "Fertility Centers",
    desc: "Require specialized embryology cleanrooms and genetic testing labs. Confirm embryologist certifications and standards.",
  }
];

export default function ClinicsPage() {
  const breadcrumbsItems = [
    { label: "Providers", href: "/hospitals" },
    { label: "Clinics", href: "/clinics" },
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
            Specialized Medical Clinics
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Guidance on comparing specialized outpatient clinics, selecting dental practices, 
            and reviewing clinical indicators for medical travel.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparing Outpatient Clinics</h2>
              <p className="text-gray-600 leading-relaxed">
                Many specialized treatments (such as dental veneers, single-post implants, 
                minor cosmetic procedures, and fertility assessments) are performed in dedicated 
                outpatient clinics. Unlike general hospitals, clinics focus on specific specialty fields 
                and can offer highly streamlined processes. However, independent credential audits remain essential.
              </p>
            </section>

            {/* Specialty List */}
            <section className="grid gap-6 sm:grid-cols-3">
              {clinicSpecialties.map((spec, idx) => (
                <div key={idx} className="rounded-xl border p-4 bg-white shadow-xs">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{spec.name}</h4>
                  <p className="text-base text-gray-600 leading-relaxed font-medium">{spec.desc}</p>
                </div>
              ))}
            </section>

            {/* Empty State Directory */}
            <section className="rounded-2xl border-2 border-dashed bg-slate-50/50 p-8 text-center">
              <Building2 className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Clinic Profiles Under Review</h3>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-medium">
                Verified clinic profiles will be added as they complete our review process.
                We independently verify Ministry of Health permits and professional licenses
                before adding clinic listings.
              </p>
              <div className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700 border">
                Verification Protocol Active
              </div>
            </section>

            {/* Important tips */}
            <section className="border-t pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Selection Checklist</h3>
              <ul className="space-y-2 text-base text-gray-700 list-disc pl-4 font-medium">
                <li>Check if the clinic&apos;s lead specialist has completed fellowships in recognized international institutions.</li>
                <li>Verify that the clinic uses name-brand materials with international warranty support.</li>
                <li>Inquire whether emergency procedures are coordinated with a nearby full-service hospital.</li>
              </ul>
            </section>

            <MedicalDisclaimer />
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-xl border bg-slate-50 p-6 sticky top-24 space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                  Independent Review
                </h4>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  We do not accept paid listings to alter search ranks. Facility profiles are compiled based on objective registry criteria.
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
