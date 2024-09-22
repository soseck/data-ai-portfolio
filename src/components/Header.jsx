import React, { useState, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Menu, Code } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = translations[language];

  return (
    <header className="bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Code className="h-8 w-8 text-teal-400" />
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>{t.home}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('services')}>{t.services}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('skills')}>{t.skills}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('projects')}>{t.projects}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('contact')}>{t.contact}</Button></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-2 items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
          <div className="flex items-center space-x-2 ml-4">
            <span className="text-sm text-gray-300">FR</span>
            <Switch
              checked={language === 'en'}
              onCheckedChange={toggleLanguage}
            />
            <span className="text-sm text-gray-300">EN</span>
          </div>
        </div>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>{t.home}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('services')}>{t.services}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('skills')}>{t.skills}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('projects')}>{t.projects}</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('contact')}>{t.contact}</Button></li>
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-4">
            <span className="text-sm text-gray-300">FR</span>
            <Switch
              checked={language === 'en'}
              onCheckedChange={toggleLanguage}
            />
            <span className="text-sm text-gray-300">EN</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
