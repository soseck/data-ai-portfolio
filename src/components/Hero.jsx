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
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-8">
          <img src="/portfolio.jpeg" alt="Ndeye Sokhna SECK" className="w-48 h-48 object-cover shadow-lg" />
        </div>
        <div className="text-center">
          <p className="text-lg mb-4">
            {language === 'en' ? "Hi, I am Sokhna" : "Sokhna, enchantée !"}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl mb-8">{t.heroSubtitle}</p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 mb-8">{t.downloadCV}</Button>
        </div>
        <div className="w-full max-w-4xl mt-8">
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
