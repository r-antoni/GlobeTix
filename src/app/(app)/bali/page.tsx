"use client";
import BaliContent from "@/components/Bali/Fragments/BaliContent";
import BaliHero from "@/components/Bali/Fragments/BaliHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full min-h-screen">
      <BaliHero />
      <BaliContent />
    </div>
  );
};

export default page;
