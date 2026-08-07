import type { Metadata } from "next";
import Link from "next/link";
import { 
  UserCheck, ShieldCheck, HeartHandshake, CheckCircle2, ChevronRight, 
  MapPin, HelpCircle, FileSearch, ArrowRight
} from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Doctors & Surgeons in Costa Rica | Verification Guide",
  description: "Learn how to verify the credentials and board certifications of surgeons in Costa Rica. View Colegio de Médicos validation steps.",
  path: "/doctors",
});

const verificationSteps = [
  {
    title: "Verify Active License",
    description: "Check the doctor's status in the registry of the Colegio de Médicos y Cirujanos de Costa Rica to ensure their license is active.",
  },
  {
    title: "Confirm Specialty Board",
    description: "Ensure the physician is registered as a specialist in the specific field (e.g., Plastic & Reconstructive Surgery, Implantology).",
  },
  {
    title: "Verify Fellowship Details",
    description: "Inquire about where they completed their medical residency and specialty training, noting if they hold international board memberships.",
  }
];

export default function DoctorsPage() {
  const breadcrumbsItems = [
    { label: "Providers", href: "/hospitals" },
    { label: "Doctors", href: "/doctors" },
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
          <UserCheck className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Verifying Medical Specialists
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Guidance on auditing doctor credentials, board certifications, and professional registries 
            prior to booking treatment in Costa Rica.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Board Certification & Registry Audits</h2>
              <p className="text-gray-600 leading-relaxed">
                A common misconception is that all practicing doctors in medical tourism hold US board 
                certifications. While many complete fellowships or training in the US, Europe, or Canada, 
                their primary license and board certification will be registered in the country where they 
                practice. In Costa Rica, this is governed by the <strong>Colegio de Médicos y Cirujanos</strong>.
              </p>
            </section>

            {/* Steps Grid */}
            <section className="grid gap-6 sm:grid-cols-3">
              {verificationSteps.map((step, idx) => (
                <div key={idx} className="rounded-xl border p-4 bg-white shadow-xs">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed font-medium">{step.description}</p>
                </div>
              ))}
            </section>

            {/* Empty State Directory */}
            <section className="rounded-2xl border-2 border-dashed bg-slate-50/50 p-8 text-center">
              <UserCheck className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Doctor Profiles Under Review</h3>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-medium">
                Verified physician and specialist profiles will be added as they complete our review process.
                We do not list specialists without verifying registry codes and board credentials.
              </p>
              <div className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700 border">
                Verification Protocol Active
              </div>
            </section>

            {/* Registry Info */}
            <section className="border-t pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Understanding Medical Titles</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4 font-medium">
                Verify that your surgeon&apos;s title explicitly states &quot;Especialista&quot; in the field of interest,
                as general medical practitioners are not legally certified to perform complex aesthetic
                or orthopedic surgeries. Independent public registries are accessible online to search
                active physician codes in Costa Rica.
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
                  Independent Registry Check
                </h4>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  Patients are advised to use the public directories of Colegio de Médicos to verify any specialist credentials directly.
                </p>
              </div>
                          </div>
          </div>

        </div>
      </div>
    </>
  );
}
