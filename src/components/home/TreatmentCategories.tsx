import Link from "next/link";
import {
  Smile,
  Sparkles,
  Bone,
  Heart,
  Scale,
  Baby,
  Eye,
  ArrowRight,
} from "lucide-react";

const treatments = [
  {
    name: "Dental",
    description: "Implants, veneers, crowns, and full-mouth restorations",
    icon: Smile,
    href: "/treatments/dental",
    savings: "50-70%",
  },
  {
    name: "Cosmetic Surgery",
    description: "Rhinoplasty, facelifts, breast augmentation, liposuction",
    icon: Sparkles,
    href: "/treatments/cosmetic",
    savings: "40-60%",
  },
  {
    name: "Orthopedic",
    description: "Knee and hip replacement, spine surgery, sports medicine",
    icon: Bone,
    href: "/treatments/orthopedic",
    savings: "50-65%",
  },
  {
    name: "Cardiac",
    description: "Heart surgery, angioplasty, valve replacement",
    icon: Heart,
    href: "/treatments/cardiac",
    savings: "45-60%",
  },
  {
    name: "Bariatric",
    description: "Gastric sleeve, bypass, and weight loss procedures",
    icon: Scale,
    href: "/treatments/bariatric",
    savings: "50-70%",
  },
  {
    name: "Fertility",
    description: "IVF, egg freezing, and reproductive treatments",
    icon: Baby,
    href: "/treatments/fertility",
    savings: "40-60%",
  },
  {
    name: "Ophthalmology",
    description: "LASIK, cataract surgery, and vision correction",
    icon: Eye,
    href: "/treatments/ophthalmology",
    savings: "50-65%",
  },
];

export function TreatmentCategories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Popular Treatments
          </h2>
          <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
            Costa Rica offers world-class medical care at JCI-accredited hospitals.
            Save 40-70% vs. US prices with board-certified specialists.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <Link
              key={treatment.name}
              href={treatment.href}
              className="group relative rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-60">
                <treatment.icon className="h-8 w-8 text-blue-10" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {treatment.name}
              </h3>
              <p className="mt-3 text-xl text-gray-700 font-medium leading-relaxed">
                {treatment.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-blue-60 px-4 py-2 text-lg font-bold text-blue-10">
                  Save {treatment.savings}
                </span>
                <ArrowRight className="h-6 w-6 text-blue-30 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center text-xl font-bold text-primary hover:underline"
          >
            View all treatments
            <ArrowRight className="ml-2 h-6 w-6 text-blue-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
