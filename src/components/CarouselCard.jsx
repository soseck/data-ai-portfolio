import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CarouselCard = ({ service }) => {
  return (
    <Card className="text-center bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors mx-4">
      <CardHeader>
        <CardTitle className="flex flex-col items-center text-xl md:text-2xl text-white">
          {service.icon}
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base text-gray-300">{service.description}</p>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;