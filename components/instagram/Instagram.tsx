"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import InstagramPostCard from "./InstagramPostCard";
import Image from "next/image";
import SectionHeading from "../sectionHeading/SectionHeading";

const posts = [
  {
    image: "/images/instagram/post1.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    callToAction: {
      title: "savoir plus",
      link: "#",
    },
  },
  {
    image: "/images/instagram/post2.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    callToAction: {
      title: "savoir plus",
      link: "#",
    },
  },
  {
    image: "/images/instagram/post3.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    callToAction: {
      title: "savoir plus",
      link: "#",
    },
  },
];

const Instagram = () => {
  return (
    <>
      <div id="blog" className="">
        <SectionHeading
          textBgChild={<>Health's Heartbeat: Dive Deep,</>}
          textBgChild1="Stay Updated, Surge Ahead"
          image="true"
        >
          OUR BLOG
        </SectionHeading>
      </div>

      <div className="cContainer  mb-12 space-y-10 lg:mt-16 mt-8">
        <section className="grid grid-cols-12 gap-4 items-center">
          {/* title */}

          <div className="lg:col-span-1 col-span-12 flex justify-center items-center swiper-custom-prevEl">
            <div>
              <Image
                src="/icons/instagramArrowUp.svg"
                width={60}
                height={60}
                alt="arrow"
                className="text-white lg:-rotate-90"
              />
            </div>
          </div>
          <div className="lg:col-span-10 col-span-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={70}
              modules={[Pagination, Navigation]}
              navigation={{
                nextEl: ".swiper-custom-nextEl",
                prevEl: ".swiper-custom-prevEl",
                enabled: true,
              }}
              breakpoints={{
                990: {
                  slidesPerView: 3,
                },
              }}
            >
              {posts.map(({ callToAction, image, paragraph }, i) => (
                <SwiperSlide>
                  <InstagramPostCard
                    key={i}
                    callToAction={callToAction}
                    image={image}
                    paragraph={paragraph}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:col-span-1 col-span-12 flex justify-center items-center swiper-custom-nextEl">
            <div>
              <Image
                src="/icons/instagramArrowDown.svg"
                width={60}
                height={60}
                alt="arrow"
                className="text-white lg:-rotate-90"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Instagram;
