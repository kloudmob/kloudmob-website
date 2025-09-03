import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}
