type UseCase = {
  name: string;
  desc: string;
};

export default function UseCases() {
  const cases: UseCase[] = [
    { name: "Education", desc: "Enable schools to manage devices securely." },
    { name: "Retail", desc: "Manage point-of-sale and kiosks at scale." },
    { name: "Enterprises", desc: "Support remote teams and streamline IT." },
  ];

  return (
    <section id="usecases" className="py-20 px-6 text-center">
      <h3 className="text-3xl font-bold mb-12">Who Uses Auro24?</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cases.map((c, i) => (
          <div key={i} className="p-6 bg-blue-50 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">{c.name}</h4>
            <p className="text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
