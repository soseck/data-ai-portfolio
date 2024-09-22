import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">{t.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
