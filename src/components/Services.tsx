
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    category: "legal",
    title: "Corporate Law",
    description: "Comprehensive legal counsel for businesses including formation, contracts, compliance, and risk management.",
    icon: "⚖️"
  },
  {
    id: 2,
    category: "legal",
    title: "Intellectual Property",
    description: "Protection of creative works, trademarks, and patents through strategic legal guidance and representation.",
    icon: "📝"
  },
  {
    id: 3,
    category: "legal",
    title: "Civil Litigation",
    description: "Effective representation in disputes, with a focus on resolution strategies that protect client interests.",
    icon: "🏛️"
  },
  {
    id: 4,
    category: "herbal",
    title: "Wellness Consultation",
    description: "Personalized herbal wellness plans tailored to individual health goals and concerns.",
    icon: "🌿"
  },
  {
    id: 5,
    category: "herbal",
    title: "Premium Herbal Products",
    description: "High-quality, ethically sourced herbal supplements and remedies for various health needs.",
    icon: "🍃"
  },
  {
    id: 6,
    category: "herbal",
    title: "Educational Workshops",
    description: "Informative sessions on incorporating herbal wellness into daily life for optimal health benefits.",
    icon: "📚"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-lawyer-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-lawyer-primary">Services</h2>
          <p className="text-lg text-gray-600 mt-4 font-montserrat max-w-3xl mx-auto">
            Professional expertise spanning legal practice and herbal wellness, offering comprehensive solutions for diverse needs.
          </p>
          <div className="w-24 h-1 bg-lawyer-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="font-playfair text-lawyer-primary text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-montserrat">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
