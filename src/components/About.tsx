
import React from 'react';
import { Briefcase, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-lawyer-primary">About Me</h2>
          <div className="w-24 h-1 bg-lawyer-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-lawyer-primary/10 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-lawyer-primary" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-lawyer-secondary mb-2">Legal Practice</h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  With over two decades of experience in law, I specialize in corporate law, intellectual property, and civil litigation. My approach combines thorough legal knowledge with a client-focused perspective, ensuring that each case receives personalized attention and strategic counsel.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-lawyer-primary/10 p-3 rounded-full mr-4">
                <Leaf className="h-6 w-6 text-lawyer-primary" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-lawyer-secondary mb-2">Herbal Wellness</h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  My passion for herbal wellness stems from a deep belief in nature's healing properties. I develop and source high-quality herbal products that support overall health and well-being. Each product is carefully researched, ethically sourced, and formulated to provide natural alternatives for common health concerns.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-lawyer-primary/10 rounded-lg p-8 relative z-10">
              <h3 className="text-2xl font-playfair font-bold text-lawyer-primary mb-4">My Approach</h3>
              <p className="text-gray-600 font-montserrat leading-relaxed mb-6">
                My unique background allows me to approach both legal matters and wellness with a holistic perspective. I believe in:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-lawyer-primary mr-3"></div>
                  <span className="font-montserrat text-gray-700">Integrity and transparency in all professional dealings</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-lawyer-primary mr-3"></div>
                  <span className="font-montserrat text-gray-700">Education and empowerment for clients</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-lawyer-primary mr-3"></div>
                  <span className="font-montserrat text-gray-700">Balancing modern practices with traditional wisdom</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-lawyer-primary mr-3"></div>
                  <span className="font-montserrat text-gray-700">Sustainable and ethical business practices</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-lawyer-primary mr-3"></div>
                  <span className="font-montserrat text-gray-700">Continuous learning and professional development</span>
                </li>
              </ul>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lawyer-accent rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
