import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "Story" },
    { id: "mission", label: "Mission" },
    { id: "success", label: "Success" },
    { id: "team", label: "Team & Others" },
  ];

  const content = {
    story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,
    mission: `Our mission is to revolutionize parcel delivery by combining cutting-edge technology with unmatched reliability. We aim to remove every hassle from sending and receiving packages, giving you complete peace of mind from click to delivery.`,
    success: `From a small startup to delivering millions of parcels across the country, our growth is powered by trust. 99.8% on-time delivery rate, 50k+ happy customers, and zero compromises on safety — these numbers tell our success story better than words ever could.`,
    team: `Behind every successful delivery is a team that cares. Our logistics experts, tech innovators, customer support heroes, and delivery partners work 24/7 to keep your promises intact. We’re more than a company — we’re a family on a mission.`,
  };
  return (
    <div className="bg-white p-8 m-8 rounded-2xl w-11/12 mx-auto">
      <div className="border-accent pb-6 border-b">
        <h1 className="text-secondary font-bold text-4xl mb-3">About Us</h1>
        <p className="text-sm">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div>
        {/* Tabs */}
        <div className="tabs tabs-boxed justify-center gap-2 p-1 rounded-xl inline-flex flex-wrap">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab tab-md font-medium transition-all ${
                activeTab === tab.id
                  ? 'tab-active text-green-900 font-bold'
                  : 'text-base-content/60 hover:text-base-content'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-6 text-left">
          <div className="prose prose-lg max-w-none">
            <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
              {content[activeTab]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
