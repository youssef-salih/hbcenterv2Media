import Map from "@/components/map/Map";
import OurAdress from "@/components/ourAdress/OurAdress";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="relative bg-gray-600 text-white  w-full  flex flex-col items-center  justify-between lg:py-36  p-20 ">
        <h1 className="text-center 1xs:text-xl font-normal  lg:text-6xl  text-base relative z-10 capitalize">
          contact Us
        </h1>
      </div>
      <OurAdress />
      <Map/>
    </section>
  );
};

export default page;
