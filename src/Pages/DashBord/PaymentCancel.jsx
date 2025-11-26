import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4 animate-pulse" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          আপনার পেমেন্ট বাতিল করা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা
          সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন।
        </p>

        <a
          href="/dashbord/my-parcels"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition"
        >
          Back to My Parcels
        </a>
      </div>
    </div>
  );
};

export default PaymentCancel;
