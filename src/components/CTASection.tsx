
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-sapphire opacity-90 z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 w-60 h-60 bg-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-60 h-60 bg-magenta/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience Better Vision?
          </h2>
          
          <p className="text-lg text-white/80 mb-8">
            Book your comprehensive eye examination today and discover the perfect eyewear solution for your needs.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-coral" />
                <div className="text-left">
                  <p className="text-sm text-white/70">Store Location</p>
                  <p className="font-medium">Rampur, Uttar Pradesh</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 flex items-center">
                <Clock className="h-5 w-5 mr-3 text-coral" />
                <div className="text-left">
                  <p className="text-sm text-white/70">Opening Hours</p>
                  <p className="font-medium">10:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="hidden lg:flex bg-white/10 rounded-lg p-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-white/70">Contact Number</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-6 rounded-md text-lg">
              <span>Book Appointment Now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-white/60 text-sm">
            Walk-ins welcome, but appointments are recommended for comprehensive eye exams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
