
import React from "react";

const features = [
  {
    icon: "🚀",
    title: "Fast Performance",
    description: "Blazing fast speed for all your tasks.",
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "Your data is safe with us.",
  },
  {
    icon: "💡",
    title: "Innovative",
    description: "Cutting-edge technology for modern needs.",
  },
];

const FeatureHighlights = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                p-6
                bg-gray-50
                rounded-lg
                text-center
                transition-all
                duration-300
                hover:shadow-lg
                hover:bg-gradient-to-r
                hover:from-red-600
                hover:via-black
                hover:to-blue-800
                hover:text-white
              `}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-white font-bold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
