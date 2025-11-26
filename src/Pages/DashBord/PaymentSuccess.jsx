import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "react-router";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();

  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p>Your Transaction ID : {paymentInfo?.transactionId}</p>
        <p>Your Tracking ID : {paymentInfo?.trackingId}</p>

        <p className="text-gray-600 mb-6">
          আপনার পেমেন্ট সফলভাবে সম্পন্ন হয়েছে। আমরা শীঘ্রই আপনার পার্সেল
          প্রসেসিং শুরু করবো।
        </p>

        <a
          href="/dashbord/my-parcels"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition"
        >
          Go to My Parcels
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
