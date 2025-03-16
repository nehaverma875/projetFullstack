import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-black to-red-700 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex items-center space-x-3">
          {/* Logo */}
        
        
          <div>
            <h3 className="text-2xl font-bold">
            <div className="flex items-center ">
      <img
        src="./assets/zlogo.png" 
        alt="Company Logo"
        className="w-16 h-16" 
      />
      <span className="text-2xl font-extrabold text-white">SPICEAL</span>
    </div> <span className="text-blue-200">ZSpecial Company</span>
            </h3>
            <p className="text-sm text-gray-300">
              Empowering your data & AI journey.
            </p>
          </div>
        </div>
        <div>
 
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Z Special Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;