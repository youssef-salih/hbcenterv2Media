import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  textBgChild?: ReactNode;
  textBgChild1?: ReactNode;
  textChild?: ReactNode;
  image?: ReactNode;
  to?: ReactNode;
}

function SectionHeading({
  children,
  textBgChild,
  textBgChild1,
  textChild,
  image,
  to,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center flex-col lg:relative w-full lg:min-h-[200px] min-h-[60px] ">
      {image ? (
        <Image
          src="/icons/titleRight.svg"
          width={200}
          height={200}
          alt=""
          className="lg:absolute w-auto left-0 hidden lg:block h-full"
        />
      ) : (
        ""
      )}

      <div className="flex items-center justify-center text-center h-full">
        <Image src="/icons/titleLeft.svg" width={20} height={20} alt="" />
        <h2 className="font-bold font-montserratBold uppercase text-xl">
          {children}
        </h2>
        <Image src="/icons/titleRight.svg" width={20} height={20} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 ">
        {/* quote */}
        {textBgChild ? (
          <div className="flex flex-col items-center mt-4 ">
            {/* first part  */}
            <div className="relative w-max flex justify-center px-3">
              <p className=" text-center  font-extrabold font-montserratBold lg:text-4xl 1xs:text-sm text-xs relative z-10 uppercase">
                {textBgChild}
              </p>
              <span className="absolute bg-titleUnderLine lg:h-4 h-2 w-full bottom-0" />
            </div>
          </div>
        ) : (
          ""
        )}

        {textBgChild1 ? (
          <div className="flex flex-col items-center mt-4 mx-auto">
            {/* first part  */}
            <div className="relative w-max flex justify-center px-3">
              <p className="text-center  font-extrabold font-montserratBold lg:text-4xl 1xs:text-sm text-xs relative z-10 uppercase">
                {to ? (
                  <Link href={`${to}`} target="__blank">
                    {textBgChild1}
                  </Link>
                ) : (
                  <>{textBgChild1}</>
                )}
              </p>
              <span className="absolute bg-titleUnderLine lg:h-4 h-2 w-full bottom-0" />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-center">
          <p className="text-gray-400 w-4/5  text-center">{textChild}</p>
        </div>
      </div>
      {image ? (
        <Image
          src="/icons/titleLeft.svg"
          width={200}
          height={200}
          alt=""
          className="lg:absolute w-auto right-0 hidden lg:block h-full"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default SectionHeading;
