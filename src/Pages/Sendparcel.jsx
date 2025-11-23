import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useAuth from "../Hooks/useAuth";

const Sendparcel = () => {
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
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regieonDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regieonDistrict.map((d) => d.district);
    return districts;
  };
  console.log(regions);

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log("Total khoros hobe", cost);

    Swal.fire({
      title: "Are You Agree with the Cosssst?",
      text: `You will be Charged ${cost} Taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i take it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info into DAtabase

        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saveing parcel", res.data);
        });
        // ---working >>>>>>
        // Swal.fire({
        //   title: "Congratulation!",
        //   text: "Your Oder has been Confirmed.",
        //   icon: "success",
        // });
      }
    });
  };
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
              defaultValue={user?.displayName}
            />
            {/* sender Email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("SenderEmail")}
              className="input w-full"
              placeholder="Sender Email"
              defaultValue={user?.email}
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

              {/* Receiver Regions */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
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

              {/* Receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>

                  {districtByRegion(receiverRegion).map((d, index) => (
                    <option value={d} key={index}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

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
          className="btn btn-primary w-full mt-8 text-black"
          value="send Parcel"
        />
      </form>
    </div>
  );
};

export default Sendparcel;
