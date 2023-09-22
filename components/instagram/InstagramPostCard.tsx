import Image from "next/image";
import Link from "next/link";

import type { FC } from "react";

type Props = {
  image: string;
  paragraph: string;
  callToAction: {
    title?: string;
    link: string;
  };
};

const InstagramPostCard: FC<Props> = ({ callToAction, image, paragraph }) => {
  return (
    <div>
      <Image src={image} width={200} height={200} alt="" className="w-full" />
      <div className="p-2 space-y-2">
        <p className="font-oswaldSemiBold text-xs">{paragraph}</p>
        <div className="text-center">
          <button className="bg-black p-4">
            <Link
              href={callToAction.link}
              className="font-oswaldSemiBold font-bold uppercase text-white"
            >
              en savoir plus
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostCard;
