import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { GrAndroid, GrAppleAppStore } from "react-icons/gr";
import { SiRubyonrails } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Technology = {
    name: string;
    icon: React.ReactNode;
};

export default function Technologies() {
    const technologies: Technology[] = [
        {
            name: "iOS",
            icon: <GrAppleAppStore className="text-3xl" />
        },
        {
            name: "Android",
            icon: <GrAndroid className="text-3xl" />
        },
        {
            name: "React Native",
            icon: <TbBrandReactNative className="text-3xl" />
        },
        {
            name: "React JS",
            icon: <FaReact className="text-3xl" />
        },
        {
            name: "Angular JS",
            icon: <FaAngular className="text-3xl" />
        },
        {
            name: "Ruby on Rails",
            icon: <SiRubyonrails className="text-3xl" />
        },
        {
            name: "HTML/CSS",
            icon: <FiCode className="text-3xl" />
        },
        {
            name: "Node.JS",
            icon: <FaNodeJs className="text-3xl" />
        },
    ];

    return (
        <section id="technologies" className="py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-white mb-4">Our Technology Stack</h3>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We leverage a modern, scalable technology stack to build high-performance mobile and web applications. From frontend and backend development to cloud integration and databases, Kloudmob uses the latest tools and frameworks to deliver secure, reliable, and future-ready digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech, i) => (
                        <div
                            key={i}
                            className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                                    {tech.icon}
                                </div>
                                <h4 className="font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                                    {tech.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}