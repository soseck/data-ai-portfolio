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
    <section id="home" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 md:py-32 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div className="w-full md:w-5/12 mb-8 md:mb-0 flex items-center justify-center">
            <img src="/portfolio.jpeg" alt="Ndeye Sokhna SECK" className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg rounded-full" />
          </div>
          <div className="w-full md:w-6/12 text-center md:text-left">
            <p className="text-base md:text-lg mb-2 md:mb-4">
              {language === 'en' ? "Hi, I am Sokhna" : "Sokhna, enchantée !"}
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              {language === 'en' ? (
                t.heroTitle
              ) : (
                <>
                  Consultante<br />
                  Data & IA
                </>
              )}
            </h1>
            <p className="text-sm md:text-base mb-4 md:mb-6">{t.heroSubtitle}</p>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" onClick={handleDownloadCV}>{t.downloadCV}</Button>
          </div>
        </div>
        <div className="w-full md:w-3/4 mx-auto">
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
