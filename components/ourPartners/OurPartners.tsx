"use client";
import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const OurPartners = () => {
  const sponsorData = [
    "/images/logos/hbcenter.png",
    "/images/logos/hbcenter.png",
    "/images/logos/hbcenter.png",
    "/images/logos/hbcenter.png",
  ];

  return (
    <div className="mb-20">
      <div>
        <SectionHeading
          image="true"
          textBgChild="Together, We Shine Brighter."
          textChild="Avec nos partenaires, nous élevons chaque aspect de votre parcours de bien-être. Découvrez les collaborations qui nourrissent notre excellence"
        >
          OUR PARTNERS
        </SectionHeading>
      </div>
      <div className="flex justify-center mt-8">
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
          }}
        >
          {sponsorData.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                key={index}
                src={imageUrl}
                alt={`Sponsor ${index}`}
                className="w-auto  "
                width={180}
                height={80}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartners;
