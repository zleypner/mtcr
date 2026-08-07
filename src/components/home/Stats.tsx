const stats = [
  {
    value: "40-70%",
    label: "Cost Savings",
    description: "vs. USA prices on major procedures",
  },
  {
    value: "3",
    label: "JCI Hospitals",
    description: "Internationally accredited in San José",
  },
  {
    value: "3hrs",
    label: "From Miami",
    description: "Direct flights from major US cities",
  },
  {
    value: "80+",
    label: "Life Expectancy",
    description: "Comparable to the United States",
  },
];

export function Stats() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-black text-white sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-4 text-2xl font-bold text-white/95">
                {stat.label}
              </div>
              <div className="mt-3 text-xl text-white/85 font-medium">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
