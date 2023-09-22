import React from "react";
import AppHeroText from "@/components/Shared/Fragments/AppHeroText";
import HeroImage from "../Elements/HeroImage";

type Props = {};

const BaliHero = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-full w-full mt-40">
      <AppHeroText destination="Bali" />
      <HeroImage />
    </div>
  );
};

export default BaliHero;
