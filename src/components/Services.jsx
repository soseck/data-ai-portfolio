import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, TrendingUp, Database } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Data Analysis", icon: <BarChart2 className="h-12 w-12 mb-4 text-teal-400" />, description: "In-depth analysis of your data to uncover insights and trends." },
    { title: "Predictive Modeling", icon: <TrendingUp className="h-12 w-12 mb-4 text-teal-400" />, description: "Build models to forecast future trends and outcomes." },
    { title: "Data Management", icon: <Database className="h-12 w-12 mb-4 text-teal-400" />, description: "Organize and optimize your data infrastructure for efficiency." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-2xl text-white">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
