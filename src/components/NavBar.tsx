import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-40 h-12 transition-all duration-300 hover:scale-105">
            <span className="text-xl font-bold text-navy dark:text-white">Vision Cart</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            <Link to="/" className="font-medium hover:text-emerald transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/collection" className="font-medium hover:text-emerald transition-colors relative group">
              Collection
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/technology" className="font-medium hover:text-emerald transition-colors relative group">
              Technology
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="font-medium hover:text-emerald transition-colors relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="font-medium hover:text-emerald transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="rounded-full p-2 hover:bg-navy/10 dark:hover:bg-white/10 transition-all duration-300">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-navy hover:bg-navy/90 hover:scale-105 transition-transform duration-300 dark:bg-emerald dark:hover:bg-emerald/90">
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-navy/95 shadow-lg p-4 space-y-3 animate-fade-in backdrop-blur-md">
          <Link to="/" className="block py-2 hover:text-emerald transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/collection" className="block py-2 hover:text-emerald transition-colors" onClick={() => setIsMenuOpen(false)}>
            Collection
          </Link>
          <Link to="/technology" className="block py-2 hover:text-emerald transition-colors" onClick={() => setIsMenuOpen(false)}>
            Technology
          </Link>
          <Link to="/about" className="block py-2 hover:text-emerald transition-colors" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="block py-2 hover:text-emerald transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="pt-3 flex flex-col space-y-3">
            <Button variant="outline" className="flex items-center justify-center space-x-2 dark:border-white/20 dark:bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Button>
            <Button className="bg-navy hover:bg-navy/90 dark:bg-emerald dark:hover:bg-emerald/90">Book Appointment</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
