
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
  rating: number;
  delay: number;
}

const Testimonial = ({ content, author, role, imageUrl, rating, delay }: TestimonialProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-500 group hover:scale-[1.02] animate-fade-in relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="flex justify-between items-start mb-6 relative">
        <Quote className="text-emerald h-8 w-8 opacity-50 transform group-hover:scale-110 transition-all duration-300" />
        <div className="flex text-yellow">
          {[...Array(rating)].map((_, i) => (
            <span 
              key={i} 
              className="transform transition-transform duration-300" 
              style={{ animationDelay: `${i * 100}ms` }}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 relative">
        <span className="absolute -left-1 top-0 text-5xl text-emerald/5 font-serif">"</span>
        <span className="relative z-10">{content}</span>
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-emerald transition-all duration-300 shadow-sm">
          <img 
            src={imageUrl} 
            alt={author} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "These are the most comfortable frames I've ever owned. The blue light filtering has significantly reduced my eye strain during long work hours.",
      author: "Priya Sharma",
      role: "Software Developer",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      delay: 100
    },
    {
      content: "The staff at Vision Cart were incredibly helpful in finding the perfect frames for my face shape. The prescription is spot on!",
      author: "Rahul Mehta",
      role: "Marketing Executive",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      delay: 300
    },
    {
      content: "I love my new sunglasses from Vision Cart! The polarized lenses make driving so much safer, and they look stylish too.",
      author: "Aisha Khan",
      role: "Travel Blogger",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 4,
      delay: 500
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm px-3 py-1 bg-emerald/10 text-emerald rounded-full mb-4 animate-pulse-slow">
            TESTIMONIALS
          </span>
          <h2 className="section-title text-center mb-2">
            What Our Customers Say
            <span className="block w-20 h-1 bg-gradient-to-r from-coral to-emerald mx-auto mt-4"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers about their experience with Vision Cart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
