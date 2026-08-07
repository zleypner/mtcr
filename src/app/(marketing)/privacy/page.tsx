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
          <p className="text-base text-gray-700 font-medium leading-relaxed mb-4">
            We use cookies to improve your experience and analyze site traffic. You can manage your
            cookie preferences through the consent banner displayed when you first visit our site.
          </p>

          <h4 className="text-base font-bold text-gray-900 mt-4 mb-2">Cookies We Use</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-slate-200 rounded-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Cookie Name</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Purpose</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Duration</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b font-mono text-xs">cookie_consent</td>
                  <td className="px-4 py-2 border-b">Stores your cookie consent preference</td>
                  <td className="px-4 py-2 border-b">1 year</td>
                  <td className="px-4 py-2 border-b">Essential</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-mono text-xs">_ga</td>
                  <td className="px-4 py-2 border-b">Google Analytics - distinguishes unique users</td>
                  <td className="px-4 py-2 border-b">2 years</td>
                  <td className="px-4 py-2 border-b">Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-mono text-xs">_ga_*</td>
                  <td className="px-4 py-2 border-b">Google Analytics - maintains session state</td>
                  <td className="px-4 py-2 border-b">2 years</td>
                  <td className="px-4 py-2 border-b">Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-base text-gray-700 font-medium leading-relaxed mt-4">
            <strong>Analytics cookies</strong> are only set after you click &quot;Accept&quot; on our cookie consent banner.
            If you decline, no analytics cookies will be placed on your device. We use Google Analytics with
            IP anonymization enabled, meaning your full IP address is never stored.
          </p>

          <h4 className="text-base font-bold text-gray-900 mt-4 mb-2">Managing Your Preferences</h4>
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            You can change your cookie preferences at any time by clearing your browser cookies and
            revisiting our site. You can also configure your browser to block or delete cookies entirely.
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
