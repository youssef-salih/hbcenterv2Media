const Banner = () => {
  return (
    <section>
      <div className="relative bg-[url('../public/images/banners/banner.jpeg')] text-white h-[100vh] w-full bg-cover bg-center flex flex-col items-center my-auto justify-between py-64  ">
        <div className="bg-black w-full h-screen absolute left-0 top-0 z-40 opacity-30"></div>
        <div className="flex flex-col items-center justify-center h-full z-40">
          <div className="relative text-center w-max ">
            <p className="text-center 1xs:text-xl font-extrabold font-montserratBold lg:text-6xl  text-base relative z-10 capitalize">
              We Help people to overcome
            </p>
            <span className="absolute bg-titleUnderLine h-4 w-full bottom-0 left-0" />
          </div>
          <div className="relative w-max flex justify-center px-3">
            <p className="text-center font-extrabold font-montserratBold lg:text-6xl 1xs:text-xl  text-base relative z-10 capitalize">
              their path to feel good
            </p>
            <span className="absolute bg-titleUnderLine h-4 w-full bottom-0 left-0" />
          </div>
          <div className="relative w-max flex justify-center px-3">
            <p className="text-center font-extrabold font-montserratBold lg:text-6xl 1xs:text-xl  text-base relative z-10 capitalize">
              and perform
            </p>
            <span className="absolute bg-titleUnderLine h-4 w-full bottom-0 left-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
