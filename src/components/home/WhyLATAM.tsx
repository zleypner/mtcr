import {
  Plane,
  Clock,
  GraduationCap,
  Globe,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Close to Home",
    description:
      "Direct flights from major US and Canadian cities. Convenient time zones make communication easy.",
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
    title: "English & Spanish",
    description:
      "Medical staff fluent in English and Spanish. Clear communication throughout your care journey.",
    icon: Globe,
  },
  {
    title: "Multiple Destinations",
    description:
      "Choose from Mexico, Costa Rica, Colombia, Brazil, Argentina, and more top medical destinations.",
    icon: MapPin,
  },
  {
    title: "Verified & Secure",
    description:
      "We verify all providers for credentials, safety standards, and patient satisfaction.",
    icon: ShieldCheck,
  },
];

export function WhyLATAM() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Why Choose Latin America?
          </h2>
          <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
            Latin America has become a premier destination for medical tourism,
            combining affordable world-class healthcare with diverse cultures and natural beauty.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{reason.title}</h3>
                <p className="mt-2 text-xl text-gray-700 font-medium leading-relaxed">
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
