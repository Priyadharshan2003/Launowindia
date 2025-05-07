import React from "react";
import { ArrowLeft } from "lucide-react";
import logoHeader from "../../assets/logo_header.png";

export default function TermsOfService({ setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <img src={logoHeader} alt="LauNow Logo" className="h-8 w-auto" />
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
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
  );
} 