import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoConference = () => {
  return (
    <section className="bg-black grid lg:grid-cols-2 grid-cols-1 items-center lg:bg-[url('../public/icons/videoConference.svg')] lg:bg-no-repeat lg:bg-right ">
      {/* image */}
      <div className="lg:order-1 order-1">
        <Image
          src="/images/sections/videoConference.png"
          width={200}
          height={200}
          alt=""
          className="w-full h-auto"
        />
      </div>
      {/* text  */}
      <div className="lg:order-2 order-2 space-y-4 lg:py-8 py-28 flex flex-col items-center justify-center lg:bg-none bg-[url('../public/icons/videoConferenceMobile.svg')] bg-center bg-no-repeat bg-cover">
        <div className="space-y-1 lg:text-start text-center">
          <span className="font-montserratRegular text-white xl:text-5xl  lg:text-3xl text-2xl font-thin capitalize">
            Réserver une
          </span>
          <h4 className="font-montserratBold text-white xl:text-6xl lg:text-4xl text-2xl uppercase">
            visioconférence
          </h4>
        </div>
        <div className="flex justify-center">
          <button className="bg-white p-2">
            <Link href="#" className="uppercase font-semibold tracking-widest">
              Réserver
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoConference;
