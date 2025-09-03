export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
      <h1 className="text-2xl font-bold text-blue-600">Kloudmob</h1>
      <ul className="hidden md:flex space-x-6 font-medium">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#product" className="hover:text-blue-600">Auro24</a></li>
        <li><a href="#usecases" className="hover:text-blue-600">Use Cases</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
      <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </a>
    </nav>
  );
}