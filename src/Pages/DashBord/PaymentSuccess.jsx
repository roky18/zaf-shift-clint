import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          আপনার পেমেন্ট সফলভাবে সম্পন্ন হয়েছে।  
          আমরা শীঘ্রই আপনার পার্সেল প্রসেসিং শুরু করবো।
        </p>

        <a
          href="/"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition"
        >
          Go to HOME
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
