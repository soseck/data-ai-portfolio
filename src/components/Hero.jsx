import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import TechCarousel from './TechCarousel';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="home" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 md:py-32 pt-32 md:pt-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/portfolio.jpeg" alt="Ndeye Sokhna SECK" className="w-56 h-56 md:w-64 md:h-64 object-cover shadow-lg rounded-full mx-auto" />
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <p className="text-lg mb-4">
              {language === 'en' ? "Hi, I am Sokhna" : "Sokhna, enchantée !"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl mb-8">{t.heroSubtitle}</p>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">{t.downloadCV}</Button>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
