import {
  faClock,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurAdress = () => {
  return (
    <div className="lg:container mx-auto py-16 px-2 lg">
      <div className="text-center text-gray-500">
        <h1 className="text-center 1xs:text-xl font-normal  lg:text-4xl  text-base relative z-10 ">
          Our Address
        </h1>
        <p className="py-5">
          Professional digital transformation solutions and consultancy.
        </p>
        <p className="">
          To discuss Microsoft Dynamics, SharePoint, Teams or Power Platform
          solutions, get in touch
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:flex-row justify-between items-center lg:text-start text-center lg:mx-44 mt-8">
        <div className=" w-3/6">
          <div className="flex items-center justify-center lg:justify-start gap-x-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              width={15}
              style={{ color: "#000000" }}
            />
            <h1 className="font-montserratRegular">Location</h1>
          </div>
          <div className=" pt-4 pl-5 lg:w-3/4">
            <p className="">
              Casa Nearshore Shore 1 6th floor Casablanca - Morocco
            </p>
          </div>
        </div>
        <div className=" w-3/6">
          <div className="flex  items-center justify-center lg:justify-start gap-x-2">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              width={15}
              style={{ color: "#000000" }}
            />
            <h1 className="font-montserratRegular ">
              Support <span>Casa</span> Casa
            </h1>
          </div>
          <div className="pt-4 pl-5 ">
            <p>Nearshore Shore 1 6th</p>
            <p>Mobile: +212 602 32 25 01</p>
            <p>Fix: +212 529 03 72 13</p>
          </div>
        </div>
        <div className=" w-3/6">
          <div className="flex items-center justify-center lg:justify-start gap-x-2">
            <FontAwesomeIcon
              icon={faClock}
              style={{ color: "#000000" }}
              width={15}
            />
            <h1 className="font-montserratRegular">Get In Touch</h1>
          </div>
          <div className=" pt-4 pl-5">
            <p>
              Monday - Friday: 09:00 to .18:00 (GMT+2) <br /> .Closed on
              Saturday Sunday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdress;
