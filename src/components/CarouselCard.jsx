import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CarouselCard = ({ item, type }) => {
  if (type === 'service') {
    return (
      <Card className="text-center bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors h-full">
        <CardHeader>
          <CardTitle className="flex flex-col items-center text-xl md:text-2xl text-white">
            {item.icon}
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base text-gray-300">{item.description}</p>
        </CardContent>
      </Card>
    );
  } else if (type === 'project') {
    return (
      <Card className="bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors overflow-hidden h-full">
        <img src={item.image} alt={item.title} className="w-full h-40 md:h-48 object-cover" />
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-white">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base text-gray-300 mb-4">{item.description}</p>
          <Button asChild>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
              {item.language === 'en' ? "View Project" : "Voir le Projet"}
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }
};

export default CarouselCard;
