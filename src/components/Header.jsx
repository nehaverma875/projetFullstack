import React, { useState, useEffect } from "react";

const navItems = [
  { id: "features", label: "Amazing Features" },
  { id: "pricing", label: "Exclusive Pricing" },
  { id: "contact", label: "ContactUs" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("features");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "pricing", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY + 100 >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img
            src="./assets/zlogo.png"
            alt="Company Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <span className="text-xl md:text-2xl font-extrabold text-red-700 ml-2">
            SPICEAL
          </span>
        </div>

      
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-extrabold">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-red-700 ${
                activeSection === item.id ? "text-red-700" : "text-gray-800"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-red-700 px-4 py-2 ${
                  activeSection === item.id ? "text-red-700" : "text-gray-800"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;