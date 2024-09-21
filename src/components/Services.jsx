import React, { useContext, useEffect, useCallback } from 'react';
import { BarChart2, TrendingUp, Database } from 'lucide-react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import CarouselCard from './CarouselCard';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const services = [
    { title: t.dataAnalysis, icon: <BarChart2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataAnalysisDesc },
    { title: t.predictiveModeling, icon: <TrendingUp className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.predictiveModelingDesc },
    { title: t.dataManagement, icon: <Database className="h-10 w-10 md:h-12 md:w-12 mb-4 text-teal-400" />, description: t.dataManagementDesc },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.servicesTitle}</h2>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {services.map((service, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                <CarouselCard item={service} type="service" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={scrollPrev} className="mx-2 p-2 bg-teal-500 text-white rounded-full">&lt;</button>
          <button onClick={scrollNext} className="mx-2 p-2 bg-teal-500 text-white rounded-full">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
