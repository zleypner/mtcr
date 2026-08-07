import {
  Plane,
  Clock,
  GraduationCap,
  Globe,
  Heart,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "3 Hours from Miami",
    description:
      "Direct flights from major US cities. Same time zone as Central US makes communication easy.",
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
      "Many Costa Rican surgeons trained at top institutions in the United States and Europe.",
    icon: GraduationCap,
  },
  {
    title: "English Spoken",
    description:
      "Medical staff fluent in English. Bilingual coordinators assist throughout your care journey.",
    icon: Globe,
  },
  {
    title: "Stable & Safe Country",
    description:
      "No military since 1948. Stable democracy with high literacy rate and excellent healthcare system.",
    icon: Heart,
  },
  {
    title: "JCI Accredited Hospitals",
    description:
      "3 hospitals meet Joint Commission International standards—the same as top US hospitals.",
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
            Costa Rica is the top medical tourism destination in Central America,
            combining world-class healthcare with natural beauty and affordability.
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
