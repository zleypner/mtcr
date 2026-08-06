"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is medical tourism in Costa Rica safe?",
    answer:
      "Yes, Costa Rica is one of the safest destinations for medical tourism. The country has multiple JCI-accredited hospitals (the gold standard for international healthcare), US and EU-trained physicians, and a stable democracy with excellent infrastructure. Costa Rica consistently ranks as the safest country in Central America.",
  },
  {
    question: "How much can I save compared to US prices?",
    answer:
      "Patients typically save 50-70% on medical procedures compared to US prices, even when including travel and accommodation costs. For example, dental implants that cost $4,000-$5,000 in the US typically cost $800-$1,500 in Costa Rica. The savings are due to lower operating costs, not lower quality.",
  },
  {
    question: "Do doctors in Costa Rica speak English?",
    answer:
      "Yes, most doctors and medical staff at international hospitals speak fluent English. Many Costa Rican physicians trained in the United States, Canada, or Europe. Clinics catering to medical tourists typically have bilingual staff throughout the facility.",
  },
  {
    question: "What is JCI accreditation?",
    answer:
      "JCI (Joint Commission International) accreditation is the gold standard for healthcare quality worldwide. It evaluates hospitals on patient safety, quality of care, and medical standards. Costa Rica has over 10 JCI-accredited facilities, more than most Latin American countries.",
  },
  {
    question: "How long should I stay for my procedure?",
    answer:
      "The recommended stay depends on your procedure. Dental work may require 5-7 days, while surgeries typically require 7-14 days for initial recovery. Your doctor will provide specific guidance. Many patients combine their medical trip with a vacation before or after their procedure.",
  },
  {
    question: "Will my US insurance cover treatment in Costa Rica?",
    answer:
      "Most US insurance plans do not cover elective procedures abroad. However, some insurers are beginning to offer medical tourism benefits. Even paying out-of-pocket, the total cost (procedure + travel + hotel) is often less than the US copay alone. We recommend checking with your insurance provider.",
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
            Get answers to common questions about medical tourism in Costa Rica.
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
                  <span className="text-base font-medium text-gray-900 pr-4">
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
                  <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
