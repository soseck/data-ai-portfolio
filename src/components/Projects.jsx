import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    { title: "E-commerce Analytics", description: "Increased sales by 25% through data-driven recommendations." },
    { title: "Financial Forecasting", description: "Developed a model with 95% accuracy for revenue predictions." },
    { title: "Customer Segmentation", description: "Identified key customer groups for targeted marketing campaigns." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;