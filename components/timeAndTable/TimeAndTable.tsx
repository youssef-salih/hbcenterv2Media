import Image from "next/image";
import React from "react";
import Calendar from "./Calendar";

const TimeAndTable = () => {
  return (
    <section className="pt-10 bg-[url('../public/images/backgrounds/timeAndTableBackground.svg')] bg-cover bg-no-repeat">
      {/* title and illustration */}
      <div className="grid grid-cols-12 lg:px-8 px-0 items-center">
        <div className="col-span-3">
          <Image
            src="/images/sections/clock.svg"
            width={200}
            height={200}
            className="w-full"
            alt=""
          />
        </div>
        <div className="col-span-6 flex flex-col justify-center items-center gap-4 text-center">
          <div className="relative">
            <Image
              src="/images/backgrounds/calendar.svg"
              width={280}
              height={280}
              quality={100}
              alt=""
            />
            <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserratBold font-bold lg:text-2xl md:text-xl text-sm whitespace-nowrap">
              TIME & TABLE
            </h4>
          </div>
          <h2 className="font-montserratBold lg:text-4xl md:text-2xl text-lg whitespace-nowrap">
            Weekly Class Schedule
          </h2>
        </div>
        <div className="col-span-3">
          <Image
            src="/images/sections/bottle.svg"
            width={200}
            height={200}
            className="w-full"
            alt=""
          />
        </div>
      </div>
      {/* calendar */}
      <div className="cContainer bg-white shadow-2xl mt-8">
        <Calendar />
      </div>
    </section>
  );
};

export default TimeAndTable;
