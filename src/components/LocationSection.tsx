
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Visit Our Store</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Come experience our premium eyewear collection in person at our store in Rampur, Uttar Pradesh.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Store Information */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-semibold mb-6">Store Information</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <MapPin className="h-6 w-6 text-emerald mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg">Address</h4>
                  <p className="text-gray-600">
                    Vision Cart<br />
                    Main Market, Civil Lines<br />
                    Rampur, Uttar Pradesh 244901<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-6 w-6 text-emerald mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-6 w-6 text-emerald mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-600">info@visioncart.com</p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-emerald mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg">Opening Hours</h4>
                  <table className="w-full text-gray-600">
                    <tbody>
                      <tr>
                        <td className="py-1">Monday - Friday</td>
                        <td className="py-1">10:00 AM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Saturday</td>
                        <td className="py-1">10:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sunday</td>
                        <td className="py-1">11:00 AM - 6:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-navy/5 p-4 rounded-lg">
              <h4 className="font-medium">Owner</h4>
              <p className="text-navy">Ankit Srivastava</p>
            </div>
          </div>
          
          {/* Map */}
          <div className="w-full lg:w-2/3">
            <div className="h-full rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56121.13566917914!2d79.00956312934394!3d28.809011551707916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbea3af2bdc7%3A0xf463541b87a99b2d!2sRampur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714823136557!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
