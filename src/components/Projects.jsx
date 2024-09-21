import React, { useContext } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 md:h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-300 mb-4">{project.description}</p>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    {language === 'en' ? "View Project" : "Voir le Projet"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
