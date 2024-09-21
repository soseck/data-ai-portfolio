import React, { useContext, useCallback } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import CarouselCard from './CarouselCard';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projects = [
    { 
      title: language === 'en' ? "E-commerce Analytics" : "Analyse E-commerce", 
      description: language === 'en' ? "Increased sales by 25% through data-driven recommendations." : "Augmentation des ventes de 25% grâce à des recommandations basées sur les données.",
      image: "/placeholder.svg",
      link: "#"
    },
    { 
      title: language === 'en' ? "Financial Forecasting" : "Prévisions Financières", 
      description: language === 'en' ? "Developed a model with 95% accuracy for revenue predictions." : "Développement d'un modèle avec une précision de 95% pour les prévisions de revenus.",
      image: "/placeholder.svg",
      link: "#"
    },
    { 
      title: language === 'en' ? "Customer Segmentation" : "Segmentation Client", 
      description: language === 'en' ? "Identified key customer groups for targeted marketing campaigns." : "Identification des groupes de clients clés pour des campagnes marketing ciblées.",
      image: "/placeholder.svg",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.projectsTitle}</h2>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {projects.map((project, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                <CarouselCard item={project} type="project" />
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

export default Projects;
