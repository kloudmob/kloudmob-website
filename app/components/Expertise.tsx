import {
    FiActivity,
    FiShoppingCart,
    FiBriefcase,
    FiCheckCircle
} from "react-icons/fi";
import { MdDevices } from "react-icons/md";

type Expertise = {
    name: string;
    icon: React.ReactNode;
};

export default function Expertise() {
    const expertiseList: Expertise[] = [
        {
            name: "Healthcare Tech",
            icon: <FiActivity className="text-3xl" />
        },
        {
            name: "Mobile Device Management",
            icon: <MdDevices className="text-3xl" />
        },
        {
            name: "E-commerce",
            icon: <FiShoppingCart className="text-3xl" />
        },
        {
            name: "Product Management",
            icon: <FiBriefcase className="text-3xl" />
        },
        {
            name: "QA / Testing Services",
            icon: <FiCheckCircle className="text-3xl" />
        },
    ];

    return (
        <section id="product" className="py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-white mb-4">Our Expertise</h3>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We specialize in designing and developing custom mobile and web applications tailored to your business goals. From strategy and UI/UX design to development, testing, and deployment, we deliver scalable, secure, and high-performing digital solutions that drive real results
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {expertiseList.map((item, i) => (
                        <div
                            key={i}
                            className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-4 bg-gray-700 rounded-full text-blue-400 mb-4 group-hover:bg-gray-600 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-gray-200">{item.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}