import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-gray-800 text-white border-gray-700 focus:border-teal-400" />
            <Input type="email" placeholder="Your Email" className="bg-gray-800 text-white border-gray-700 focus:border-teal-400" />
            <Textarea placeholder="Your Message" className="bg-gray-800 text-white border-gray-700 focus:border-teal-400" />
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
