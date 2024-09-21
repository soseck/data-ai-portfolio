import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-6 md:py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">{t.footerText}</p>
        <p className="mt-2 text-xs md:text-sm text-gray-400">{t.footerSubtext}</p>
      </div>
    </footer>
  );
};

export default Footer;
