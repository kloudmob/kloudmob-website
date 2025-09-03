type Feature = {
  title: string;
  desc: string;
};

export default function Product() {
  const features: Feature[] = [
    { title: "Device Management", desc: "Easily manage all your devices from a single dashboard." },
    { title: "Security First", desc: "Ensure compliance and protect your organization’s data." },
    { title: "Scalable", desc: "From small teams to enterprises, Auro24 grows with you." },
  ];

  return (
    <section id="product" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Meet Auro24</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Auro24 is Kloudmob’s enterprise mobility solution, designed to simplify IT operations 
          and keep your organization secure and productive.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Product Mockups */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 mt-12">
          {/* Laptop Mockup */}
          <div className="w-full md:w-3/4 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/images/auro24-dashboard.png" 
              alt="Auro24 Dashboard" 
              className="w-full"
            />
          </div>

          {/* Mobile Mockup */}
          <div className="w-40 md:w-56 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img 
              src="/images/auro24-mobile.png" 
              alt="Auro24 Mobile App" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Example: Auro24 web dashboard & mobile app interface
        </p>
      </div>
    </section>
  );
}
