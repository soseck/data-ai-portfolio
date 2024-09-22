import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ServiceCard = ({ item }) => {
  return (
    <Card className="text-center bg-gray-700 border-teal-400 hover:border-teal-300 transition-colors h-full">
      <CardHeader>
        <CardTitle className="flex flex-col items-center text-xl md:text-2xl text-white">
          {item.icon}
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base text-gray-300 px-2">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
