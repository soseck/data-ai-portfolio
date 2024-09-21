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
  } else if (type === 'experience') {
    return (
      <Card className="bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors overflow-hidden h-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-white">{item.title}</CardTitle>
          <p className="text-sm text-teal-400">{item.period}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base text-gray-300 mb-4">{item.description}</p>
          <p className="text-sm text-teal-400 mb-2">Technologies:</p>
          <p className="text-sm text-gray-300">{item.technologies}</p>
        </CardContent>
      </Card>
    );
  }
};

export default CarouselCard;
