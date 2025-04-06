
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-playfair font-bold text-lawyer-primary">
              <span className="text-lawyer-secondary">John</span> Doe
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-lawyer-dark hover:text-lawyer-primary transition-colors font-montserrat">
              Home
            </a>
            <a href="#about" className="text-lawyer-dark hover:text-lawyer-primary transition-colors font-montserrat">
              About
            </a>
            <a href="#services" className="text-lawyer-dark hover:text-lawyer-primary transition-colors font-montserrat">
              Services
            </a>
            <a href="#testimonials" className="text-lawyer-dark hover:text-lawyer-primary transition-colors font-montserrat">
              Testimonials
            </a>
            <a href="#contact" className="text-lawyer-dark hover:text-lawyer-primary transition-colors font-montserrat">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full text-lawyer-primary border-lawyer-primary hover:bg-lawyer-primary hover:text-white">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-montserrat">Call Now</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-lawyer-dark focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-lawyer-dark hover:text-lawyer-primary px-4 py-2 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-lawyer-dark hover:text-lawyer-primary px-4 py-2 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-lawyer-dark hover:text-lawyer-primary px-4 py-2 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="text-lawyer-dark hover:text-lawyer-primary px-4 py-2 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-lawyer-dark hover:text-lawyer-primary px-4 py-2 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="outline" className="rounded-full text-lawyer-primary border-lawyer-primary hover:bg-lawyer-primary hover:text-white mx-4">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-montserrat">Call Now</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
