import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Data-Driven Insights</h1>
        <p className="text-xl mb-8">Transforming raw data into actionable strategies</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;