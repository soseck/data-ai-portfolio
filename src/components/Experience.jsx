import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const experiences = [
    {
      title: "Data Scientist",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead data scientist responsible for developing and implementing machine learning models to optimize business processes and drive data-driven decision making."
    },
    {
      title: "AI Research Assistant",
      company: "University of Technology",
      period: "2019 - 2021",
      description: "Conducted research on advanced AI algorithms and contributed to publications in the field of natural language processing and computer vision."
    },
    {
      title: "Data Analyst Intern",
      company: "Global Analytics Corp.",
      period: "Summer 2018",
      description: "Assisted in data cleaning, analysis, and visualization projects, gaining hands-on experience with industry-standard tools and methodologies."
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.experienceTitle}</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 border-l-2 border-teal-400 pl-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="text-lg text-teal-300">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;