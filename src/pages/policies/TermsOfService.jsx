import React from "react";
import { X } from "lucide-react";
import logoHeader from "../../assets/logo_header.png";

export default function TermsOfService({ setPage }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setPage("home")} />
        
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl">
          <div className="sticky top-0 z-10 bg-white rounded-t-3xl border-b border-gray-200">
            <div className="flex items-center justify-between p-4 md:p-6">
              <div className="flex items-center space-x-3">
                <img src={logoHeader} alt="LauNow Logo" className="h-6 w-auto" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Terms of Service</h2>
              </div>
              <button
                onClick={() => setPage("home")}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="p-4 md:p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-600 mb-6">Effective Date: 15.05.2025</p>
              
              <p className="text-gray-700 mb-6">
                Welcome to <strong>LauNow</strong>! By using our website and services, you agree to the following terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Services</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You must be at least 18 years old or have parental consent to use our services.</li>
                <li>You agree not to misuse our platform or interfere with operations.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Availability</h2>
              <p className="text-gray-700">
                We strive to provide uninterrupted service, but we do not guarantee 100% uptime. 
                Scheduled maintenance or external issues may cause temporary unavailability.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate information when placing orders.</li>
                <li>Ensure someone is available for pickup and delivery at the scheduled time.</li>
                <li>Do not include hazardous materials in your laundry.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700">
                All content, logos, and design elements on the LauNow platform are the property of LauNow 
                and may not be used without permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Termination</h2>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate accounts for violation of these terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 