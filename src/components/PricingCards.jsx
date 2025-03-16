// src/components/PricingCards.js
import React from "react";

const PricingCards = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Silver",
      price: "$10",
      features: ["1 GB Storage", "10,000 Requests", "24/7 Support"],
    },
    {
      id: 2,
      title: "Gold",
      price: "$30",
      features: ["10 GB Storage", "100,000 Requests", "Priority Support"],
    },
    {
      id: 3,
      title: "Diamond",
      price: "$100",
      features: ["Unlimited Storage", "Unlimited Requests", "Dedicated Support"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-blue-950 mb-12">
          Pricing Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-semibold">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative
                p-8
                rounded-lg
                shadow-lg
                border
                border-gray-300
                bg-white
                transition-all
                duration-300
                group
                hover:text-white
                hover:border-transparent
                hover:bg-gradient-to-r
                hover:from-red-700
                hover:to-black
              `}
            >
              {/* Animated border outline on hover */}
              <div
                className={`
                  absolute
                  inset-0
                  rounded-lg
                  border-2
                  border-transparent
                  group-hover:border-red-600
                  group-hover:from-red-600
                  group-hover:to-black
                  pointer-events-none
                  transition-all
                  duration-300
                `}
              />

              <h3 className="text-2xl font-bold text-center mb-4 z-10 relative">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-center mb-6 z-10 relative">
                {plan.price}
              </p>

              <ul className="space-y-4 z-10 relative">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
