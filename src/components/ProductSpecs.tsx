
import React from 'react';
import { ChevronRight, Layers, Shield, PaintBucket, Leaf, PanelLeftOpen, Glasses } from 'lucide-react';

interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const SpecCard = ({ icon, title, description, color, delay }: SpecCardProps) => {
  return (
    <div 
      className="tech-spec-card group hover:scale-[1.02] transition-all duration-500 hover:shadow-lg overflow-hidden relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className={`inline-flex p-3 rounded-lg mb-4 ${color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald group-hover:w-1/2 transition-all duration-500"></span>
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-emerald group-hover:text-navy transition-colors">
        <span className="mr-1 group-hover:mr-2 transition-all duration-300">Learn more</span>
        <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

const ProductSpecs = () => {
  const specs = [
    {
      icon: <Layers className="h-6 w-6 text-white" />,
      title: "Frame Materials",
      description: "Ultra-lightweight titanium, eco-friendly acetate, and flexible memory metal for comfort and durability.",
      color: "bg-sapphire",
      delay: 100
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Lens Technology",
      description: "Advanced blue-light filtering, anti-glare coatings, UV400 protection, and progressive options.",
      color: "bg-emerald",
      delay: 200
    },
    {
      icon: <PanelLeftOpen className="h-6 w-6 text-white" />,
      title: "Customization",
      description: "Wide prescription ranges, adjustable nose pads, and interchangeable frame options for perfect fit.",
      color: "bg-coral",
      delay: 300
    },
    {
      icon: <Glasses className="h-6 w-6 text-white" />,
      title: "Durability",
      description: "Scratch-resistant, waterproof coatings, and impact-tested frames for lasting performance.",
      color: "bg-navy",
      delay: 400
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-white" />,
      title: "Style Options",
      description: "Contemporary designs with metallic finishes, classic patterns, and trendy color options.",
      color: "bg-magenta",
      delay: 500
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Sustainability",
      description: "Ethically sourced, recycled materials and carbon-neutral packaging for eco-conscious consumers.",
      color: "bg-emerald",
      delay: 600
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-2 relative inline-block mx-auto">
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-emerald/10 font-bold uppercase tracking-wider">
            SPECS
          </span>
          Cutting-Edge Specifications
          <span className="block w-20 h-1 bg-gradient-to-r from-emerald to-sapphire mx-auto mt-4"></span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Our eyewear combines the latest materials and technology to provide exceptional comfort, protection, and style.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }} key={index}>
              <SpecCard 
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
                color={spec.color}
                delay={spec.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
