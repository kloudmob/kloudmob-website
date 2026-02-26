import Image from 'next/image';
import bannerImg from '../assets/banner (3).jpg';

export default function Hero() {
    return (
        <section id='home' className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={bannerImg}
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        <span className='text-3xl md:text-5xl'>Empowering Ideas.</span>
                        <span className="block text-blue-500">
                            Engineering Digital Excellence.
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                        We build user-friendly, robust, and scalable mobile and web applications.
                        Helping businesses turn ideas into powerful digital solutions.
                    </p>

                    <a
                        href="#product"
                        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                    >
                        Discover {process.env.SITE_NAME}
                    </a>
                </div>
            </div>
        </section>
    );
}