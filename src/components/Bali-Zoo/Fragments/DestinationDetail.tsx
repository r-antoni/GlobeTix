"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { BaliZooContext } from "@/context/BaliZooContext";



const DestinationDetail = () => {
  const {detail} = useContext(BaliZooContext);
  const {title, history, p1, p2, price} = detail;
  return (
    <div className="flex flex-col justify-center gap-5 w-full ">
      <h3>{title}</h3>
      <p>{history}</p>
      <p>{p1}</p>
      <p>{p2}</p>
      <div className="flex flex-col items-center gap-5 mt-10">
        <p>
          Ticket Price: <span className="underline text-blue-500 font-semi">{price}</span>
        </p>
        <div className="flex gap-5">
          <Link href="/bali/bali-zoo/booking" className="bg-blue-500 text-white px-6 py-3 text-sm rounded-full">
            Book Now
          </Link>
          <Link href="/bali" className="bg-blue-500 text-white px-6 py-3 text-sm rounded-full">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
