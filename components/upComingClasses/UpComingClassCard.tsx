import Image from "next/image";
import type { FC } from "react";

type Props = {
  image: string;
  title: string;
  desc: string;
};
const UpComingClassCard: FC<Props> = ({ desc, image, title }) => {
  return (
    <div className="space-y-4 bg-white shadow-2xl border-b-8 border-black">
      {/* image  */}
      <div className="h-[250px]">
        <Image
          src={image}
          width={200}
          height={200}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* icons  */}
      <div className="flex justify-center">
        <Image src="/icons/upcomingclasses.svg" width={20} height={20} alt="" />
      </div>
      {/* title */}
      <div className="flex justify-center">
        <h4 className="font-bold px-4 text-center">{title}</h4>
      </div>
      {/* desc */}
      <div className="flex justify-center items-center gap-2 pb-8 mx-2 text-center">
        <span>{desc}</span>
      </div>
    
 
    </div>
  );
};

export default UpComingClassCard;
