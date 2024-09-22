import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="home" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 md:py-32 pt-32 md:pt-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
          <img src="/portfolio.jpeg" alt="Ndeye Sokhna SECK" className="rounded-full w-50 h-50 object-cover shadow-lg mb-4" />
          <p className="text-lg font-semibold">N. Sokhna SECK</p>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl mb-8">{t.heroSubtitle}</p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">{t.downloadCV}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
