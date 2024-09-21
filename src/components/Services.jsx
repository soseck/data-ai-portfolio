import React, { useContext } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, TrendingUp, Database } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const services = [
    { title: t.dataAnalysis, icon: <BarChart2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataAnalysisDesc },
    { title: t.predictiveModeling, icon: <TrendingUp className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.predictiveModelingDesc },
    { title: t.dataManagement, icon: <Database className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataManagementDesc },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.servicesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-xl md:text-2xl text-white">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
