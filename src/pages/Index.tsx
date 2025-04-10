
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ProductSpecs from '@/components/ProductSpecs';
import TechnologySection from '@/components/TechnologySection';
import CollectionPreview from '@/components/CollectionPreview';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <ProductSpecs />
        <TechnologySection />
        <CollectionPreview />
        <TestimonialSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
