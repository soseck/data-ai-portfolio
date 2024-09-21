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

  const experiences = [
    {
      title: "Inferensia",
      period: "Juillet 2022 – Aujourd'hui",
      description: "Optimisation de la performance des modules de détection de fraude, POCs et expérimentations d'approches par l'IA, développement et intégration de modules de conformité.",
      technologies: "Python, MLOps (MLFlow, Airflow) / DevOps (Docker, Kubernetes), Spark, MinIO, Angular, Flask",
      image: "/placeholder.svg",
    },
    {
      title: "Relyens",
      period: "Juillet 2022 - Août 2023",
      description: "Collecte et traitement de données, développement d'outils de cartographie et de recherche, intégration de fonctionnalités de ML.",
      technologies: "Python, Machine Learning, Deep Learning, NumPy, Pandas, Dash, Selenium, BeautifulSoup",
      image: "/placeholder.svg",
    },
    {
      title: "Cetim",
      period: "Septembre 2020 - Juin 2022",
      description: "Définition des besoins SI/Data, design de l'architecture SI (Edge/Cloud Azure), suivi de l'implémentation des services.",
      technologies: "Python, Pytables, Plotly, Azure (Edge/Cloud), MLOps/DevOps, Conteneurisation",
      image: "/placeholder.svg",
    },
    {
      title: "Amadeus",
      period: "Janvier 2019 - Juin 2020",
      description: "Conception d'une application de détection d'anomalies, traitement des logs, visualisation des KPIs, automatisation du pipeline, conception fullstack.",
      technologies: "Scikit Learn, Python, C++, Fullstack Web Development",
      image: "/placeholder.svg",
    },
    {
      title: "CNRS",
      period: "Avril 2018 - Octobre 2018",
      description: "Refactoring et intégration d'outils pour une plateforme de modélisation de réseau de gènes.",
      technologies: "Java, Bio-informatique",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.projectsTitle}</h2>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {experiences.map((experience, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                <CarouselCard item={experience} type="experience" />
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
