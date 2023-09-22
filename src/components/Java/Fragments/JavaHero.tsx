import React from "react";
import HeroImage from "../Elements/HeroImage";
import AppHeroText from "@/components/Shared/Fragments/AppHeroText";

type Props = {};

const JavaHero = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-full w-full mt-40">
      <AppHeroText destination="Java Island" />
      <HeroImage />
    </div>
  );
};

export default JavaHero;
