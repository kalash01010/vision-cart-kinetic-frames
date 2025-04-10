
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-navy/10 flex items-center justify-center">
            <Eye size={48} className="text-navy" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-navy font-heading mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! We couldn't find the page you're looking for</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you're looking for might have been moved, deleted, or never existed. Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-navy hover:bg-navy/90 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
