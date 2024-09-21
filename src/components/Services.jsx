import React, { useContext } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, TrendingUp, Database } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselCard from './CarouselCard';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const services = [
    { title: t.dataAnalysis, icon: <BarChart2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataAnalysisDesc },
    { title: t.predictiveModeling, icon: <TrendingUp className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.predictiveModelingDesc },
    { title: t.dataManagement, icon: <Database className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataManagementDesc },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.servicesTitle}</h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {services.map((service, index) => (
              <div key={index} className="embla__slide">
                <CarouselCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
