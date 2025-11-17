import React from "react";
import OSLogo from "../../assets/service.png";

const OurServices = () => {
  return (
    <div className="w-11/12 rounded-xl mx-auto bg-[#03373d] my-6">
      <div className="p-6">
        <div className="text-center w-96 mx-auto">
          <h3 className="text-white font-semibold mb-2 text-3xl">
            Our Services
          </h3>
          <p className="mb-10 text-white text-sm">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white hover:bg-lime-200 flex flex-col items-center text-center w-66 mx-auto space-y-2 p-4 rounded-xl ">
            <img className="w-8 rounded-full  " src={OSLogo} alt="" />
            <h4 className="text-secondary font-semibold">
              Express & Standard Delivery
            </h4>
            <p className="text-gray-500 text-xs">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          {/* -->>>>>>>>> */}
          <div className="bg-white hover:bg-lime-200 flex flex-col items-center text-center w-66 mx-auto space-y-2 p-4 rounded-xl ">
            <img className="w-8 rounded-full  " src={OSLogo} alt="" />
            <h4 className="text-secondary font-semibold">
              Nationwide Delivery
            </h4>
            <p className="text-gray-500 text-xs">
              We deliver parcels nationwide with home delivery in every
              district, ensuring your products reach customers within 48-72
              hours.
            </p>
          </div>
          {/* -->>>>>>>>> */}
          <div className="bg-white hover:bg-lime-200 flex flex-col items-center text-center w-66 mx-auto space-y-2 p-4 rounded-xl ">
            <img className="w-8 rounded-full  " src={OSLogo} alt="" />
            <h4 className="text-secondary font-semibold">
              Fulfillment Solution
            </h4>
            <p className="text-gray-500 text-xs">
              100% cash on delivery anywhere in Bangladesh with guaranteed
              safety of your product.
            </p>
          </div>
          {/* -->>>>>>>>> */}
          <div className="bg-white hover:bg-lime-200 flex flex-col items-center text-center w-66 mx-auto space-y-2 p-4 rounded-xl ">
            <img className="w-8 rounded-full  " src={OSLogo} alt="" />
            <h4 className="text-secondary font-semibold">
              Cash on Home Delivery
            </h4>
            <p className="text-gray-500 text-xs">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          {/* -->>>>>>>>> */}
          <div className="bg-white hover:bg-lime-200 flex flex-col items-center text-center w-66 mx-auto space-y-2 p-4 rounded-xl ">
            <img className="w-8 rounded-full  " src={OSLogo} alt="" />
            <h4 className="text-secondary font-semibold">
              Corporate Service / Contract In Logistics
            </h4>
            <p className="text-gray-500 text-xs">
              Customized corporate services which includes warehouse and
              inventory management support.
            </p>
          </div>
          {/* -->>>>>>>>> */}
          <div className="bg-white hover:bg-lime-200 flex flex-col items-center text-center w-66 mx-auto space-y-2 p-4 rounded-xl ">
            <img className="w-8 rounded-full  " src={OSLogo} alt="" />
            <h4 className="text-secondary font-semibold">Parcel Return</h4>
            <p className="text-gray-500 text-xs">
              Through our reverse logistics facility we allow end customers to
              return or exchange their products with online business merchants.
            </p>
          </div>
          {/* -->>>>>>>>> */}
        </section>
      </div>
    </div>
  );
};

export default OurServices;
