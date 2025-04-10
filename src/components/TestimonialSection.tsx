
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
  rating: number;
}

const Testimonial = ({ content, author, role, imageUrl, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <Quote className="text-emerald h-8 w-8 opacity-50" />
        <div className="flex text-yellow">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">{content}</p>
      
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
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
    },
    {
      content: "The staff at Vision Cart were incredibly helpful in finding the perfect frames for my face shape. The prescription is spot on!",
      author: "Rahul Mehta",
      role: "Marketing Executive",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
    },
    {
      content: "I love my new sunglasses from Vision Cart! The polarized lenses make driving so much safer, and they look stylish too.",
      author: "Aisha Khan",
      role: "Travel Blogger",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Hear from our satisfied customers about their experience with Vision Cart.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
