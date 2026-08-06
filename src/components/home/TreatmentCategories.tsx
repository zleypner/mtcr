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
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    name: "Cosmetic Surgery",
    description: "Rhinoplasty, facelifts, breast augmentation, liposuction",
    icon: Sparkles,
    href: "/treatments/cosmetic",
    savings: "40-60%",
    color: "bg-pink-50 text-pink-600",
  },
  {
    name: "Orthopedic",
    description: "Knee and hip replacement, spine surgery, sports medicine",
    icon: Bone,
    href: "/treatments/orthopedic",
    savings: "50-65%",
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Cardiac",
    description: "Heart surgery, angioplasty, valve replacement",
    icon: Heart,
    href: "/treatments/cardiac",
    savings: "45-60%",
    color: "bg-red-50 text-red-600",
  },
  {
    name: "Bariatric",
    description: "Gastric sleeve, bypass, and weight loss procedures",
    icon: Scale,
    href: "/treatments/bariatric",
    savings: "50-70%",
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Fertility",
    description: "IVF, egg freezing, and reproductive treatments",
    icon: Baby,
    href: "/treatments/fertility",
    savings: "40-60%",
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Ophthalmology",
    description: "LASIK, cataract surgery, and vision correction",
    icon: Eye,
    href: "/treatments/ophthalmology",
    savings: "50-65%",
    color: "bg-blue-50 text-blue-600",
  },
];

export function TreatmentCategories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Treatments
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Latin America offers world-class medical care across all specialties.
            Find the treatment you need at a fraction of US costs.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <Link
              key={treatment.name}
              href={treatment.href}
              className="group relative rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${treatment.color}`}
              >
                <treatment.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {treatment.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {treatment.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  Save {treatment.savings}
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            View all treatments
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
