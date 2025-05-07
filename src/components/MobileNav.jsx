import React from "react";
import { X, MoveRight } from "lucide-react";
import logoHeader from "../assets/logo_header.png";

const MobileNav = ({ isOpen, onClose, setPage, handleWhatsApp }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <img src={logoHeader} alt="LauNow Logo" className="h-8 w-auto" />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-700 hover:text-blue-600 py-2"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-700 hover:text-blue-600 py-2"
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-700 hover:text-blue-600 py-2"
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-700 hover:text-blue-600 py-2"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  setPage("about");
                }}
                className="block text-gray-700 hover:text-blue-600 py-2"
              >
                About Us
              </a>
            </li>
            <li>
              <button 
                onClick={() => {
                  onClose();
                  handleWhatsApp();
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Book on WhatsApp</span>
                <MoveRight size={16} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav; 