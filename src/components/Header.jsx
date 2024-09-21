import React from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          <h1 className="text-2xl font-bold text-teal-400">Data Consultant</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('services')}>Services</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
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
      </div>
    </header>
  );
};

export default Header;
