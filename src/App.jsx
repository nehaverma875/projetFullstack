// src/Appd.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureHighlights from "./components/FeatureHighlights";
import PricingCards from "./components/PricingCards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <PricingCards />
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;