import Image from "next/image";
import React from "react";
import UpComingClassCard from "./UpComingClassCard";
import SectionHeading from "../sectionHeading/SectionHeading";

export const upComingClasses = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/voge-77fe6.appspot.com/o/hbcenter%2FHb%20center.JPG?alt=media&token=2b56c209-06b5-4796-96d4-ef4d15cddebf",
    title: "Physiotherapy & Osteopathy",
    desc: "Que vous soyez un athlète qui participe à des compétitions",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/voge-77fe6.appspot.com/o/hbcenter%2FRecovery.JPG?alt=media&token=60e3721c-56ca-47a4-aff4-e0a1561baaf1",
    title: "Wellness & Recovery",
    desc: "Récupération Normatec Le système de récupération Normatec fournit une compression",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/voge-77fe6.appspot.com/o/hbcenter%2FHb%20training%20.jpg?alt=media&token=da783906-a7a8-458d-a65c-2e41afe09758",
    title: "Sports Performance & Rehabilitation",
    desc: "Nos programmes complets de performance sportive sont conçus par notre",
  },
];

const UpComingClasses = () => {
  return (
    <div id="service" className="lg:pt-0 pt-4">
      <SectionHeading
        textBgChild={"Empower Your Wellness Journey"}
        textChild={
          "HB Center : Là où la médecine du sport rencontre la santé holistique. Sentez-vous mieux, récupérez plus rapidement, et optimisez votre performance"
        }
      >
        Nos Services
      </SectionHeading>
      <section className="cContainer pt-12 space-y-4">
        {/* title */}

        {/* quote and description */}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {upComingClasses.map(({ desc, image, title }, i) => (
            <UpComingClassCard
              key={i}
              desc={desc}
              image={image}
              title={title}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpComingClasses;
