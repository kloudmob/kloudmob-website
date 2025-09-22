import { FiMail, FiPhone, FiMessageSquare, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Want to know more about Auro24? We&apos;d love to hear from you and answer any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white text-blue-600 rounded-full">
                <FiMail className="text-2xl" />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Email Us</h4>
            <p className="text-blue-100 text-sm">Detailed response within 24 hours</p>
            <a
              href="mailto:hello@kloudmob.com"
              className="text-sm font-medium hover:underline"
            >
              hello@kloudmob.com
            </a>

            <a href="mailto:hello@kloudmob.com" className="w-fit px-7 py-2 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto mt-5">
              Email <FiArrowRight className="ml-2 transition-all duration-300 transform hover:-translate-y-1" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white text-blue-600 rounded-full">
                <FiPhone className="text-2xl" />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Call Us</h4>
            <p className="text-blue-100 text-sm">Speak directly with our experts</p>
            <a
              href="tel:+11234567890"
              className="text-sm font-medium hover:underline"
            >
              +1 (123) 456-7890
            </a>

            <a href="tel:+11234567890" className="w-fit px-7 py-2 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto mt-5">
              Call <FiArrowRight className="ml-2 transition-all duration-300 transform hover:-translate-y-1" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white text-blue-600 rounded-full">
                <FiMessageSquare className="text-2xl" />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Live Chat</h4>
            <p className="text-blue-100 text-sm mb-4">Get instant answers to your questions</p>
            <button className="px-7 py-2 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto mt-5">
              Contact <FiArrowRight className="ml-2 transition-all duration-300 transform hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}