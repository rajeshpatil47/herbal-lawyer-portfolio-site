
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    text: "John's legal counsel was instrumental in helping our startup navigate complex regulatory challenges. His attention to detail and strategic approach saved us from potential pitfalls.",
    name: "Michael Chen",
    position: "CEO, TechStart Inc.",
    category: "legal"
  },
  {
    id: 2,
    text: "I've been using John's herbal supplements for three months and have seen remarkable improvements in my energy levels and overall well-being. His knowledge of natural remedies is exceptional.",
    name: "Sarah Johnson",
    position: "Health Coach",
    category: "herbal"
  },
  {
    id: 3,
    text: "As a fellow attorney, I've referred several clients to John for specialized cases. His expertise and professionalism are unmatched, and he consistently delivers excellent results.",
    name: "Robert Williams",
    position: "Partner, Williams & Associates",
    category: "legal"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-lawyer-primary">Testimonials</h2>
          <p className="text-lg text-gray-600 mt-4 font-montserrat max-w-3xl mx-auto">
            What clients and customers say about my legal practice and herbal wellness products.
          </p>
          <div className="w-24 h-1 bg-lawyer-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 text-lawyer-primary">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                <p className="text-gray-600 font-montserrat mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-lawyer-primary/20 flex items-center justify-center text-lawyer-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-playfair font-semibold text-lawyer-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm font-montserrat">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
