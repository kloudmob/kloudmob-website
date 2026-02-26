import { FiBook, FiShoppingCart, FiBriefcase, FiHeart, FiDollarSign, FiHome, FiTruck, FiShield } from "react-icons/fi";

type UseCase = {
  name: string;
  icon: React.ReactNode;
};

export default function UseCases() {
  const cases: UseCase[] = [
    {
      name: "Healthcare",
      icon: <FiHeart className="text-3xl" />
    },
    {
      name: "Retail",
      icon: <FiShoppingCart className="text-3xl" />
    },
    {
      name: "Finance",
      icon: <FiDollarSign className="text-3xl" />
    },
    {
      name: "Hospitality",
      icon: <FiHome className="text-3xl" />
    },
    {
      name: "Logistics",
      icon: <FiTruck className="text-3xl" />
    },
    {
      name: "Security",
      icon: <FiShield className="text-3xl" />
    },
  ];

  return (
    <section id="usecases" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Who Uses Kloudmob?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Startups, growing businesses, and enterprises that want reliable, scalable digital solutions.
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
              <h4 className="text-xl font-semibold text-gray-800 text-center">{c.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}