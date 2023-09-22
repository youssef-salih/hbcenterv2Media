import Image from "next/image";
import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";

const WhyChoseUs = () => {
  return (
    <section
      id="video"
      className="my-12 flex flex-col items-center justify-center gap-6 text-black py-10"
    >
      {/* title */}
      <SectionHeading
        textBgChild={<>We Help People To Overcome Their </>}
        textBgChild1={<>Pain To Feel Good And Perform</>}
        image="true"
      >
        WHY CHOOSE US
      </SectionHeading>
      {/* quote  */}
    </section>
  );
};

export default WhyChoseUs;
