
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const TechnologySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Tech Visual */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-navy/10 to-sapphire/20 rounded-2xl p-8 overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  {/* Layer 1: Base Lens */}
                  <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center justify-center transform transition-all hover:scale-105 hover:shadow-lg">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan/20 to-sapphire/30 mb-4 animate-pulse-slow"></div>
                    <h4 className="font-heading font-semibold text-navy">Base Lens</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">Precision engineered optical foundation</p>
                  </div>
                  
                  {/* Layer 2: UV Protection */}
                  <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center justify-center transform transition-all hover:scale-105 hover:shadow-lg">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow/30 to-coral/20 mb-4 animate-pulse-slow"></div>
                    <h4 className="font-heading font-semibold text-navy">UV Protection</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">100% UV400 blocking technology</p>
                  </div>
                  
                  {/* Layer 3: Blue Light Filter */}
                  <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center justify-center transform transition-all hover:scale-105 hover:shadow-lg">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sapphire/30 to-navy/20 mb-4 animate-pulse-slow"></div>
                    <h4 className="font-heading font-semibold text-navy">Blue Light Filter</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">Digital strain reduction system</p>
                  </div>
                  
                  {/* Layer 4: Anti-Glare */}
                  <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center justify-center transform transition-all hover:scale-105 hover:shadow-lg">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-silver/30 to-gray-300/30 mb-4 animate-pulse-slow"></div>
                    <h4 className="font-heading font-semibold text-navy">Anti-Glare</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">Clarity enhancing coating technology</p>
                  </div>
                </div>
              </div>
              
              {/* Animated element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-cyan to-sapphire opacity-20 blur-xl animate-spin-slow"></div>
            </div>
          </div>
          
          {/* Tech Description */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="section-title mb-6">Advanced Lens Technology</h2>
            <p className="text-gray-600 mb-6">
              Our multi-layered lens technology combines several protective and enhancing elements to deliver the perfect vision experience:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-emerald text-white p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy">Smart Adaptive Tinting</h4>
                  <p className="text-sm text-gray-600">Automatically adjusts lens darkness based on ambient light conditions.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-emerald text-white p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy">Hydrophobic Coating</h4>
                  <p className="text-sm text-gray-600">Repels water, preventing droplets from obscuring your vision.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-emerald text-white p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy">Anti-Reflection System</h4>
                  <p className="text-sm text-gray-600">Eliminates annoying reflections for better night driving and screen use.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-emerald text-white p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-navy">Scratch-Resistant Layer</h4>
                  <p className="text-sm text-gray-600">Durable coating that protects against daily wear and extends lens life.</p>
                </div>
              </li>
            </ul>
            
            <Button className="btn-primary flex items-center">
              <span>Explore our technology</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
