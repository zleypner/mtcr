import {
  Plane,
  Clock,
  GraduationCap,
  Globe,
  TreePalm,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "3-Hour Flight from US",
    description:
      "Direct flights from major US cities. Same timezone as Central US makes communication easy.",
    icon: Plane,
  },
  {
    title: "No Wait Times",
    description:
      "Schedule your procedure within days or weeks, not months. Get treated when you need it.",
    icon: Clock,
  },
  {
    title: "US/EU Trained Doctors",
    description:
      "Many surgeons trained at top institutions in the United States, Europe, and Canada.",
    icon: GraduationCap,
  },
  {
    title: "English Widely Spoken",
    description:
      "Medical staff fluent in English. Clear communication throughout your care journey.",
    icon: Globe,
  },
  {
    title: "Recovery Paradise",
    description:
      "Recover in a tropical setting. Combine your procedure with a relaxing vacation.",
    icon: TreePalm,
  },
  {
    title: "Safe & Stable",
    description:
      "Costa Rica is the safest country in Central America with a stable democracy since 1949.",
    icon: ShieldCheck,
  },
];

export function WhyCostaRica() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Costa Rica?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Costa Rica has become a premier destination for medical tourism,
            combining affordable world-class healthcare with natural beauty.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
