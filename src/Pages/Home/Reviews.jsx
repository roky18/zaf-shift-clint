import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-center">
        <h3 className="text-3xl text-center">Review</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quae esse labore mollitia corporis fuga ullam repellendus quibusdam?
          Tempore, eaque! Adipisci enim quis tempora ea sunt inventore
          consectetur recusandae vel.
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="max-w-md mx-auto mt-20">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                {/* Quote Icon */}
                <div className="text-left mb-6">
                  <span className="text-6xl text-teal-500 font-serif leading-none">
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 pl-2">
                  {review.review}
                </blockquote>

                {/* Author Section */}
                <div className="flex items-center gap-4">
                  <div className=" rounded-full flex items-center justify-center text-white font-bold text-xl">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={review.user_photoURL}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {review.userName}
                    </p>
                    <p className="text-sm text-gray-500">
                      Senior Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
