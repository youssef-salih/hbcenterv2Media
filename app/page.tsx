import Banner from "@/components/banner/Banner";
import BioGraphy from "@/components/biography/BioGraphy";
import Instagram from "@/components/instagram/Instagram";
import JoinUs from "@/components/joinUs/JoinUs";
import OurPartners from "@/components/ourPartners/OurPartners";
import TestImonials from "@/components/testimonials/TestImonials";
import TimeAndTable from "@/components/timeAndTable/TimeAndTable";
import UpComingClasses from "@/components/upComingClasses/page";
import VideoConference from "@/components/videoConference/VideoConference";
import WhyChoseUs from "@/components/whyChoseUs/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <Banner />
      <BioGraphy />
      <UpComingClasses />
      <WhyChoseUs />
      {/* <TimeAndTable /> */}
      <VideoConference />
      <TestImonials />

      <Instagram />
      <JoinUs />

      
      <OurPartners />
    </main>
  );
}
