"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import SectionHeading from "../sectionHeading/SectionHeading";
import JoinUsReelCard from "./JoinUsReelCard";

interface Pinstaitem {
  permalink: string;
  mediaUrl: string;
  thumbnail: string;
  type: string;
  caption: string;
}
const JoinUs = () => {
  const [instaItems, setInstaItems] = useState<Pinstaitem[]>([]);

  const userId = "";
  const access = "";
  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${access}`;
  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${access}&fields=media_url,permalink,thumbnail_url,media_type,caption`;
      const res = await fetch(mediaUrl);
      const json = await res.json();

      const instaItem: Pinstaitem = {
        permalink: json.permalink,
        mediaUrl: json.media_url,
        thumbnail: json.thumbnail_url,
        type: json.media_type,
        caption: json.caption,
      };

      return instaItem;
    };

    const doFetch = async () => {
      if (!userId || !access) {
        console.log("one undefined", { userId, access });
        return;
      }
      const res = await fetch(instaUrl);

      const json = (await res.json()).data;

      const fetchedItems: Pinstaitem[] = [];

      for (let i = 0; i < json.length && i < 9; i++) {
        const item = json[i];
        const itemId = item.id;
        const instaItem = await fetchMedia(itemId);
        fetchedItems.push(instaItem);
      }
      setInstaItems(fetchedItems);
    };

    doFetch();
  }, [userId, access, instaUrl]);

  return (
    <div id="contact">
      <SectionHeading
        textBgChild1="@/HBCENTER_"
        image="true"
        to="https://www.instagram.com/hbcenter_/"
      >
        Follow Us
      </SectionHeading>
      <div className="cContainer  mb-12 space-y-10 lg:mt-16 mt-8">
        <section>
          <div className="lg:col-span-10 col-span-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              modules={[Pagination, Navigation]}
              navigation={{
                nextEl: ".swiper-custom-nextEl",
                prevEl: ".swiper-custom-prevEl",
                enabled: true,
              }}
              breakpoints={{
                600: { slidesPerView: 2 },
                990: {
                  slidesPerView: 4,
                },
              }}
            >
              {instaItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <JoinUsReelCard
                    key={index}
                    callToAction={item.permalink}
                    image={item.mediaUrl}
                    type={item.type}
                    thumbnail={item.thumbnail}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JoinUs;
