import React from "react";
import HomePage from "@/components/HomePages/HomeHero";
import FoodCategory from "@/components/HomePages/Products Catogery";
import ChooseFromMenu from "@/components/HomePages/Home about";
import Aboutus from "@/components/HomePages/AboutUs";
import TestimonialsSection from "@/components/HomePages/Testimonial";
import ProductCategory from "@/components/HomePages/Products Catogery";
import OrderProcess from "@/components/HomePages/orderguied";
import FinalCTA from "@/components/HomePages/FinalCTA";

const Home = () => {
  return (
    <div>
      {/* Header component for the top section of the page */}
      <HomePage />

      {/* About component to display about us section */}
      <Aboutus />

      {/* Categories component to display various categories */}
      <ProductCategory />

      {/* Choose from menu component to display menu items */}
      <ChooseFromMenu />

      { }
        <OrderProcess/>

      {/* Testimonial component to display testimonial section */}
      <TestimonialsSection />

      <FinalCTA />
    </div>
  );
};

export default Home;
