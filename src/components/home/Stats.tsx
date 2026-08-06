const stats = [
  {
    value: "50-70%",
    label: "Average Savings",
    description: "Compared to US prices",
  },
  {
    value: "10+",
    label: "JCI Accredited Hospitals",
    description: "Meeting international standards",
  },
  {
    value: "200,000+",
    label: "Medical Tourists Yearly",
    description: "Choose Costa Rica for care",
  },
  {
    value: "#1",
    label: "In Latin America",
    description: "For medical tourism",
  },
];

export function Stats() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-lg font-semibold text-white/90">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-white/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
