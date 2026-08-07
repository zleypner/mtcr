import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldAlert, ArrowLeft } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

interface HospitalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: HospitalPageProps): Promise<Metadata> {
  const { slug } = await params;
  return helperGenerateMetadata({
    title: "Hospital Profile Verification | Smart Medical Tourism",
    description: "This facility profile is currently undergoing credential verification. We audit Ministry of Health registrations and JCI listings.",
    path: `/hospitals/${slug}`,
    noIndex: true,
  });
}

export default async function HospitalSlugPage({ params }: HospitalPageProps) {
  const { slug } = await params;
  
  const breadcrumbsItems = [
    { label: "Providers", href: "/hospitals" },
    { label: "Hospitals", href: "/hospitals" },
    { label: "Verification Status", href: `/hospitals/${slug}` },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <div className="container max-w-2xl py-16 sm:py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border mb-6">
          <Building2 className="h-8 w-8 text-primary" />
        </div>
        <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
          Registry Verification Pending
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Profile Verification in Progress
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          The requested medical facility profile for <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">{slug}</code> is currently 
          undergoing credentials audit by our editorial board. We verify licenses, Ministry of Health filing codes, 
          and JCI active statuses before publishing provider records.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/hospitals" className={buttonVariants()}>
            Browse Hospitals Guide
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Submit Inquiry
          </Link>
        </div>
      </div>
    </>
  );
}
