import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import TechCarousel from './TechCarousel';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 md:py-32 pt-32 md:pt-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
            <img src="/portfolio.jpeg" alt="Ndeye Sokhna SECK" className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg rounded-full" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-4">
              {language === 'en' ? "Hi, I am Sokhna" : "Sokhna, enchantée !"}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              {language === 'en' ? (
                t.heroTitle
              ) : (
                <>
                  Consultante<br />
                  Data & IA
                </>
              )}
            </h1>
            <p className="text-base md:text-lg mb-6">{t.heroSubtitle}</p>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 mb-8" onClick={handleDownloadCV}>{t.downloadCV}</Button>
          </div>
        </div>
        <div className="w-full md:w-3/4 mx-auto mt-8 md:mt-12">
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
