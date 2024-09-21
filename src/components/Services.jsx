import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, TrendingUp, Database } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Data Analysis", icon: <BarChart2 className="h-8 w-8 mb-2" />, description: "In-depth analysis of your data to uncover insights and trends." },
    { title: "Predictive Modeling", icon: <TrendingUp className="h-8 w-8 mb-2" />, description: "Build models to forecast future trends and outcomes." },
    { title: "Data Management", icon: <Database className="h-8 w-8 mb-2" />, description: "Organize and optimize your data infrastructure for efficiency." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;