import React, { useEffect } from "react";
import { X } from "lucide-react";
import logoHeader from "../../assets/logo_header.png";

export default function PrivacyPolicy({ setPage }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl max-h-[90vh] flex flex-col">
          {/* Header - Fixed */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img src={logoHeader} alt="LauNow Logo" className="h-6 w-auto" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <button
              onClick={() => setPage("home")}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
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
      </div>
    </div>
  );
} 