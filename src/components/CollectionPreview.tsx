
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  imageUrl: string;
  category: string;
  price: string;
  colors: string[];
}

const ProductCard = ({ name, imageUrl, category, price, colors }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-4 aspect-[4/3]">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <Button variant="secondary" className="w-full bg-white/90 backdrop-blur-sm text-navy hover:bg-white">
              Quick View
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">{category}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{price}</p>
          <div className="flex space-x-1">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className={`w-4 h-4 rounded-full border border-gray-200`} 
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionPreview = () => {
  const products = [
    {
      name: "Titanium Aviator",
      imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Sunglasses",
      price: "₹4,999",
      colors: ["#222", "#8B5CF6", "#0EA5E9"],
    },
    {
      name: "Eco Acetate Round",
      imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Optical",
      price: "₹3,499",
      colors: ["#4A044E", "#D97706", "#059669"],
    },
    {
      name: "Sport Shield",
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Sport",
      price: "₹5,999",
      colors: ["#000", "#DC2626", "#2563EB"],
    },
    {
      name: "Classic Wayfarer",
      imageUrl: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Sunglasses",
      price: "₹3,999",
      colors: ["#1E3A8A", "#7C2D12", "#000"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="section-title mb-2">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our curated selection of premium eyewear, combining style, comfort, and cutting-edge lens technology.
            </p>
          </div>
          <Button variant="link" className="text-emerald flex items-center mt-4 md:mt-0 hover:text-navy">
            View all collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              imageUrl={product.imageUrl}
              category={product.category}
              price={product.price}
              colors={product.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
