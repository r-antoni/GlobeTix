import DestinationCarousel from "@/components/Bali-Zoo/Fragments/DestinationCarousel";
import DestinationDetail from "@/components/Bali-Zoo/Fragments/DestinationDetail";
import DestinationTitle from "@/components/Bali-Zoo/Fragments/DestinationTitle";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className='flex flex-col w-full px-20 pt-20'>
    <DestinationTitle title='Monas' />
    <div className='flex flex-col md:flex-row justify-center gap-20'>
      <DestinationCarousel/>
      <DestinationDetail/>
    </div>
  </div>
  );
};

export default page;
