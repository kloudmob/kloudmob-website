import { FiSmartphone, FiShield, FiBarChart2 } from "react-icons/fi";
import Image from "next/image";
import img1 from "../assets/images/Dashboard - home.png";
import img2 from "../assets/images/phone.png";

type Feature = {
   title: string;
   desc: string;
   icon: React.ReactNode;
};

export default function Product() {
   const features: Feature[] = [
      {
         title: "Device Management",
         desc: "Easily manage all your devices from a single dashboard.",
         icon: <FiSmartphone className="text-3xl text-blue-600" />
      },
      {
         title: "Security First",
         desc: "Ensure compliance and protect your organization's data.",
         icon: <FiShield className="text-3xl text-blue-600" />
      },
      {
         title: "Scalable",
         desc: "From small teams to enterprises, Auro24 grows with you.",
         icon: <FiBarChart2 className="text-3xl text-blue-600" />
      },
   ];

   return (
      <section id="product" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
         <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Meet Auro24</h3>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
               Auro24 is Kloudmob&apos;s enterprise mobility solution, designed to simplify IT operations
               and keep your organization secure and productive.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
               {features.map((f, i) => (
                  <div key={i} className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1">
                     <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                           {f.icon}
                        </div>
                     </div>
                     <h4 className="text-xl font-semibold mb-3 text-gray-800">{f.title}</h4>
                     <p className="text-gray-600">{f.desc}</p>
                  </div>
               ))}
            </div>

            {/* Product Mockups */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12">
               {/* Laptop Mockup */}
               <div className="w-full md:w-3/4 shrink-0 rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative">
                     <Image
                        src={img1}
                        alt="Auro24 Dashboard"
                        width={700}
                        height={400}
                        className="object-cover w-full"
                     />
                  </div>
               </div>

               {/* Mobile Mockup */}
               <div className="w-40 md:w-full rounded-2xl overflow-hidden shadow-xl border-8 border-gray-800 relative">
                  <div className="relative h-80">
                     <Image
                        src={img2}
                        alt="Auro24 Mobile App"
                        width={700}
                        height={400}
                        className="object-cover w-full"
                     />
                  </div>
               </div>
            </div>

            <p className="text-gray-500 text-sm mt-6">
               Auro24 web dashboard & mobile app interface
            </p>
         </div>
      </section>
   );
}