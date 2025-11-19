import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coordPosition = [district.latitude, district.longitude];
      mapRef.current.flyTo(coordPosition, 14);
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-5xl">We are available in 64 Districts</h2>
      {/* search */}
      <div className="my-8">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      {/* map */}
      <div className="border-2 shadow-2xl m-6 mx-auto w-full h-[800px]">
        <MapContainer
          className="h-[800px]"
          center={position}
          zoom={9}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((servic, index) => (
            <Marker key={index} position={[servic.latitude, servic.longitude]}>
              <Popup>
                <strong>{servic.district}</strong> <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
