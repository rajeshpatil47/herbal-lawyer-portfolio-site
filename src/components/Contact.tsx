
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I will get back to you shortly.",
    });
    // Reset form - in a real app you would send the data to a server
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-lawyer-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-lawyer-primary">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-4 font-montserrat max-w-3xl mx-auto">
            Have questions about legal services or herbal products? Reach out today.
          </p>
          <div className="w-24 h-1 bg-lawyer-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-bold text-lawyer-secondary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="w-full font-montserrat"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full font-montserrat"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  required
                  className="w-full font-montserrat"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px] font-montserrat"
                />
              </div>
              
              <Button type="submit" className="w-full bg-lawyer-primary hover:bg-lawyer-primary/90 text-white font-montserrat">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-lawyer-secondary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-lawyer-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-lawyer-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lawyer-secondary">Phone</h4>
                    <p className="text-gray-600 font-montserrat">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lawyer-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-lawyer-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lawyer-secondary">Email</h4>
                    <p className="text-gray-600 font-montserrat">johndoe@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair font-bold text-lawyer-secondary mb-6">Office Hours</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between font-montserrat">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-lawyer-secondary">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between font-montserrat">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-lawyer-secondary">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between font-montserrat">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-lawyer-secondary">Closed</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair font-bold text-lawyer-secondary mb-6">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-lawyer-primary/10 p-3 rounded-full hover:bg-lawyer-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-lawyer-primary hover:text-white" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-lawyer-primary/10 p-3 rounded-full hover:bg-lawyer-primary hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5 text-lawyer-primary hover:text-white" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-lawyer-primary/10 p-3 rounded-full hover:bg-lawyer-primary hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 text-lawyer-primary hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
