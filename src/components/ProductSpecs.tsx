
import React from 'react';
import { ChevronRight, Layers, Shield, PaintBucket, Leaf, PanelLeftOpen, Glasses } from 'lucide-react';

interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SpecCard = ({ icon, title, description, color }: SpecCardProps) => {
  return (
    <div className="tech-spec-card group hover:scale-[1.02] transition-all">
      <div className={`inline-flex p-3 rounded-lg mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-emerald group-hover:text-navy transition-colors">
        <span>Learn more</span>
        <ChevronRight size={16} className="ml-1" />
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
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Lens Technology",
      description: "Advanced blue-light filtering, anti-glare coatings, UV400 protection, and progressive options.",
      color: "bg-emerald",
    },
    {
      icon: <PanelLeftOpen className="h-6 w-6 text-white" />,
      title: "Customization",
      description: "Wide prescription ranges, adjustable nose pads, and interchangeable frame options for perfect fit.",
      color: "bg-coral",
    },
    {
      icon: <Glasses className="h-6 w-6 text-white" />,
      title: "Durability",
      description: "Scratch-resistant, waterproof coatings, and impact-tested frames for lasting performance.",
      color: "bg-navy",
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-white" />,
      title: "Style Options",
      description: "Contemporary designs with metallic finishes, classic patterns, and trendy color options.",
      color: "bg-magenta",
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Sustainability",
      description: "Ethically sourced, recycled materials and carbon-neutral packaging for eco-conscious consumers.",
      color: "bg-emerald",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Cutting-Edge Specifications</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our eyewear combines the latest materials and technology to provide exceptional comfort, protection, and style.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <SpecCard 
              key={index}
              icon={spec.icon}
              title={spec.title}
              description={spec.description}
              color={spec.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
