import React, { useContext } from 'react';
import { BarChart2, TrendingUp, Database, Bot } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const services = [
    { title: t.dataAnalysis, icon: <BarChart2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataAnalysisDesc },
    { title: t.predictiveModeling, icon: <TrendingUp className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.predictiveModelingDesc },
    { title: t.dataManagement, icon: <Database className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataManagementDesc },
    { title: t.genAI, icon: <Bot className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.genAIDesc },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.servicesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
