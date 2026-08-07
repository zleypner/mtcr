const stats = [
  {
    value: "40-70%",
    label: "Typical Cost Savings",
    description: "Varies by procedure & destination",
  },
  {
    value: "JCI",
    label: "Hospital Standards",
    description: "Focusing on internationally accredited facilities",
  },
  {
    value: "LATAM",
    label: "Destinations Covered",
    description: "Initial focus on Costa Rica, with expansion plans",
  },
  {
    value: "100%",
    label: "Independent Guides",
    description: "Information focused on patient safety and research",
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
              <div className="mt-2 text-base text-white/80 font-medium">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
