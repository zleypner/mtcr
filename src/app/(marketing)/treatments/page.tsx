import type { Metadata } from "next";
import Link from "next/link";
import {
  Smile,
  Sparkles,
  Bone,
  Heart,
  Scale,
  Baby,
  Eye,
  Stethoscope,
  Microscope,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { JsonLd } from "@/components/seo";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Medical Treatments in Latin America | Procedures & Cost Info",
  description:
    "Explore educational guides on medical treatments in Latin America. Dental, cosmetic surgery, orthopedic, cardiac, bariatric, fertility, and more. Compare potential savings.",
  keywords: [
    "medical treatments latin america",
    "procedures latam",
    "surgery mexico",
    "dental costa rica",
    "plastic surgery colombia",
    "medical tourism brazil",
  ],
  openGraph: {
    title: "Medical Treatments in Latin America",
    description:
      "Explore educational guides on medical treatments in Latin America. Compare options, safety credentials, and planning resources.",
    url: `${siteConfig.url}/treatments`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/treatments`,
  },
};

const treatmentCategories = [
  {
    name: "Dental",
    slug: "dental",
    description:
      "Implants, veneers, crowns, root canals, and full-mouth restorations from top dentists across Latin America.",
    procedures: [
      "Dental Implants",
      "Veneers",
      "Crowns",
      "Teeth Whitening",
      "Root Canal",
    ],
    icon: Smile,
    savings: "50-70%",
  },
  {
    name: "Cosmetic Surgery",
    slug: "cosmetic",
    description:
      "Rhinoplasty, facelifts, breast augmentation, liposuction, and body contouring by board-certified surgeons.",
    procedures: [
      "Rhinoplasty",
      "Breast Augmentation",
      "Liposuction",
      "Tummy Tuck",
      "Facelift",
    ],
    icon: Sparkles,
    savings: "40-60%",
  },
  {
    name: "Orthopedic",
    slug: "orthopedic",
    description:
      "Knee and hip replacement, spine surgery, sports medicine, and joint procedures at JCI-accredited hospitals.",
    procedures: [
      "Knee Replacement",
      "Hip Replacement",
      "Spine Surgery",
      "Rotator Cuff",
      "ACL Repair",
    ],
    icon: Bone,
    savings: "50-65%",
  },
  {
    name: "Cardiac",
    slug: "cardiac",
    description:
      "Heart surgery, angioplasty, bypass, valve replacement, and cardiac diagnostics by experienced cardiologists.",
    procedures: [
      "Angioplasty",
      "Bypass Surgery",
      "Valve Replacement",
      "Pacemaker",
      "Heart Catheterization",
    ],
    icon: Heart,
    savings: "45-60%",
  },
  {
    name: "Bariatric",
    slug: "bariatric",
    description:
      "Gastric sleeve, gastric bypass, LAP-BAND, and comprehensive weight loss surgery programs.",
    procedures: [
      "Gastric Sleeve",
      "Gastric Bypass",
      "LAP-BAND",
      "Duodenal Switch",
      "Revision Surgery",
    ],
    icon: Scale,
    savings: "50-70%",
  },
  {
    name: "Fertility",
    slug: "fertility",
    description:
      "IVF, egg freezing, IUI, and comprehensive reproductive treatments with high success rates.",
    procedures: ["IVF", "Egg Freezing", "IUI", "ICSI", "Egg Donation"],
    icon: Baby,
    savings: "40-60%",
  },
  {
    name: "Ophthalmology",
    slug: "ophthalmology",
    description:
      "LASIK, cataract surgery, glaucoma treatment, and vision correction by experienced eye surgeons.",
    procedures: [
      "LASIK",
      "Cataract Surgery",
      "Glaucoma Treatment",
      "Corneal Transplant",
      "PRK",
    ],
    icon: Eye,
    savings: "50-65%",
  },
  {
    name: "General Surgery",
    slug: "general-surgery",
    description:
      "Hernia repair, gallbladder removal, appendectomy, and other general surgical procedures.",
    procedures: [
      "Hernia Repair",
      "Gallbladder Removal",
      "Appendectomy",
      "Colonoscopy",
      "Endoscopy",
    ],
    icon: Stethoscope,
    savings: "45-60%",
  },
  {
    name: "Diagnostics",
    slug: "diagnostics",
    description:
      "MRI, CT scans, lab work, health screenings, and comprehensive medical check-ups.",
    procedures: ["MRI", "CT Scan", "Ultrasound", "Lab Work", "Health Checkup"],
    icon: Microscope,
    savings: "60-80%",
  },
  {
    name: "Wellness",
    slug: "wellness",
    description:
      "Stem cell therapy, anti-aging treatments, detox programs, and holistic wellness retreats.",
    procedures: [
      "Stem Cell Therapy",
      "Anti-Aging",
      "Detox Programs",
      "IV Therapy",
      "Wellness Retreat",
    ],
    icon: Leaf,
    savings: "40-60%",
  },
];

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Medical Treatments in Latin America",
  description:
    "Comprehensive guide to medical treatments available across Latin America for international patients.",
  url: `${siteConfig.url}/treatments`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: treatmentCategories.map((cat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: cat.name,
      url: `${siteConfig.url}/treatments/${cat.slug}`,
    })),
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Medical Treatments in Latin America
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore medical procedures and compare options.
              Access provider credentials, doctor certifications, and
              planning resources focused on patient safety in Costa Rica and beyond.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-blue-60 px-4 py-2 text-sm font-medium text-blue-10">
                <span>Potential Savings</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-blue-60 px-4 py-2 text-sm font-medium text-blue-10">
                <span>Credential Information</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-blue-60 px-4 py-2 text-sm font-medium text-blue-10">
                <span>Costa Rica Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories Grid */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatmentCategories.map((category) => (
              <article
                key={category.slug}
                className="group relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-60">
                    <category.icon className="h-6 w-6 text-blue-10" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-60 px-2.5 py-0.5 text-xs font-medium text-blue-10">
                    Typical Savings: {category.savings}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  {category.name}
                </h2>

                <p className="mt-2 flex-1 text-sm text-gray-500">
                  {category.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Popular Procedures
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {category.procedures.slice(0, 3).map((procedure) => (
                      <span
                        key={procedure}
                        className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                      >
                        {procedure}
                      </span>
                    ))}
                    {category.procedures.length > 3 && (
                      <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                        +{category.procedures.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/treatments/${category.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  View {category.name} Treatments
                  <ArrowRight className="ml-1 h-4 w-4 text-blue-10 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Latin America for Medical Treatment */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Evaluate Latin America for Medical Treatment?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Many countries in Latin America offer modern private medical infrastructure catering to international patients.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-60">
                <span className="text-2xl font-bold text-blue-10">40%+</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Cost Savings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Potential cost reductions of 40-70% depending on the procedure and destination
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-60">
                <span className="text-2xl font-bold text-blue-10">JCI</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Quality Credentials
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Explore JCI-accredited and internationally credentialed hospitals
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-60">
                <span className="text-2xl font-bold text-blue-10">CR</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Costa Rica Focus</h3>
              <p className="mt-1 text-sm text-gray-500">
                First destination hub with curated resource guides
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-60">
                <span className="text-2xl font-bold text-blue-10">Safe</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Patient Resources
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Information resources to support independent research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="mt-4 text-white/90">
              Our medical tourism experts can help you find the right treatment
              and connect you with verified providers across Latin America.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full sm:w-auto"
                )}
              >
                Get Free Consultation
              </Link>
              <Link
                href="/guides/getting-started"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto"
                )}
              >
                Read Our Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
