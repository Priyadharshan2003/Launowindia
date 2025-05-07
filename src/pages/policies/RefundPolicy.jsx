import React, { useEffect } from "react";
import { X } from "lucide-react";
import logoHeader from "../../assets/logo_header.png";

export default function RefundPolicy({ setPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl flex flex-col" style={{ minHeight: '60vh' }}>
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img src={logoHeader} alt="LauNow Logo" className="h-6 w-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Refund Policy</h2>
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
              At <strong>LauNow</strong>, customer satisfaction is our priority. Our refund policy is designed 
              to ensure fairness and transparency.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Eligibility for Refund</h2>
            <p className="text-gray-700 mb-4">You may be eligible for a full or partial refund if:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The laundry is lost or damaged beyond acceptable limits.</li>
              <li>The order was not picked up or delivered due to our error.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How to Request a Refund</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Submit a refund request within <strong>48 hours</strong> of delivery.</li>
              <li>Email us at{" "}
                <a href="mailto:support@launow.com" className="text-blue-600 hover:text-blue-700">
                  support@launow.com
                </a>{" "}
                with your order ID and a brief explanation.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Non-Refundable Situations</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Incorrect pickup address or unattended delivery location.</li>
              <li>Stains or damage resulting from improper garment labeling.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Refund Method</h2>
            <p className="text-gray-700">
              Approved refunds will be processed within <strong>5-7 business days</strong> to your original payment method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 