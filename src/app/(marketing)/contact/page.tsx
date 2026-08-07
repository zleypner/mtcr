import type { Metadata } from "next";
import { Mail, HelpCircle } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Contact Us & Inquiry Registry | Smart Medical Tourism",
  description: "Connect with our support team or request details about healthcare providers, travel guidelines, and cost calculators in Costa Rica.",
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
            Contact Support & Inquiries
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Submit general questions regarding travel logistics, check registry verification steps, 
            or suggest local clinics in Costa Rica.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-3xl">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
