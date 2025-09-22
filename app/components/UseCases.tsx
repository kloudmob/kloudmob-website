import { FiBook, FiShoppingCart, FiBriefcase } from "react-icons/fi";

type UseCase = {
  name: string;
  desc: string;
  icon: React.ReactNode;
};

export default function UseCases() {
  const cases: UseCase[] = [
    {
      name: "Education",
      desc: "Enable schools to manage devices securely with tailored solutions for digital learning environments.",
      icon: <FiBook className="text-3xl" />
    },
    {
      name: "Retail",
      desc: "Manage point-of-sale systems and interactive kiosks at scale with reliable device management.",
      icon: <FiShoppingCart className="text-3xl" />
    },
    {
      name: "Enterprises",
      desc: "Support remote teams and streamline IT operations with enterprise-grade device management.",
      icon: <FiBriefcase className="text-3xl" />
    },
  ];

  return (
    <section id="usecases" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Who Uses Auro24?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Auro24 serves diverse industries with tailored solutions for their unique device management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                  {c.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">{c.name}</h4>
              <p className="text-gray-600 text-center">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}