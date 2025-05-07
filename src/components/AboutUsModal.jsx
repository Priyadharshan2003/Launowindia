import React, { useState } from "react";
import { X, Award, Users, Lightbulb, Star, Linkedin, Instagram, ChevronDown } from "lucide-react";
import logoHeader from "../assets/logo_header.png";
import suryaImage from "../assets/surya.jpg";
import rithvikImage from "../assets/ritivk.jpg";
import priyadharshanImage from "../assets/priyadharshan.png";
import yogesh from "../assets/yogesh.jpg";
import navina from "../assets/navina.png";

const AboutUsModal = ({ isOpen, onClose }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  if (!isOpen) return null;

  const founders = [
    {
      name: "Surya Narayanan C S",
      role: "Co-Founder & CEO",
      image: suryaImage,
      linkedin: "https://www.linkedin.com/in/suryacssn/",
      instagram: "https://www.instagram.com/surya._.spells?igsh=MTdqZ3I1bDZ5djd6bg=="
    },
    {
      name: "Rithvikailas G",
      role: "Co-Founder & CTO",
      image: rithvikImage,
      linkedin: "https://www.linkedin.com/in/rithvikailas-gunasekaran/",
      instagram: "https://www.instagram.com/rithvikailas?igsh=ZzY1cGlzZzg2YWE1"
    },
    {
      name: "Priyadharshan C",
      role: "Co-Founder & COO",
      image: priyadharshanImage,
      linkedin: "https://www.linkedin.com/in/priyadharshan-chandranath/",
      instagram: "https://www.instagram.com/priyadharshan_chandranath?igsh=dGZsaTZ4eDU1cHQw"
    },
    {
      name: "Yogeshwaran G",
      role: "Founding Member",
      image: yogesh,
      linkedin: "https://www.linkedin.com/in/yogeshwaran-g-7a19122b3/",
      instagram: "https://www.instagram.com/yogesh_12x2?utm_source=qr&igsh=MXN1dDZ2ZnRtNHg4Zw=="
    },
    {
      name: "Navina Tharsini Jeyakumar",
      role: "Founding Member",
      image: navina,
      linkedin: "https://www.linkedin.com/in/navina-tharsini-jeyakumar-36475221b/",
      instagram: "https://www.instagram.com/navina_jk?igsh=MTRuaW4wZGw0ZHU5Zw=="
    }
  ];

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    setShowScrollIndicator(scrollTop < 50);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onScroll={handleScroll}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-2xl z-10 backdrop-blur-sm bg-white/90">
          <div className="flex items-center space-x-3">
            <img src={logoHeader} alt="Launow" className="h-8 w-auto" />
            <h2 className="text-2xl font-bold text-gray-900">About Launow</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={24} />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl transform hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize laundry services by making them accessible, efficient, and eco-friendly, 
                while providing exceptional value to our customers through innovative technology and 
                sustainable practices.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl transform hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and preferred laundry service provider in India, 
                known for our commitment to quality, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-blue-500 mb-3" size={32} />
              <h4 className="font-semibold text-gray-800">Student-Founded</h4>
              <p className="text-sm text-gray-600">By ECE graduates</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="text-indigo-500 mb-3" size={32} />
              <h4 className="font-semibold text-gray-800">Tech-Driven</h4>
              <p className="text-sm text-gray-600">Modern, smart, seamless</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Star className="text-yellow-400 mb-3" size={32} />
              <h4 className="font-semibold text-gray-800">Service Excellence</h4>
              <p className="text-sm text-gray-600">Customer-first approach</p>
            </div>
          </div>

          {/* Founders */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Founders</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {founders.map((founder, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100 relative">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150?text=Founder";
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{founder.name}</h4>
                  <p className="text-blue-600 mb-4">{founder.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                      title="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-600 transition-colors p-2 hover:bg-pink-50 rounded-full"
                      title="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Description */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 transform hover:scale-[1.02] transition-transform">
            <p className="text-lg">
              LauNow is a student-founded startup revolutionizing the way laundry services are accessed 
              and experienced. Established by passionate Electronics and Communication Engineering 
              graduates, LauNow was born from a shared vision to make laundry simple, smart, and 
              accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal; 