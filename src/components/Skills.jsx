import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const skills = [
    "Python",
    "Machine Learning / Deep Learning",
    "Data Analysis",
    "MLOps / DevOps",
    "Cloud Computing (Azure)",
    "Fullstack Web Development",
    "Big Data",
    "Generative AI"
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.skillsTitle}</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <span className="text-base md:text-lg text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
