"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is medical tourism in Costa Rica safe?",
    answer:
      "Costa Rica is considered one of the safest medical tourism destinations in Latin America. The country has 3 JCI-accredited hospitals meeting international standards, a stable democracy since 1948, and many doctors trained in the US and Europe. We recommend verifying facility accreditations and physician credentials before booking.",
  },
  {
    question: "How much can I save on procedures in Costa Rica?",
    answer:
      "Patients typically save 40-70% compared to US prices. For example, a dental implant costing $3,000-5,000 in the US costs $800-1,800 in Costa Rica. These savings come from lower operating costs, not lower quality—Costa Rica uses the same implant brands and technology as US facilities.",
  },
  {
    question: "Do doctors in Costa Rica speak English?",
    answer:
      "Yes, most doctors and specialists treating international patients speak fluent English. Many have completed training or fellowships in the United States, Canada, or Europe. Clinics also employ bilingual patient coordinators to assist throughout your care journey.",
  },
  {
    question: "What is JCI accreditation?",
    answer:
      "JCI (Joint Commission International) is the gold standard for international healthcare accreditation. Costa Rica has 3 JCI-accredited hospitals: Hospital CIMA, Clínica Bíblica, and Hospital Clínica Católica. These facilities meet the same safety and quality standards as top US hospitals.",
  },
  {
    question: "How long do I need to stay in Costa Rica?",
    answer:
      "Stay duration depends on your procedure. For dental work like crowns or veneers, 5-7 days is typical. For dental implants, plan 7-10 days for initial placement. For cosmetic surgery, 10-14 days allows proper healing before flying home. Your surgeon will advise on the specific timeline.",
  },
  {
    question: "Do I need a visa to travel to Costa Rica?",
    answer:
      "US, Canadian, and EU citizens do not need a visa for stays up to 90 days. You only need a valid passport. Costa Rica is just 3 hours from Miami with direct flights from most major US cities, making it one of the most accessible medical tourism destinations.",
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
            Get answers to common questions about medical tourism in Latin America.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="divide-y divide-gray-200 rounded-xl bg-white shadow-sm">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start justify-between px-8 py-6 text-left"
                >
                  <span className="text-2xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-7 w-7 shrink-0 text-gray-500 transition-transform duration-200 mt-1",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  )}
                >
                  <p className="px-8 pb-6 text-xl text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
