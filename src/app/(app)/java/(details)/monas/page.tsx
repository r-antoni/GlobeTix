"use client";
import DestinationDetail from "@/components/Monas/Fragments/DestinationDetail";
import DestinationTitle from "@/components/Monas/Fragments/DestinationTitle";
import React from "react";
import DestinationCarousel from "@/components/Monas/Fragments/DestinationCarousel";


type Props = {}

const page = (props: Props) => {
  return (
  <div className='flex flex-col  w-full px-20 '>
    <DestinationTitle title='Monas' />
    <div className='flex flex-col md:flex-row justify-center gap-20'>
      <DestinationCarousel/>
      <DestinationDetail/>
    </div>
  </div>
  )
}

export default page

