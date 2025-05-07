import React from "react";
import { ArrowLeft } from "lucide-react";
import logoHeader from "../../assets/logo_header.png";

export default function PrivacyPolicy({ setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <img src={logoHeader} alt="LauNow Logo" className="h-8 w-auto" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <button
            onClick={() => setPage("home")}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Effective Date: 15.05.2025</p>
          
          <p className="text-gray-700 mb-6">
            At <strong>LauNow</strong>, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy outlines how we collect, use, and protect your data when you use our website or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Personal details: Name, email address, phone number, pickup/delivery addresses.</li>
            <li>Usage data: Browsing activity, IP address, device information.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and maintain our services.</li>
            <li>To communicate updates and respond to inquiries.</li>
            <li>For analytics and service improvement.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Sharing</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We do not sell your personal data.</li>
            <li>We may share data with third-party service providers under strict confidentiality.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Security</h2>
          <p className="text-gray-700">
            We use secure protocols and modern encryption methods to protect your data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
          <p className="text-gray-700">
            You can access, update, or request deletion of your personal data at any time.
          </p>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              For any privacy-related concerns, contact us at{" "}
              <a href="mailto:support@launow.in" className="text-blue-600 hover:text-blue-700">
                support@launow.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 