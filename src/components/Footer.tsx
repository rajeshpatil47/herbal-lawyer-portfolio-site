
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lawyer-secondary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">N S Patil</h3>
            <p className="text-gray-300 font-montserrat mb-6">
              Attorney & Herbal Wellness Expert committed to providing quality legal services and natural wellness solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors font-montserrat">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors font-montserrat">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors font-montserrat">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors font-montserrat">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-montserrat">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-montserrat">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-montserrat">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-montserrat">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-montserrat">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-montserrat">
            &copy; {currentYear} N S Patil. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
