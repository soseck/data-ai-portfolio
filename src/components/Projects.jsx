import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    { 
      title: "E-commerce Analytics", 
      description: "Increased sales by 25% through data-driven recommendations.",
      image: "/placeholder.svg",
      link: "#"
    },
    { 
      title: "Financial Forecasting", 
      description: "Developed a model with 95% accuracy for revenue predictions.",
      image: "/placeholder.svg",
      link: "#"
    },
    { 
      title: "Customer Segmentation", 
      description: "Identified key customer groups for targeted marketing campaigns.",
      image: "/placeholder.svg",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">Recent Projects</h2>
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
                    View Project
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
