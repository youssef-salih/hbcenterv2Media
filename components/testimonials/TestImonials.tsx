"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
const TestImonials = () => {
  return (
    <section id="testimonial" className="lg:my-24 cContainer relative py-10  ">
      <div className="lg:border-black lg:absolute lg:border-4 lg:w-full lg:left-0 lg:top-0 lg:h-full lg:rounded-tr-[20rem] " />
      {/* <Image
        src="/images/sections/testimonialsborder.svg"
        width={200}
        height={200}
        alt=""
        className="lg:block hidden absolute w-[96%] top-0 left-[3%] right-[3%] "
      /> */}
      {/* <Image
        src="/images/sections/testimonialsBorderMobile.svg"
        width={200}
        height={200}
        alt=""
        className="lg:hidden sm:hidden block absolute w-[96%] top-0 left-[3%] right-[3%]"
      /> */}
      {/* title */}
      <div className="flex items-center justify-center text-center">
        <Image src="/icons/titleLeft.svg" width={20} height={20} alt="" />
        <h2 className="font-bold font-montserratBold uppercase text-xl">
          TESTIMONIALS
        </h2>
        <Image src="/icons/titleRight.svg" width={20} height={20} alt="" />
      </div>
      {/* quote  */}
      <div className="flex flex-col items-center mt-4 mx-auto">
        <div className="relative w-max flex justify-center  ">
          <p className="text-center font-extrabold font-montserratBold lg:text-4xl md:text-2xl 1xs:text-sm text-xs relative z-10">
            Some Reviews From Our Trusted Clients
          </p>
          <span className="absolute bg-titleUnderLine h-2 w-full bottom-0" />
        </div>
      </div>
      {/* swiper */}
      <div className="mt-12">
        <Swiper slidesPerView={1}>
          <SwiperSlide>
            <div className="grid grid-cols-12 items-center lg:gap-10 gap-2">
              {/* text */}
              <div className="lg:col-span-8 col-span-12 text-center lg:order-1 order-2">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/icons/testimonialsIcon.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="lg:w-[100px] w-[80px]"
                  />
                </div>
                <p className="font-semibold lg:text-base text-sm">
                  Reda Tagnaouti de son nom complet Ahmed Reda Tagnaouti, né le
                  5 avril 1996 à Fès, est un footballeur international marocain
                  jouant au poste de gardien de but au Wydad de Casablanca.
                  Formé à l'Académie Mohammed VI, il fait ses débuts en 2014
                  avec la RS Berkane avant de s'engager au Wydad Athletic Club
                  en 2017
                </p>
                <h4 className="font-bold font-montserratBold text-xl mt-4">
                  REDA TAGNAOUTI
                </h4>
                <span className="text-sm font-bold">Garidien De But</span>
              </div>
              {/* image  */}
              <div className="lg:order-2 order-1 lg:col-span-4 col-span-12 flex justify-center border-8 border-b-0 border-titleUnderLine">
                <Image
                  src="/images/testimonials/redatagnaouti.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="lg:w-[200px] w-[150px]"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>2</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default TestImonials;
