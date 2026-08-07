import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs, MedicalDisclaimer } from "@/components/shared";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Frequently Asked Questions | Medical Tourism Guides",
  description: "Browse categorized answers to questions about safety, costs, travel planning, medical credentials, and recovering in Costa Rica.",
  path: "/faq",
});

const faqCategories = [
  {
    title: "Safety & Credentials",
    faqs: [
      {
        question: "Is medical travel to Latin America safe?",
        answer: "Safety depends on the specific destination, clinic, and doctor. Many private medical facilities in Costa Rica adhere to high international standards and employ board-certified specialists. We recommend that patients independently verify facility accreditations (like JCI) and physician registrations before traveling."
      },
      {
        question: "How can I verify if a doctor in Costa Rica is board-certified?",
        answer: "You can check the doctor's status in the public registry of the Colegio de Médicos y Cirujanos de Costa Rica. This registry allows you to confirm that the physician holds an active license and is registered as a certified specialist in their specific field."
      }
    ]
  },
  {
    title: "Costs & Invoicing",
    faqs: [
      {
        question: "Why are procedures more affordable in Latin America?",
        answer: "Lower prices are primarily driven by reduced operating overhead, lower labor costs, cheaper real estate, and significantly lower malpractice insurance premiums for doctors. It is not an indicator of lower care standards or material quality."
      },
      {
        question: "Do clinics offer itemized invoices for insurance reimbursement?",
        answer: "Yes, reputable private clinics and hospitals providing care to international patients can supply detailed, itemized invoices. If you plan to submit a claim, verify in advance that invoices will be provided in English with standard ICD code sets."
      }
    ]
  },
  {
    title: "Travel & Logistics",
    faqs: [
      {
        question: "How long do I need to stay in Costa Rica after surgery?",
        answer: "The required stay depends on the complexity of the procedure. For dental crowns or veneers, 5-7 days is typical. For major plastic surgeries or joint replacements, surgeons recommend remaining in the country for 10-14 days to monitor healing and clear you to fly."
      },
      {
        question: "What is a recovery retreat and should I book one?",
        answer: "A recovery retreat is a specialized lodging facility designed for post-surgical patients. They typically feature nursing assistance, accessible accommodations, hospital-hotel shuttle transfers, and custom diets, making them highly recommended for initial recovery."
      }
    ]
  }
];

export default function FAQPage() {
  const breadcrumbsItems = [
    { label: "Resources", href: "/faq" },
    { label: "FAQ", href: "/faq" },
  ];

  // Flatten FAQs for schema generation
  const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
  const faqSchemaData = generateFAQSchema(allFaqs);

  return (
    <>
      <JsonLd data={faqSchemaData} />

      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      <section className="bg-gradient-to-b from-blue-50/50 to-white py-16 sm:py-24 border-b">
        <div className="container max-w-4xl text-center">
          <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions regarding credentials, cost estimates, travel planning, 
            and recovery in Costa Rica.
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="container max-w-3xl space-y-12">
          
          {faqCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                {category.title}
              </h2>
              <Accordion className="w-full">
                {category.faqs.map((faq, fIdx) => (
                  <AccordionItem key={fIdx} value={`item-${idx}-${fIdx}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900 py-3.5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
}
