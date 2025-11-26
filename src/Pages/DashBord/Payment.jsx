import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Payment = () => {
  const { isLoading, parcelId } = useParams();
  const axiosSecure = UseAxiosSecure();

  const { data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel?.cost,
      parcelId: parcel?._id,
      senderEmail: parcel?.senderEmail,
      parcelName: parcel?.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-50">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-3">
        Please pay <span className="text-red-500">${parcel?.cost}</span> for :{" "}
        {parcel?.parcelName}
      </h1>
      <div className="text-center mt-5">
        <button onClick={handlePayment} className="btn btn-primary text-black">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
