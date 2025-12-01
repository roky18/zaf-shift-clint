import React, { useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // Modal related-->

  const [openModal, setOpenModal] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);
  // --------->>>>

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Rider is ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  // delete------>>>
  const handleRiderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: " Delete this Rider!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data--->>
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // ------>>>

  return (
    <div>
      <h2 className="text-5xl text-center font-semibold my-5">
        Riders Pending Approval: {riders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.workStatus}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedRider(rider);
                      setOpenModal(true);
                    }}
                    className="btn btn-soft btn-accent mr-3"
                  >
                    <FaEye></FaEye>
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-soft btn-info"
                  >
                    <FaUserCheck></FaUserCheck>
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn btn-soft btn-secondary mx-3"
                  >
                    <IoPersonRemoveSharp></IoPersonRemoveSharp>
                  </button>
                  <button
                    onClick={() => handleRiderDelete(rider._id)}
                    className="btn btn-soft btn-error"
                  >
                    <FaTrashCan></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* //Modal ------>>> */}

      {openModal && (
        <dialog className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <h3 className="font-bold text-center text-3xl">Rider Details</h3>
            <div className="text-center text-xl mt-6">
              <p className="py-2">
                <strong>Name:</strong> {selectedRider?.name}
              </p>
              <p className="py-2">
                <strong>Email:</strong> {selectedRider?.email}
              </p>
              <p className="py-2">
                <strong>District:</strong> {selectedRider?.district}
              </p>
              <p className="py-2">
                <strong>Status:</strong> {selectedRider?.status}
              </p>
            </div>
            <div className="modal-action">
              <button onClick={() => setOpenModal(false)} className="btn ">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
      {/* // ------>>> */}
    </div>
  );
};

export default ApproveRider;
