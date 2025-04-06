
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-lawyer-light via-white to-lawyer-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-lawyer-secondary text-lg md:text-xl font-montserrat mb-2">
                  Welcome to my professional portfolio
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-lawyer-primary leading-tight">
                  N S Patil
                </h1>
                <p className="text-xl md:text-2xl text-lawyer-secondary mt-2 font-montserrat">
                  Attorney & Herbal Wellness Expert
                </p>
              </div>
              
              <p className="text-gray-600 text-lg font-montserrat leading-relaxed">
                Combining over 20 years of legal expertise with a passion for natural wellness solutions. 
                Offering professional legal counsel and high-quality herbal products that promote well-being.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full bg-lawyer-primary hover:bg-lawyer-primary/90 text-white font-montserrat">
                  Legal Services
                </Button>
                <Button variant="outline" className="rounded-full border-lawyer-secondary text-lawyer-secondary hover:bg-lawyer-secondary hover:text-white font-montserrat">
                  Herbal Products
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
              {/* Replace with actual image of your father */}
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="N S Patil - Attorney & Herbal Wellness Expert" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
