import React from "react";
import { Award, Users, Lightbulb, Star } from "lucide-react";
import logoHeader from "../assets/logo_header.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center text-center">
        <img src={logoHeader} alt="LauNow Logo" className="h-16 w-auto mb-6" />
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">About Us</h1>
        <div className="flex items-center justify-center mb-4">
          <Award className="text-yellow-500 mr-2" size={32} />
          <span className="text-lg font-semibold text-gray-700">Award-Winning Startup</span>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          LauNow is a student-founded startup revolutionizing the way laundry services are accessed and experienced. Established by four passionate Electronics and Communication Engineering graduates — <span className="font-semibold text-blue-600">Surya Narayanan C S</span>, <span className="font-semibold text-blue-600">Rithvikailas G</span>, <span className="font-semibold text-blue-600">Priyadharshan C</span> — LauNow was born from a shared vision to make laundry simple, smart, and accessible for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Users className="text-blue-500 mb-2" size={32} />
            <span className="font-semibold text-gray-800">Student-Founded</span>
            <span className="text-sm text-gray-500">By ECE graduates</span>
          </div>
          <div className="flex flex-col items-center">
            <Lightbulb className="text-indigo-500 mb-2" size={32} />
            <span className="font-semibold text-gray-800">Tech-Driven</span>
            <span className="text-sm text-gray-500">Modern, smart, seamless</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="text-yellow-400 mb-2" size={32} />
            <span className="font-semibold text-gray-800">Service Excellence</span>
            <span className="text-sm text-gray-500">Customer-first approach</span>
          </div>
        </div>
        <p className="text-md text-gray-700 mb-4">
          As a team of tech-driven innovators, we aim to bridge the gap between traditional laundry methods and modern convenience. With a focus on user-friendly interfaces, transparent pricing, and timely service, LauNow delivers a seamless experience right from scheduling to doorstep delivery.
        </p>
        <p className="text-md text-gray-700 mb-6">
          Backed by engineering insight and a commitment to service excellence, we believe in combining technology and practicality to bring clean clothes and customer satisfaction to your doorstep — every time.
        </p>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-6 py-4 font-bold text-xl shadow-lg">
          Welcome to LauNow — Laundry. Now. Smarter.
        </div>
      </div>
    </div>
  );
}
