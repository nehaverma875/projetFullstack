// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        bg-gradient-to-br
        from-red-600
        via-black
        to-blue-800
        py-24
        px-6
        md:px-12
        lg:px-20
        flex
        flex-col
        items-center
        text-center
        text-white
      "
    >
    <div className="max-w-3xl">
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
    Empower Your Future with{" "}
    <span className="text-red-300">Z Special Company</span>
  </h1>

  <p className="mt-4 text-lg md:text-xl text-gray-100">
    We are a leading data and AI company, delivering innovative solutions to 
    simplify, optimize, and transform your business operations effortlessly.
  </p>


        <div className="mt-8">
          <button
            className="
              bg-white
              text-black
              font-semibold
              px-8
              py-3
              rounded-xl
              shadow-lg
              transform
              transition-all
              duration-300
              hover:scale-105
              hover:bg-gray-100
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
