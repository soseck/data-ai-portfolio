import React, { useContext } from 'react';
import { Progress } from "@/components/ui/progress";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const skills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Data Analysis", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "Natural Language Processing", level: 85 },
    { name: "Data Visualization", level: 80 },
    { name: "Big Data Technologies", level: 75 },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-800">
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
