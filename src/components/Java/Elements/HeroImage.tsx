import React from "react";
import Image from "next/image";
import {JavaHero} from "../../../../public";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image className="w-[600px] h-[700px] rounded-lg" src={JavaHero} alt="java-hero" />
    </div>
  );
};

export default HeroImage;
