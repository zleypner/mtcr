import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight, Shield, Award, DollarSign, Calendar, Clock, HeartHandshake, CheckCircle2, AlertTriangle, 
  HelpCircle, ChevronRight, MapPin, ClipboardList, Stethoscope, Compass
} from "lucide-react";
import { treatmentsData } from "@/lib/data/treatments";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo";
import { generateFAQSchema } from "@/lib/schema";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((key) => ({
    category: key,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const data = treatmentsData[category];

  if (!data) {
    return {
      title: "Category Not Found",
    };
  }

  return helperGenerateMetadata({
    title: `${data.name} in Costa Rica | Costs & Guides`,
    description: `Complete patient guide for ${data.name.toLowerCase()} in Costa Rica. Save up to 70% at credentialed private clinics in San José & Escazú.`,
    path: `/treatments/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const data = treatmentsData[category];

  if (!data) {
    notFound();
  }

  const breadcrumbsItems = [
    { label: "Treatments", href: "/treatments" },
    { label: data.name, href: `/treatments/${category}` },
  ];

  const faqSchemaData = generateFAQSchema(data.faqs);

  return (
    <>
      <JsonLd data={faqSchemaData} />
      
      {/* Header Breadcrumbs */}
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-white py-16 sm:py-24 border-b">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-4 uppercase tracking-wider">
              {data.name} Specialization
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {data.name} in <span className="text-primary">Costa Rica</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Access high-quality medical procedures in Latin America&apos;s leading private healthcare hub. 
              Find certified doctors and modern clinics in San José and Escazú.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Request Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/costs" className={buttonVariants({ variant: "outline", size: "lg" })}>
                View Estimated Costs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-12 sm:space-y-16">
            
            {/* Overview Description */}
            <section className="prose max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Overview of {data.name}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {data.description}
              </p>
            </section>

            {/* Procedures Grid */}
            <section>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b pb-4 mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Popular Procedures & Treatments
                </h2>
                <span className="text-sm text-slate-500 mt-1 md:mt-0 font-medium">
                  {data.procedures.length} procedures available
                </span>
              </div>
              <div className="grid gap-6">
                {data.procedures.map((proc) => (
                  <div 
                    key={proc.slug}
                    className="group flex flex-col justify-between rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                        {proc.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {proc.description}
                      </p>
                      
                      <div className="grid gap-3 sm:grid-cols-3 text-xs bg-slate-50 rounded-lg p-3.5 mb-4 border">
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                          <span><strong>Recovery:</strong> {proc.recovery}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Stethoscope className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                          <span><strong>Stay:</strong> {proc.hospitalStay}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <DollarSign className="h-4 w-4 text-slate-400 mr-1.5 shrink-0" />
                          <span><strong>Typical Cost:</strong> {proc.costRange}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t pt-4 mt-2">
                      <span className="text-xs text-muted-foreground">Estimated ranges only</span>
                      <Link 
                        href={`/treatments/${category}/${proc.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                      >
                        Read Procedure Guide
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Latin America / Costa Rica */}
            <section className="bg-slate-50 rounded-2xl border p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                Why Consider Latin America for {data.name}?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {data.whyLATAM}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">International Credentials</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Top facilities in Costa Rica maintain active JCI and local certifications.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <DollarSign className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Substantial Cost Savings</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Save typical amounts of 40-70% depending on surgical materials and complexity.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Factors & Package Details */}
            <section className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary shrink-0" />
                  Cost Factors
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {data.costFactors.map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary shrink-0" />
                  Typical Package Inclusions
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {data.packageIncludes.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Choosing & Questions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Evaluating Clinicians & Facilities
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 border rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 text-sm mb-3">How to Select a Provider:</h4>
                  <ol className="list-decimal pl-4 space-y-2 text-xs text-gray-600">
                    {data.howToChoose.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="bg-slate-50 border rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 text-sm mb-3">Questions to Ask During Consultation:</h4>
                  <ul className="list-disc pl-4 space-y-2 text-xs text-gray-600">
                    {data.questionsToAsk.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Preparation & Recovery */}
            <section className="border-t pt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  Travel Preparation Guidelines
                </h3>
                <ol className="list-decimal pl-4 space-y-2 text-sm text-gray-600">
                  {data.preparation.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-primary shrink-0" />
                  Recovery & Follow-up Care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {data.recoveryGuideline}
                </p>
              </div>
            </section>

            {/* Risks & Considerations */}
            <section className="bg-red-50/50 border border-red-200 rounded-xl p-5 text-sm text-red-800">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 mb-1">Risks & Safety Considerations</h4>
                  <p className="mb-3">
                    As with any surgical or medical procedure, there are inherent risks. It is vital to consult with 
                    physicians at home and in Costa Rica to discuss potential complications:
                  </p>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs text-red-700">
                    {data.risks.map((risk, idx) => (
                      <li key={idx}>{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs Accordion */}
            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                Frequently Asked Questions
              </h2>
              <Accordion className="w-full">
                {data.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900 py-3.5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Related Treatment Links */}
            <section className="border-t pt-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Related Specialty Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.relatedCategories.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/treatments/${rel.slug}`}
                    className="inline-flex items-center rounded-lg border bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:bg-slate-50 hover:text-primary hover:border-slate-300"
                  >
                    {rel.name}
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Bottom Disclaimer */}
            <MedicalDisclaimer />

          </div>

          {/* Sidebar Info Panel */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-slate-50 p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                Costa Rica Destinations
              </h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Initial provider directories are located in these premium districts:
              </p>
              <div className="space-y-3">
                {data.destinations.map((dest) => {
                  const destSlug = dest.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  return (
                    <Link
                      key={dest}
                      href={`/cities/${destSlug}`}
                      className="group flex items-center justify-between rounded-lg border bg-white p-3 text-sm font-semibold text-gray-700 transition-all hover:text-primary hover:border-slate-300 shadow-xs"
                    >
                      <span>{dest} Guide</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  );
                })}
              </div>

              <div className="border-t mt-6 pt-6">
                <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Verifiable Standards
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We display credentials including Ministry of Health filings and JCI statuses, facilitating independent research.
                </p>
              </div>

              <div className="border-t mt-6 pt-6">
                <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  First-Phase Focus
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Smart Medical Tourism features Costa Rica clinics exclusively in the launch phase. Mexico and Colombia expansions will proceed subsequently.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20 border-t">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 border border-white/10 px-8 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Discuss Treatment Logistics in Costa Rica
            </h2>
            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
              Connect with local coordinators to learn about credentials, facility details, and accommodation logistics in San José and Escazú.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Submit General Inquiry
              </Link>
              <Link href="/faq" className={buttonVariants({ variant: "outline", size: "lg" }) + " border-white text-white hover:bg-white hover:text-primary"}>
                Browse Patient FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
