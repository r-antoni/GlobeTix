"use client";
import React, {useContext} from "react";
import {Carousel} from "flowbite-react";
import {BaliZooContext} from "@/context/BaliZooContext";

const DestinationCarousel = () => {
  const {carouselImage} = useContext(BaliZooContext);
  return (
    <Carousel slideInterval={10000} className='classname="w-full h-[750px] bg-transparent'>
      {carouselImage.map((image: any) => (
        <img className="object-cover" key={image.id} src={image.src} alt={image.alt} />
      ))}
    </Carousel>
  );
};

export default DestinationCarousel;
