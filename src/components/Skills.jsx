import React, { useContext } from 'react';
import { Progress } from "@/components/ui/progress";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const skills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning / Deep Learning", level: 90 },
    { name: "Data Analysis", level: 90 },
    { name: "MLOps / DevOps", level: 85 },
    { name: "Cloud Computing (Azure)", level: 80 },
    { name: "Fullstack Web Development", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.skillsTitle}</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4 md:mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-base md:text-lg text-white">{skill.name}</span>
                <span className="text-base md:text-lg text-teal-400">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-gray-700" indicatorClassName="bg-teal-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
