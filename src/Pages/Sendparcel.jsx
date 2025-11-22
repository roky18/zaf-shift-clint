import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const Sendparcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDubble = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDubble)];
  const senderRegion = watch("senderRegion");

  const districtByRegion = (region) => {
    const regieonDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regieonDistrict.map((d) => d.district);
    return districts;
  };
  console.log(regions);

  const handleSendParcel = (data) => {};
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form className="mt-12 p-4" onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="Document"
              className="radio"
              defaultChecked
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="Non-Document"
              className="radio"
            />{" "}
            Non-Document
          </label>
        </div>
        {/* parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (Kg)</label>
            <input
              type="text"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        {/* tow column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("SenderName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender Email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("SenderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />
            {/* sender regieon */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a Regions"
                className="select"
              >
                <option disabled={true}>Pick a Regions</option>

                {regions.map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender distric */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option disabled={true}>Pick a District</option>

                {districtByRegion(senderRegion).map((r, index) => (
                  <option value={r} key={index}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("SenderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* sender Phone no */}
            <label className="label mt-4">Sender Phone No</label>
            <input
              type="text"
              {...register("SenderPhoneNo")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            {/* sender Instruction */}
            <label className="label mt-4">Pickup Instruction</label>
            <textarea
              {...register("PickupInstruction")}
              className="input w-full h-25"
              placeholder="Pickup Instruction"
              rows={4}
            ></textarea>
          </fieldset>
          <div>
            {/* receiver Details */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Receiver Details</h4>
              {/* receiver Name */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("ReceiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />

              {/* Receiver Email */}
              <label className="label">Receiver Email</label>
              <input
                type="text"
                {...register("ReceiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
              {/* Receiver address */}
              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                {...register("ReceiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
              {/* Receiver Phone no */}
              <label className="label mt-4">Receiver Phone No</label>
              <input
                type="text"
                {...register("ReceiverPhoneNo")}
                className="input w-full"
                placeholder="Receiver Phone No"
              />
              {/* Receiver distric */}
              <label className="label mt-4">Receiver District</label>
              <input
                type="text"
                {...register("ReceiverDistrict")}
                className="input w-full"
                placeholder="Receiver District "
              />
              {/* Receiver Instrutcion */}
              <label className="label mt-4">Pickup Instruction</label>
              <textarea
                {...register("PickupInstruction")}
                className="input w-full h-25"
                placeholder="Pickup Instruction"
                rows={4}
              ></textarea>
            </fieldset>
          </div>
        </div>
        <input
          type="Submit"
          className="btn btn-primary text-black"
          value="send Parcel"
        />
      </form>
    </div>
  );
};

export default Sendparcel;
