import Image from 'next/image';
import bannerImg from '../assets/banner (3).jpg';

export default function Hero() {
    return (
        <section id='home'
            className="relative text-center px-6 overflow-hidden h-screen flex items-center justify-center"
        >
            <Image
                className='absolute bottom-0 left-0 z-10 w-full h-full'
                src={bannerImg}
                alt="banner"
                layout="responsive"
                objectFit="cover" />

            <div className='relative z-10 bg-black/10 backdrop-blur p-20 rounded-xl'>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Simplifying Mobility with <span className="text-blue-600">Auro24</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    Kloudmob builds technology that empowers organizations to manage devices, stay secure, and be productive.
                </p>
                <a href="#product" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
                    Discover Auro24
                </a>
            </div>
        </section>
    );
}