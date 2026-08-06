import { Search, CalendarCheck, Plane, HeartPulse } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Research & Choose",
    description:
      "Browse treatments, compare clinics, and read verified patient reviews. Our guides help you make informed decisions.",
    icon: Search,
  },
  {
    step: "02",
    title: "Get a Free Quote",
    description:
      "Connect with accredited clinics directly. Receive personalized treatment plans and transparent pricing.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Travel to Your Destination",
    description:
      "Book your flights and accommodations. Many clinics offer concierge services to help with logistics.",
    icon: Plane,
  },
  {
    step: "04",
    title: "Receive Treatment",
    description:
      "Get world-class care from board-certified specialists. Recover in comfort with personalized aftercare.",
    icon: HeartPulse,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your medical tourism journey made simple. From research to recovery,
            we guide you every step of the way.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-x-1/2 translate-y-1/2 bg-gray-200 lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
