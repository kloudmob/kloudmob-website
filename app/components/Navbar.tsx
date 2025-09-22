"use client"

import { useState, useEffect, MouseEvent } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setIsScrolled(currentScrollPos > prevScrollPos && currentScrollPos > 250);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            window.history.pushState(null, '', targetId);
        }
    };

    return (
        <>
            <nav className={`flex justify-between items-center px-6 py-4 sticky top-0 z-50 transition-all bg-white duration-300 ${isScrolled
                ? '-translate-y-full'
                : 'shadow-md translate-y-0'
                }`}>
                {/* Logo */}
                <a href="#home"
                    onClick={(e) => handleSmoothScroll(e, '#home')}
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Kloudmob
                </a>

                {/* Navigation */}
                <ul className="hidden md:flex space-x-8 font-medium">
                    <li>
                        <a
                            href="#about"
                            onClick={(e) => handleSmoothScroll(e, '#about')}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#product"
                            onClick={(e) => handleSmoothScroll(e, '#product')}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Auro24
                        </a>
                    </li>
                    <li>
                        <a
                            href="#usecases"
                            onClick={(e) => handleSmoothScroll(e, '#usecases')}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Use Cases
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Get Started Button */}
                <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    className="hidden md:block px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow hover:shadow-md"
                >
                    Get Started
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40 animate-fadeIn">
                    <ul className="flex flex-col space-y-4 p-6">
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => handleSmoothScroll(e, '#about')}
                                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#product"
                                onClick={(e) => handleSmoothScroll(e, '#product')}
                                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Auro24
                            </a>
                        </li>
                        <li>
                            <a
                                href="#usecases"
                                onClick={(e) => handleSmoothScroll(e, '#usecases')}
                                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Use Cases
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, '#contact')}
                                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="pt-4 border-t border-gray-100">
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, '#contact')}
                                className="block w-full text-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* mobile menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
}