import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDubble = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDubble)];
  //explore useMemo useCallback
  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApp = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title:
            "Your application has been submitted. we will contact to you in 7 days",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto bg-white p-3">
      <h2 className="text-4xl text-secondary font-bold text-center my-5">
        Be A Rider
      </h2>
      <form className="mt-12 p-4" onSubmit={handleSubmit(handleRiderApp)}>
        {/* tow column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>
            {/* Rider name */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("name")}
              className="input w-full"
              placeholder="Sender Name"
              defaultValue={user?.displayName}
            />
            {/* Rider Email */}
            <label className="label">Email</label>
            <input
              type="text"
              {...register("email")}
              className="input w-full"
              placeholder="Sender Email"
              defaultValue={user?.email}
            />
            {/* Rider regieon */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Regions</legend>
              <select
                {...register("region")}
                defaultValue="Pick a Regions"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>

                {regions.map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Rider district */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Districts</legend>
              <select
                {...register("district")}
                defaultValue="Pick a District"
                className="select"
              >
                <option disabled={true}>Pick a District</option>

                {districtByRegion(riderRegion).map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Rider address */}
            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              {...register("address")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>
          <div>
            {/* More Details */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">More Details</h4>
              {/* Driving License */}
              <label className="label">Driving License</label>
              <input
                type="text"
                {...register("license")}
                className="input w-full"
                placeholder="Driving License"
              />

              {/* Rider NID */}
              <label className="label">NID</label>
              <input
                type="text"
                {...register("riderNID")}
                className="input w-full"
                placeholder="NID"
              />

              {/* Bike info */}
              <label className="label mt-4">BIKE</label>
              <input
                type="text"
                {...register("bike")}
                className="input w-full"
                placeholder="Bike reg.No."
              />
              {/* Biker Phone no */}
              <label className="label mt-4">Rider Mobile No.</label>
              <input
                type="text"
                {...register("ReceiverPhoneNo")}
                className="input w-full"
                placeholder="Rider Mobile No."
              />
            </fieldset>
          </div>
        </div>
        <input
          type="Submit"
          className="btn btn-primary w-full mt-8 text-black"
          value="Apply as a Rider"
        />
      </form>
    </div>
  );
};

export default Rider;
