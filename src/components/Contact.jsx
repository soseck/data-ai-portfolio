import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LanguageContext } from '../LanguageContext';
import { translations } from '../translations';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-teal-400">{t.contactTitle}</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder={t.yourName} className="bg-gray-800 text-white border-gray-700 focus:border-teal-400" />
            <Input type="email" placeholder={t.yourEmail} className="bg-gray-800 text-white border-gray-700 focus:border-teal-400" />
            <Textarea placeholder={t.yourMessage} className="bg-gray-800 text-white border-gray-700 focus:border-teal-400" />
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">{t.sendMessage}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
