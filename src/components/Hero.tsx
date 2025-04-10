
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient text-white min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-rosegold/5 to-magenta/5 rounded-full filter blur-xl"></div>
        
        {/* Animated elements */}
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-yellow/30 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-coral/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-cyan/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-in">
              See Better, <br />
              <span className="text-coral">Live Brighter</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover premium eyewear that combines cutting-edge technology with stylish design at Vision Cart, 
              where vision meets innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-6 rounded-md flex items-center text-lg">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-md flex items-center text-lg">
                Book Eye Test
              </Button>
            </div>
            
            <div className="mt-12 flex items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex -space-x-4 mr-4">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80")' }}></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")' }}></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")' }}></div>
              </div>
              
              <div>
                <p className="font-medium">Trusted by 2000+ customers</p>
                <div className="flex text-yellow mt-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 lg:pl-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=100" 
                  alt="Premium eyewear from Vision Cart" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating detail cards */}
              <div className="absolute -bottom-8 -left-8 bg-white text-navy rounded-lg p-4 shadow-lg max-w-[200px] animate-zoom-in" style={{ animationDelay: "0.7s" }}>
                <h4 className="font-heading font-semibold mb-2">Blue Light Protection</h4>
                <p className="text-sm text-gray-600">Reduce eye strain with our advanced filtering technology</p>
                <a href="#" className="flex items-center text-sm font-medium text-emerald mt-2">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white text-navy rounded-lg p-4 shadow-lg max-w-[200px] animate-zoom-in" style={{ animationDelay: "0.9s" }}>
                <h4 className="font-heading font-semibold mb-2">Ultra-Light Frames</h4>
                <p className="text-sm text-gray-600">Comfortable all day with our titanium frame technology</p>
                <a href="#" className="flex items-center text-sm font-medium text-emerald mt-2">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
