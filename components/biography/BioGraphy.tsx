import Image from "next/image";

const hamzaTimeLime = [
  "KINÉSITHÉRAPEUTE DU SPORT",
  "THÉRAPEUTE MANUEL",
  "SPÉCIALISTE DU GENOU",
  "DIPLÔME DE FIFA EN MÉDECINE DU FOOTBALL",
  "CERTIFIÉ “SPORT INJURY” INTERNATIONAL OLYMPIC COMMITTEE",
  "5 ANS D’EXPÉRIENCE PROFESSIONNELLE AVEC LES CLUBS DU FOOTBALL NATIONAL ET LES JOUEURS INTERNATIONAUX",
];

const BioGraphy = () => {
  return (
    <section id="about" className="mb-12 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 lg:border-b-4  lg:border-black ">
      {/* image */}
      <div  className="relative lg:h-[710px]">
        {/* hamza name  */}

        <Image
          src="/images/sections/hamzabououd.png"
          width={200}
          height={200}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hidden lg:block absolute border-l-4 border-black   h-full my-auto w-fit top-0 right-0 z-50" />
      </div>

      {/* information */}
      <div className="lg:p-10 px-10">
        {/* title */}
        <div className="flex items-center justify-center text-center border-5">
          <Image src="/icons/titleLeft.svg" width={20} height={20} alt="" />
          <h2 className="font-bold font-montserratBold uppercase text-xl">
            MEET THE FOUNDER
          </h2>
          <Image src="/icons/titleRight.svg" width={20} height={20} alt="" />
        </div>
        {/* quote */}
        <div className="flex flex-col items-center mt-4">
          {/* first part  */}
          <div className="relative w-max flex justify-center px-3">
            <p className="text-center font-extrabold font-montserratBold lg:text-3xl text-2xl relative z-10 capitalize">
              HAMZA BOUOUD
            </p>
            <span className="absolute bg-titleUnderLine h-4 w-full bottom-0" />
          </div>
        </div>
        <ul className="space-y-8 mt-14">
          {hamzaTimeLime.map((element) => (
            <li className="flex items-start gap-8">
              <Image
                src="/icons/upcomingclasses.svg"
                width={20}
                height={20}
                alt=""
              />
              <span className="font-bold font-montserratBold uppercase">
                {element}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BioGraphy;
