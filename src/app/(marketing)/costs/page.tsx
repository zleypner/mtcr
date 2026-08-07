import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calculator, DollarSign, AlertCircle, FileSearch, ArrowRight, 
  HelpCircle, Building2, ShieldCheck, CheckCircle2, ClipboardList
} from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Treatment Costs & Savings in Costa Rica",
  description: "Compare medical and dental costs in Costa Rica vs US/Canada. Understand price factors including hospital fees, materials, and travel costs.",
  path: "/costs",
});

const costComparisons = [
  { procedure: "Single Dental Implant", usCost: 4500, crCost: 1200, savings: 73 },
  { procedure: "All-on-4® Dental Implants", usCost: 24000, crCost: 10500, savings: 56 },
  { procedure: "Rhinoplasty (Nose Surgery)", usCost: 9000, crCost: 4500, savings: 50 },
  { procedure: "Breast Augmentation (Implants)", usCost: 8500, crCost: 3800, savings: 55 },
  { procedure: "Gastric Sleeve Surgery", usCost: 15000, crCost: 6500, savings: 56 },
  { procedure: "Knee Joint Replacement", usCost: 28000, crCost: 11000, savings: 60 }
];

export default function CostsPage() {
  const breadcrumbsItems = [
    { label: "Resources", href: "/faq" },
    { label: "Treatment Costs", href: "/costs" },
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
          <Calculator className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Understanding Treatment Costs
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Review estimated cost comparisons, identify pricing factors, and understand 
            budget planning parameters for medical travel in Costa Rica.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Disclaimer Alert */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-xs text-blue-800 flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Pricing Notice & Estimates Policy</span>
                <p className="leading-relaxed">
                  All costs, ranges, and comparison figures displayed below represent historical estimates 
                  and averages for private healthcare in Costa Rica. They are not final quotes. 
                  Actual patient pricing depends on surgeon consultations, clinical diagnostics, 
                  material specifications (implant brands), and individual medical status.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Costa Rica vs US / Canada Cost Estimates</h2>
              <p className="text-sm text-slate-500">
                Values represent typical ranges in USD updated as of August 2026.
              </p>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-left text-sm text-gray-600 border-collapse">
                  <thead className="bg-slate-50 text-xs font-semibold text-gray-700 border-b">
                    <tr>
                      <th className="p-4">Procedure</th>
                      <th className="p-4">US/Canada Avg</th>
                      <th className="p-4">Costa Rica Est</th>
                      <th className="p-4 text-green-700">Potential Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {costComparisons.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-semibold text-gray-900">{item.procedure}</td>
                        <td className="p-4 text-slate-500">${item.usCost.toLocaleString()}</td>
                        <td className="p-4 text-gray-900 font-semibold">${item.crCost.toLocaleString()}</td>
                        <td className="p-4 text-green-600 font-bold">~{item.savings}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cost Factors list */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">What Determines Your Total Budget?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                When budgeting for medical tourism, consider all components rather than the surgical procedure alone:
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border p-5">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-1.5">
                    <ClipboardList className="h-4.5 w-4.5 text-primary shrink-0" />
                    Clinical Expenses
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 list-disc pl-4">
                    <li>Surgeon, surgical assistant, and anesthesiologist fees.</li>
                    <li>Surgical facility or hospital overnight admission charges.</li>
                    <li>Pre-op blood tests, electrocardiograms, and diagnostic imaging.</li>
                    <li>Prosthetics or hardware brands (e.g., implant posts, screws).</li>
                    <li>Post-discharge follow-up care visits and medications.</li>
                  </ul>
                </div>
                <div className="rounded-xl border p-5">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                    Logistics & Travel Expenses
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 list-disc pl-4">
                    <li>Round-trip airfare for the patient and optional companion.</li>
                    <li>Lodging during the recovery timeline (minimum stays required).</li>
                    <li>Daily transportation shuttles between airport, hotel, and clinic.</li>
                    <li>Meals, recovery supplies, and follow-up clinical support.</li>
                  </ul>
                </div>
              </div>
            </section>

            <MedicalDisclaimer />
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-xl border bg-slate-50 p-6 sticky top-24 space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                  <DollarSign className="h-4.5 w-4.5 text-green-600" />
                  Transparency First
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We assist patients in understanding the structures of medical invoicing. Always request itemized estimates from clinics prior to travel.
                </p>
              </div>
              <div className="border-t pt-4">
                <Link href="/contact" className={cn(buttonVariants(), "w-full text-center")}>
                  Request Price Estimates
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
