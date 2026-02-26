import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Expertise from "./components/Expertise";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar siteName={process.env.SITE_NAME} />
      <Hero />
      <About />
      {/* <Product /> */}
      <Expertise />
      <UseCases />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
