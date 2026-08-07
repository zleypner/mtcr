"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is medical tourism in Latin America safe?",
    answer:
      "Safety depends on the specific country, facility, and provider. Many clinics and hospitals in Latin America adhere to high international standards and employ specialists trained globally. Patients should independently verify facility accreditations (such as JCI) and physician credentials prior to booking any medical travel.",
  },
  {
    question: "How much can I save compared to US prices?",
    answer:
      "Patients often observe potential cost reductions of 40-70% on procedures compared to US private healthcare costs, although final prices vary by treatment type, materials used, and travel expenses. These cost differences are primarily due to lower operating overhead, malpractice insurance, and administrative costs in Latin American countries.",
  },
  {
    question: "Do doctors in Latin America speak English?",
    answer:
      "Many doctors and specialists who treat international patients speak English fluently, and many have completed fellowships or training in the US, Canada, or Europe. Additionally, clinics that cater to international medical travelers often employ bilingual patient coordinators.",
  },
  {
    question: "What is JCI accreditation?",
    answer:
      "JCI (Joint Commission International) accreditation is a widely recognized global credential that assesses healthcare facilities on patient safety, treatment quality, and operational standards. Several premier hospitals in Costa Rica and Latin America maintain active JCI accreditations.",
  },
  {
    question: "Which country should I choose for my procedure?",
    answer:
      "The choice depends on the treatment category and individual logistics. Costa Rica is highly regarded for dental implants and cosmetic surgery due to its proximity and developed private health sector. Mexico and Colombia are also popular destinations for other specialized procedures. We recommend consulting with qualified professionals to discuss your options.",
  },
  {
    question: "Will my US insurance cover treatment abroad?",
    answer:
      "Standard domestic insurance plans rarely cover elective procedures performed outside the United States. A few premium international policies or employer-sponsored plans may include cross-border coverage. It is essential to contact your insurer to verify benefits before making plans.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get answers to common questions about medical tourism in Latin America.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="divide-y divide-gray-200 rounded-xl bg-white shadow-sm">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-5 text-base text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
