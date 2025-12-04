import React from "react";
import { useParams } from "react-router";
import UseAxios from "../Hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { FcCheckmark } from "react-icons/fc";

const ParcelTrack = () => {
  const { trackingId } = useParams();

  const axiosInstance = UseAxios();

  const { data: trackings = [] } = useQuery({
    queryKey: ["tracking", trackingId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`);
      return res.data;
    },
  });
  console.log(trackings);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-3xl text-center my-3 text-pink-500">
        Track your package : {trackingId}
      </h1>
      <p>Logs so far : {trackings.length}</p>

      <ul className="timeline timeline-vertical">
        {trackings.map((track) => (
          <li key={track._id}>
            <div className="timeline-start">
              {new Date(track.createdAt).toLocaleString()}
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <FcCheckmark />
              </svg>
            </div>
            <div className="timeline-end font-bold text-xl text-green-800 timeline-box">{track.details}</div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParcelTrack;
