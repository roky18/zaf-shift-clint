import React from "react";
import TrDel_img1 from "../../assets/live-tracking.png";
import TrDel_img2 from "../../assets/safe-delivery.png";

const PercelDeleverySupport = () => {
  return (
    <div className="w-10/12 mx-auto mb-10">
      <section className=" w-auto mx-auto grid grid-cols-1  gap-4">
        <div className="bg-white flex gap-6 justify-start items-center w-full space-y-2 p-4 rounded-xl ">
          <img className="w-25 pr-5 border-r-2 border-dashed" src={TrDel_img1} alt="" />
          <aside>
            <h4 className="text-secondary font-semibold">
              Booking Pick & Drop
            </h4>
            <p className="text-gray-500 text-xs">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </aside>
        </div>
        <div className="bg-white flex gap-6 justify-start items-center w-full space-y-2 p-4 rounded-xl ">
          <img className="w-25 pr-5 border-r-2 border-dashed" src={TrDel_img2} alt="" />
          <aside>
            <h4 className="text-secondary font-semibold">Cash On Delivery</h4>
            <p className="text-gray-500 text-xs">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </aside>
        </div>
        <div className="bg-white flex gap-6 justify-start items-center w-full space-y-2 p-4 rounded-xl ">
          <img className="w-25 pr-5 border-r-2 border-dashed" src={TrDel_img2} alt="" />
          <aside>
            <h4 className="text-secondary font-semibold">Delivery Hub</h4>
            <p className="text-gray-500 text-xs">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default PercelDeleverySupport;
