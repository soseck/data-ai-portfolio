import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Education = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const educations = [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "University of Technology",
      period: "2019 - 2021",
      description: "Specialized in machine learning and natural language processing. Thesis on 'Improving Sentiment Analysis using Transfer Learning Techniques'."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2015 - 2019",
      description: "Focus on data structures, algorithms, and software engineering. Minor in Mathematics."
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.educationTitle}</h2>
        <div className="max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className="mb-8 border-l-2 border-teal-400 pl-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-lg text-teal-300">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;