import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.skillsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">{t.skills[skill.name.toLowerCase().replace(/ /g, '')]}</h3>
              <div className="flex flex-wrap gap-4">
                {skill.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center">
                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 mr-2" />
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
