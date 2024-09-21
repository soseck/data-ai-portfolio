import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.aboutTitle}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300">{t.aboutContent}</p>
        </div>
      </div>
    </section>
  );
};

export default About;