import React from "react";
import HIWLogo from "../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="w-10/12 mx-auto my-6">
      <h3 className="text-secondary font-semibold mb-10 text-3xl">
        How it Works
      </h3>
      <section className=" w-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white w-66 mx-auto space-y-2 p-4 rounded-xl ">
          <img className="w-8" src={HIWLogo} alt="" />
          <h4 className="text-secondary font-semibold">Booking Pick & Drop</h4>
          <p className="text-gray-500 text-xs">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white w-66 mx-auto space-y-2 p-4 rounded-xl ">
          <img className="w-8" src={HIWLogo} alt="" />
          <h4 className="text-secondary font-semibold">Cash On Delivery</h4>
          <p className="text-gray-500 text-xs">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white w-66 mx-auto space-y-2 p-4 rounded-xl ">
          <img className="w-8" src={HIWLogo} alt="" />
          <h4 className="text-secondary font-semibold">Delivery Hub</h4>
          <p className="text-gray-500 text-xs">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white w-66 mx-auto space-y-2 p-4 rounded-xl ">
          <img className="w-8" src={HIWLogo} alt="" />
          <h4 className="text-secondary font-semibold">
            Booking SME & Corporate
          </h4>
          <p className="text-gray-500 text-xs">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
