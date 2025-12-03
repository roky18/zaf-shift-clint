import React from "react";
import useAuth from "../Hooks/useAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CompleteDelivery = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: parcels = [],  } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
      );
      return res.data;
    },
  });

  const calculatePay = (parcel) => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.cost * 0.8;
    } else {
      return parcel.cost * 0.6;
    }
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-3 text-pink-500">
        Complete Delivery task : {parcels.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table text-center table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Pickup district</th>
              <th>Cost</th>
              <th>PayOut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.senderDistrict}</td>
                <td>{parcel.cost}</td>
                <td>{calculatePay(parcel)}</td>
                <td>
                  <button className="btn btn-dash btn-accent">Cash Out</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompleteDelivery;
