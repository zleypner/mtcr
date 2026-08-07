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
    color: "blue",
  },
  {
    title: "No Wait Times",
    description:
      "Schedule your procedure within days or weeks, not months. Get treated when you need it.",
    icon: Clock,
    color: "green",
  },
  {
    title: "US/EU Trained Doctors",
    description:
      "Many Costa Rican surgeons trained at top institutions in the United States and Europe.",
    icon: GraduationCap,
    color: "red",
  },
  {
    title: "English Spoken",
    description:
      "Medical staff fluent in English. Bilingual coordinators assist throughout your care journey.",
    icon: Globe,
    color: "blue",
  },
  {
    title: "Stable & Safe Country",
    description:
      "No military since 1948. Stable democracy with high literacy rate and excellent healthcare system.",
    icon: Heart,
    color: "red",
  },
  {
    title: "JCI Accredited Hospitals",
    description:
      "3 hospitals meet Joint Commission International standards—the same as top US hospitals.",
    icon: ShieldCheck,
    color: "green",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
  },
};

export function WhyCostaRica() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Why Choose Costa Rica?
          </h2>
          <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
            Costa Rica is the top medical tourism destination in Central America,
            combining world-class healthcare with natural beauty and affordability.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const colors = colorClasses[reason.color as keyof typeof colorClasses];
            return (
              <div
                key={reason.title}
                className="flex flex-col items-center text-center rounded-2xl bg-white p-8 shadow-sm"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl ${colors.bg}`}
                >
                  <reason.icon className={`h-8 w-8 ${colors.icon}`} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-3 text-xl text-gray-700 font-medium leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
