import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
  thumbnail: string;
};

const DestinationCard = ({destination}: any) => {
  const {title, link, thumbnail} = destination;
  return (
    <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <div className="overflow-hidden border border-gray-200 rounded-xl">
        <Link href={link}>
          <div className="m-4 overflow-hidden rounded-xl">
            <img alt={title} className="block h-[400px] w-[400px]" src={thumbnail} />
          </div>
        </Link>
        <header className="px-4 mb-4 leading-tight">
          <h1 className="text-lg">
            <Link className="font-semibold text-black no-underline hover:underline" href={link}>
              {title}
            </Link>
          </h1>
          <span className="block text-sm font-light text-gray-500 no-underline"></span>
        </header>
      </div>
    </div>
  );
};

export default DestinationCard;
