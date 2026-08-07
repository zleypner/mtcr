import type { Metadata } from "next";
import { Mail, Clock, Globe, Info } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Contact Information | Smart Medical Tourism",
  description: "Find contact information and resources for Smart Medical Tourism. We provide educational guides for medical travel in Costa Rica.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbsItems = [
    { label: "Company", href: "/about" },
    { label: "Contact", href: "/contact" },
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
          <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contact Information
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
            Smart Medical Tourism is an educational resource for patients researching
            medical travel options in Latin America.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm space-y-8">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 shrink-0">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About This Site</h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  This website provides independent, educational information about medical tourism
                  in Costa Rica and Latin America. We do not provide medical consultations,
                  bookings, or act as intermediaries between patients and healthcare providers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 shrink-0">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Resources Available</h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  Browse our comprehensive guides on treatment costs, hospital evaluations,
                  doctor credential verification, and travel logistics. All information is
                  provided for educational purposes to help you make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  We are currently expanding our directory of verified healthcare providers.
                  Contact functionality will be available in a future update. In the meantime,
                  please use the educational resources available throughout the site.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
