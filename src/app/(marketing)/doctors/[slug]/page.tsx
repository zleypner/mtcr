import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck, ShieldAlert } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

interface DoctorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  return helperGenerateMetadata({
    title: "Specialist Profile Verification | Smart Medical Tourism",
    description: "This specialist profile is currently undergoing credentials review. We verify board registrations with Colegio de Médicos.",
    path: `/doctors/${slug}`,
    noIndex: true,
  });
}

export default async function DoctorSlugPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  
  const breadcrumbsItems = [
    { label: "Providers", href: "/hospitals" },
    { label: "Doctors", href: "/doctors" },
    { label: "Verification Status", href: `/doctors/${slug}` },
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
          <UserCheck className="h-8 w-8 text-primary" />
        </div>
        <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
          Specialist Audit Pending
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Specialist Profile Verification
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          The specialist record for <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">{slug}</code> is 
          undergoing verification. We check license listings with the Colegio de Médicos y Cirujanos de Costa Rica and 
          verify national specialty credentials before publication.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/doctors" className={buttonVariants()}>
            Browse Specialists Guide
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Submit Inquiry
          </Link>
        </div>
      </div>
    </>
  );
}
