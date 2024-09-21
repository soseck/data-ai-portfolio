import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3" />
          <h1 className="text-xl md:text-2xl font-bold text-teal-400">Data Consultant</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('services')}>Services</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </a>
        </div>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('services')}>Services</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button></li>
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
