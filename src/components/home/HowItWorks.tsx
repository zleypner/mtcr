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
    title: "Get Information",
    description:
      "Learn about accredited clinics and specialists. Review treatment details and understand what to expect.",
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
            Your medical tourism journey made simple. From research to recovery,
            we guide you every step of the way.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-14 hidden h-0.5 w-full -translate-x-1/2 translate-y-1/2 bg-gray-200 lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="mt-5 text-lg font-bold uppercase tracking-wider text-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xl text-gray-700 font-medium leading-relaxed">
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
