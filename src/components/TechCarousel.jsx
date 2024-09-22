import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";

const TechCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);

  const techFields = [
    {
      name: 'Data Analysis',
      techs: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau']
    },
    {
      name: 'Machine Learning / Deep Learning / LLM',
      techs: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face', 'NLTK']
    },
    {
      name: 'MLOps / LLMOps',
      techs: ['Docker', 'Kubernetes', 'MLflow', 'Airflow', 'Jenkins']
    },
    {
      name: 'Cloud Computing',
      techs: ['Azure', 'AWS', 'Google Cloud', 'Databricks', 'Snowflake']
    }
  ];

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {techFields.map((field, index) => (
          <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 mr-4">
            <Card className="bg-gray-800 border-teal-400">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-teal-400 mb-2">{field.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {field.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;